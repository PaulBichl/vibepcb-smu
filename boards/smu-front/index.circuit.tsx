// VibePCB SMU - display board (front panel): voltage and current on two 0.56" 4-digit
// 7-segment displays, six status LEDs, OUTPUT and MODE buttons. 2 layers, 150 x 45 mm.
// Ribbon J1 to the main board (smu-main J5): 1/2 5V, 3/4 GND, 5 DIN, 6 CLK, 7 BTN_OUT,
// 8 BTN_MODE, 9 3V3, 10 GND. Build with: hatch run pcb all smu-front
//
// - TM1640 (16 grids x 8 segments, 2-wire): GRID1-4 = voltage digits, GRID5-8 = current
//   digits, GRID9 = status LEDs (cathodes), SEG1-8 = a..g, dp (anodes). No series resistors:
//   the TM1640 regulates the segment current (brightness set by firmware).
// - The TM1640 runs on 5 V (VIH 0.7 * VDD); SN74LV1T125 buffers (5 V supply, 3.3 V-compatible
//   inputs) translate DIN / SCLK from the 3.3 V ESP32.
// - Buttons pull to GND; pull-ups + debounce caps are on the main board.
import { A2541WV_2x5P, KT_0603G, KT_0603R, SN74LV1T125DBVR, SR420561N, TM1640_TA2103_, TS_1187A_B_A_B } from "./imports"

const SEG_PINS = ["A", "B", "C", "D", "E", "F", "G", "DP"] as const
// imported LED parts: their pin 1 polarity differs (green: cathode, red: anode)
const LEDS = [
  ["D1", "CV", KT_0603G], // constant voltage
  ["D2", "CC", KT_0603R], // current limit active
  ["D3", "OUT", KT_0603G], // output relay closed
  ["D4", "SINK", KT_0603R], // sinking power
  ["D5", "LAN", KT_0603G], // network connected
  ["D6", "ERR", KT_0603R], // fault / over-temperature
] as const

const net = (name: string, pins: string[]) =>
  pins.map((p) => <trace key={`${name}:${p}`} from={p} to={`net.${name}`} />)

export default () => (
  <board width="150mm" height="45mm" minTraceWidth="0.15mm" minTraceToPadEdgeClearance="0.2mm"
    minBoardEdgeClearance="0.5mm" minViaHoleDiameter="0.3mm" minViaPadDiameter="0.6mm"
    minViaEdgeToPadEdgeClearance="0.2mm" autorouterEffortLevel="10x">
    {/* displays: U1 = voltage (left), U2 = current */}
    <SR420561N name="U1" pcbX={-40} pcbY={5} pcbRotation={90} />
    <SR420561N name="U2" pcbX={18.5} pcbY={5} pcbRotation={90} />
    <silkscreentext text="VOLTAGE  [V]" pcbX={-40} pcbY={18.5} fontSize="1.5mm" />
    <silkscreentext text="CURRENT  [A]" pcbX={18} pcbY={18.5} fontSize="1.5mm" />

    <TM1640_TA2103_ name="U3" pcbX={-11} pcbY={-12} pcbRotation={90} />
    <capacitor name="C1" capacitance="100nF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C14663"] }} pcbX={0} pcbY={-12} pcbRotation={90} />
    <capacitor name="C2" capacitance="10uF" footprint="0805" supplierPartNumbers={{ jlcpcb: ["C15850"] }} pcbX={2} pcbY={-12} pcbRotation={90} />
    <SN74LV1T125DBVR name="U4" pcbX={-58} pcbY={-15} />
    <SN74LV1T125DBVR name="U5" pcbX={-58} pcbY={-9} />
    <capacitor name="C3" capacitance="100nF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C14663"] }} pcbX={-54} pcbY={-15} pcbRotation={90} />
    <capacitor name="C4" capacitance="100nF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C14663"] }} pcbX={-54} pcbY={-9} pcbRotation={90} />
    <A2541WV_2x5P name="J1" pcbX={-66} pcbY={-14} pcbRotation={90} />

    {/* 7-segment wiring: segments shared, one grid per digit */}
    {SEG_PINS.flatMap((seg, i) => net(`SEG_${seg}`, [`.U1 > .${seg}`, `.U2 > .${seg}`, `.U3 > .SEG${i + 1}`]))}
    {[1, 2, 3, 4].flatMap((d) => [
      ...net(`GRID${d}`, [`.U1 > .DIG${d}`, `.U3 > .GRID${d}`]),
      ...net(`GRID${d + 4}`, [`.U2 > .DIG${d}`, `.U3 > .GRID${d + 4}`]),
    ])}

    {/* status LEDs: anodes on SEG1..6, cathodes on GRID9 */}
    {LEDS.map(([name, , Led], i) => (
      <Led key={name} name={name} pcbX={52} pcbY={15 - i * 5} />
    ))}
    {LEDS.map(([, label], i) => (
      <silkscreentext key={label} text={label} pcbX={56} pcbY={15 - i * 5} fontSize="1.2mm" anchorAlignment="center_left" />
    ))}
    {LEDS.flatMap(([name], i) => [
      ...net(`SEG_${SEG_PINS[i]}`, [`.${name} > .anode`]),
      ...net("GRID9", [`.${name} > .cathode`]),
    ])}
    {net("GRID9", [".U3 > .GRID9"])}

    {/* buttons */}
    <TS_1187A_B_A_B name="SW1" pcbX={67} pcbY={8} />
    <TS_1187A_B_A_B name="SW2" pcbX={67} pcbY={-8} />
    <silkscreentext text="OUTPUT" pcbX={67} pcbY={13} fontSize="1.2mm" />
    <silkscreentext text="MODE" pcbX={67} pcbY={-3} fontSize="1.2mm" />
    {net("BTN_OUT", [".SW1 > .AB", ".J1 > .pin7"])}
    {net("BTN_MODE", [".SW2 > .AB", ".J1 > .pin8"])}

    {/* power + level shifting */}
    {net("V5", [".J1 > .pin1", ".J1 > .pin2", ".U3 > .VDD", ".C1 > .pin1", ".C2 > .pin1", ".U4 > .VCC", ".U5 > .VCC",
      ".C3 > .pin1", ".C4 > .pin1"])}
    {net("GND", [".J1 > .pin3", ".J1 > .pin4", ".J1 > .pin10", ".U3 > .VSS", ".C1 > .pin2", ".C2 > .pin2", ".U4 > .GND",
      ".U5 > .GND", ".U4 > .N_OE", ".U5 > .N_OE", ".C3 > .pin2", ".C4 > .pin2", ".SW1 > .CD", ".SW2 > .CD"])}
    {net("DIN_3V3", [".J1 > .pin5", ".U4 > .A"])}
    {net("CLK_3V3", [".J1 > .pin6", ".U5 > .A"])}
    {net("DIN", [".U4 > .Y", ".U3 > .DIN"])}
    {net("SCLK", [".U5 > .Y", ".U3 > .SCLK"])}

    <hole name="H1" diameter="3.2mm" pcbX={-71} pcbY={18.5} />
    <hole name="H2" diameter="3.2mm" pcbX={71} pcbY={18.5} />
    <hole name="H3" diameter="3.2mm" pcbX={-71} pcbY={-18.5} />
    <hole name="H4" diameter="3.2mm" pcbX={71} pcbY={-18.5} />

    <copperpour connectsTo="net.GND" layer="bottom" clearance="0.3mm" boardEdgeMargin="0.5mm" />
  </board>
)

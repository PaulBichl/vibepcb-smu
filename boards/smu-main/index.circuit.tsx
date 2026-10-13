// VibePCB SMU - main board: 1-channel 4-quadrant source/measure unit, +-30 V / +-1 A.
// 160 x 100 mm, 4 layers (top+GND / GND / route+GND / bottom+GND). Rear edge (+y): USB-C PD input,
// RJ45, OPA548 tab (bolts to a heatsink on the rear panel). Front edge (-y): output terminal
// (HI, S+, S-, LO -> binding posts) and the ribbon to the display board (boards/smu-front).
// Build with: hatch run pcb all smu-main
//
// Architecture (see boards/smu-main/sim for the loop simulations, README.md for the numbers)
// - Power: USB-C PD sink (STUSB4500, NVM set to request 20 V) -> P-FET -> VIN 9..20 V.
//   5 V buck (LMR51635) -> 3.3 V digital (AP2112K), 3.3 V analog (ME6211), -4.35 V (LM27761).
// - Tracking rails for the power op amp (keeps its dissipation low and the span <= 60 V):
//   V+ = SEPIC (LM5156 + 100 V FET), 4.5..34 V; V- = inverting buck-boost (LMR51635, IC ground
//   on V-), -5..-34 V. Firmware sets both by PWM (V+ = Vout_max + 4 V, V- = Vout_min - 4 V);
//   a 51 V zener from V+ into the V- feedback caps the span V+ - V- at ~52 V in hardware.
//   At reset (PWM pins high-Z) both rails sit at their minimum.
// - Output stage: OPA548 (60 V / 3 A power op amp) as inverting summing amplifier with remote
//   sense: V(S+) - V(S-) = 30 V - 24 * VSET. VSET/ISET from a 16-bit DAC8563 (0..2.5 V).
//   Current: 0.1 R shunt in the LO return to GND, INA828 (G = 10, inputs swapped) -> -1 V/A.
//   Two current-limit integrators (OPA2192) OR into the summing node through diodes: +-ISET/2 A.
//   OPA548 hardware limit (ILIM pin, NPN mirror from a PWM-set PNP current source) is
//   programmed just above the analog limit for fast protection; 0 A at reset.
//   Output relay (DPDT, both poles parallel) + OPA548 E/S (opto, disabled by default).
// - Measure: ADS131M02 (24 bit, simultaneous V/I): V via 300k/10k dividers on S+/S-, I direct.
// - Control: ESP32-S3-MINI-1 + W5500 Ethernet (SPI) + HR911105A magjack; Wi-Fi as a bonus.
import {
  ADS131M02IPWR, AO4407A, AP2112K_3_3TRG1, A2541WV_2x5P, B2B_XH_A_GU, BSC160N10NS3G, BZX84C51,
  DAC8563SDGSR, DG301_5_0_04P_14_1000A_H_, ESP32_S3_MINI_1_N8, HFD4_5, HR911105A, INA828IDR,
  LM27761DSGR, LM5156HPWPR, LMR51635XDDCR, ME6211C33M5G_N, MMBT5401_RANGE_200_300_ as PNP,
  MMBT5551_RANGE_200_300_ as NPN, NX3225SA_25MHz_STD_CSR_6, NXA63V100M8_15_LO as ELCAP,
  OPA2192IDR, OPA548T, OT2JI_111_8_192M, PC817C, SMBJ24A, SMBJ36CA, SRP1265A_220M, SS5100,
  STUSB4500QTR, SWPA6045S100MT, TS_1187A_B_A_B, TYPE_C_16PIN_2MD_073_, USBLC6_2SC6, W5500,
} from "./imports"
import { C, D4148, FERRITE, NMOS, R, RP, RSENSE, TRACE_MAX, net } from "./parts"

const PWR = "0.8mm" // VIN / V+ / V- / output path
const MID = "0.4mm" // 5 V, 3.3 V, switch-node-adjacent
const ESP_GND = [1, 2, 42, 43, ...Array.from({ length: 16 }, (_, i) => 46 + i)].map((n) => `.U20 > .pin${n}`)

export default () => (
  <board
    width="160mm"
    height="100mm"
    layers={4}
    minTraceWidth="0.15mm"
    minTraceToPadEdgeClearance="0.1mm" // = KiCad clearance; JLCPCB 4-layer allows 0.09 mm, the router spaces tracks ~0.115 mm
    minBoardEdgeClearance="0.5mm"
    minViaHoleDiameter="0.3mm"
    minViaPadDiameter="0.6mm"
    minViaEdgeToPadEdgeClearance="0.2mm"
    autorouterEffortLevel="10x"
    schematicDisabled // TEMP: placement iteration
  >
    {/* ============================ USB-C PD input ============================ */}
    <TYPE_C_16PIN_2MD_073_ name="J1" pcbX={-70} pcbY={44.8} pcbRotation={180} />
      <STUSB4500QTR name="U1" pcbX={-57} pcbY={39} />
      <C name="C1" pcbX={-61.5} pcbY={41.5} pcbRotation={90} v="1uF" />
      <C name="C2" pcbX={-52.5} pcbY={41.5} pcbRotation={90} v="1uF" />
      <C name="C3" pcbX={-52.5} pcbY={38} pcbRotation={90} v="1uF" />
      <C name="C4" pcbX={-61.5} pcbY={38} pcbRotation={90} v="100nF" />
      <R name="R1" pcbX={-57} pcbY={34.5} v="1k" />
      <R name="R2" pcbX={-76} pcbY={36} pcbRotation={90} v="1M" />
      <C name="C5" pcbX={-74} pcbY={36} pcbRotation={90} v="4.7nF" />
      <USBLC6_2SC6 name="U2" pcbX={-66} pcbY={35.5} />
    {net("VBUS", [".J1 > .VBUS1", ".J1 > .VBUS2", ".U1 > .VDD", ".C1 > .pin1", ".C4 > .pin1", ".R1 > .pin1"], { thickness: PWR })}
    {net("GND", [".J1 > .GND1", ".J1 > .GND2", ".U1 > .GND", ".U1 > .EP", ".U1 > .VSYS", ".U1 > .RESET",
      ".U1 > .ADDR0", ".U1 > .ADDR1", ".C1 > .pin2", ".C2 > .pin2", ".C3 > .pin2", ".C4 > .pin2", ".R2 > .pin2",
      ".C5 > .pin2", ".U2 > .GND"])}
    {net("USB_SHIELD", [".J1 > .EH1", ".J1 > .EH2", ".J1 > .EH3", ".J1 > .EH4", ".R2 > .pin1", ".C5 > .pin1"])}
    {net("CC1", [".J1 > .CC1", ".U1 > .CC1", ".U1 > .CC1DB"])}
    {net("CC2", [".J1 > .CC2", ".U1 > .CC2", ".U1 > .CC2DB"])}
    {net("USB_DP", [".J1 > .Dp1", ".J1 > .Dp2", ".U2 > .pin3", ".U2 > .pin4"])}
    {net("USB_DN", [".J1 > .Dn1", ".J1 > .Dn2", ".U2 > .pin1", ".U2 > .pin6"])}
    {net("V3V3", [".U2 > .VBUS"])}
    <trace from=".U1 > .VBUS_VS_DISCH" to=".R1 > .pin2" maxLength={TRACE_MAX} />
    <trace from=".U1 > .VREG_1V2" to=".C2 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".U1 > .VREG_2V7" to=".C3 > .pin1" maxLength={TRACE_MAX} />
    {net("I2C_SCL", [".U1 > .SCL"])}
    {net("I2C_SDA", [".U1 > .SDA"])}
    {net("PD_ALERT", [".U1 > .ALERT"])}

    {/* load switch: VBUS_EN_SNK (open drain) pulls the P-FET gate low once a contract exists */}
      <AO4407A name="Q1" pcbX={-44} pcbY={44.5} />
      <R name="R3" pcbX={-44} pcbY={39.6} v="100k" />
      <SMBJ24A name="D1" pcbX={-44} pcbY={36} />
      <ELCAP name="C6" pcbX={-44} pcbY={28} />
      <C name="C7" pcbX={-49.5} pcbY={30.5} pcbRotation={90} v="2.2uF 100V" />
      <C name="C8" pcbX={-38.5} pcbY={30.5} pcbRotation={90} v="2.2uF 100V" />
    {net("VBUS", [".Q1 > .S1", ".Q1 > .S2", ".Q1 > .S3", ".R3 > .pin1"], { thickness: PWR })}
    {net("PD_GATE", [".Q1 > .G", ".R3 > .pin2", ".U1 > .VBUS_EN_SNK"])}
    {net("VIN", [".Q1 > .D1", ".Q1 > .D2", ".Q1 > .D3", ".Q1 > .D4", ".D1 > .C", ".C6 > .pin1", ".C7 > .pin1", ".C8 > .pin1"], { thickness: PWR })}
    {net("GND", [".D1 > .A", ".C6 > .pin2", ".C7 > .pin2", ".C8 > .pin2"], { thickness: PWR })}

    {/* ============================ logic supplies ============================ */}
      <LMR51635XDDCR name="U3" pcbX={-66} pcbY={24} />
      <SWPA6045S100MT name="L1" pcbX={-57} pcbY={24} />
      <C name="C9" pcbX={-71.5} pcbY={24} pcbRotation={90} v="2.2uF 100V" />
      <C name="C10" pcbX={-69} pcbY={27.5} v="100nF 100V" />
      <C name="C11" pcbX={-63} pcbY={27.5} v="100nF" />
      <C name="C12" pcbX={-51.5} pcbY={25.5} pcbRotation={90} v="22uF" />
      <C name="C13" pcbX={-51.5} pcbY={22} pcbRotation={90} v="22uF" />
      <R name="R4" pcbX={-70} pcbY={19.5} v="100k" />
      <R name="R5" pcbX={-67} pcbY={19.5} v="100k" />
      <R name="R6" pcbX={-64} pcbY={19.5} v="20k" />
    {/* 5 V = 0.8 V * (1 + 100k / 20k) = 4.8 V */}
    {net("VIN", [".U3 > .VIN", ".C9 > .pin1", ".C10 > .pin1", ".R4 > .pin1"], { thickness: MID })}
    {net("GND", [".U3 > .GND", ".C9 > .pin2", ".C10 > .pin2", ".C12 > .pin2", ".C13 > .pin2", ".R6 > .pin2"], { thickness: MID })}
    <trace from=".U3 > .EN" to=".R4 > .pin2" maxLength={TRACE_MAX} />
    {net("SW5", [".U3 > .SW", ".L1 > .pin1", ".C11 > .pin2"], { thickness: MID })}
    <trace from=".U3 > .CB" to=".C11 > .pin1" maxLength={TRACE_MAX} />
    {net("V5", [".L1 > .pin2", ".C12 > .pin1", ".C13 > .pin1", ".R5 > .pin1"], { thickness: MID })}
    {net("FB5", [".U3 > .FB", ".R5 > .pin2", ".R6 > .pin1"])}
      <AP2112K_3_3TRG1 name="U4" pcbX={-74} pcbY={13} />
      <C name="C14" pcbX={-77.5} pcbY={13} pcbRotation={90} v="1uF" />
      <C name="C15" pcbX={-70.5} pcbY={13} pcbRotation={90} v="10uF" />
      <FERRITE name="FB1" pcbX={-66} pcbY={13} />
      <C name="C16" pcbX={-62.5} pcbY={13} pcbRotation={90} v="10uF" />
      <C name="C17" pcbX={-60.5} pcbY={13} pcbRotation={90} v="100nF" />
      <ME6211C33M5G_N name="U5" pcbX={-56} pcbY={13} />
      <C name="C18" pcbX={-52.5} pcbY={13} pcbRotation={90} v="1uF" />
      <C name="C19" pcbX={-50.5} pcbY={13} pcbRotation={90} v="10uF" />
      <LM27761DSGR name="U6" pcbX={-72} pcbY={6} />
      <C name="C20" pcbX={-75.5} pcbY={6} pcbRotation={90} v="1uF" />
      <C name="C21" pcbX={-68.5} pcbY={8} v="4.7uF" />
      <C name="C22" pcbX={-68.5} pcbY={4} v="4.7uF" />
      <C name="C23" pcbX={-65.5} pcbY={6} pcbRotation={90} v="4.7uF" />
      <R name="R7" pcbX={-62} pcbY={7.5} v="1M" />
      <R name="R8" pcbX={-62} pcbY={5} v="390k" />
    {net("V5", [".U4 > .VIN", ".U4 > .EN", ".C14 > .pin1", ".FB1 > .pin1"], { thickness: MID })}
    {net("V3V3", [".U4 > .VOUT", ".C15 > .pin1"], { thickness: MID })}
    {net("V5A", [".FB1 > .pin2", ".C16 > .pin1", ".C17 > .pin1", ".U5 > .VIN", ".U5 > .CE", ".U6 > .VIN", ".U6 > .EN", ".C21 > .pin1"])}
    {net("V3V3A", [".U5 > .VOUT", ".C18 > .pin1", ".C19 > .pin1"])}
    {/* -4.35 V = -1.22 V * (1 + 1M / 390k) */}
    {net("VNA", [".U6 > .VOUT", ".C23 > .pin2", ".R7 > .pin1"])}
    {net("CPOUT", [".U6 > .CPOUT", ".C22 > .pin2"])}
    <trace from=".U6 > .C1_POS" to=".C20 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".U6 > .C1_NEG" to=".C20 > .pin2" maxLength={TRACE_MAX} />
    {net("VNA_FB", [".U6 > .VFB", ".R7 > .pin2", ".R8 > .pin1"])}
    {net("GND", [".U4 > .GND", ".C14 > .pin2", ".C15 > .pin2", ".C16 > .pin2", ".C17 > .pin2", ".U5 > .VSS",
      ".C18 > .pin2", ".C19 > .pin2", ".U6 > .GND", ".U6 > .PAD", ".C21 > .pin2", ".C22 > .pin1", ".C23 > .pin1", ".R8 > .pin2"])}

    {/* ============================ V+ rail: SEPIC ============================ */}
    {/* V+ = 1 V * (1 + 100k/4.3k) + 100k/11k * (1 V - VP_CTL): 33.3 V (PWM 0 %) .. 3.4 V (100 %);
        firmware keeps it in 4.5..34 V. UVLO 12.8 V (75k/10k), RT 49.9k ~ 440 kHz, spread spectrum on. */}
      <LM5156HPWPR name="U7" pcbX={-61} pcbY={-24} />
      <BSC160N10NS3G name="Q2" pcbX={-53} pcbY={-39} />
      <RSENSE name="R9" pcbX={-55} pcbY={-46.5} v="15m" />
      <SRP1265A_220M name="L2" pcbX={-66} pcbY={-38} />
      <SRP1265A_220M name="L3" pcbX={-42} pcbY={-38} />
      <C name="C24" pcbX={-52.5} pcbY={-32.5} v="4.7uF 100V" />
      <C name="C25" pcbX={-52.5} pcbY={-29} v="4.7uF 100V" />
      <SS5100 name="D2" pcbX={-42} pcbY={-27} />
      <C name="C26" pcbX={-36} pcbY={-25} pcbRotation={90} v="4.7uF 100V" />
      <C name="C27" pcbX={-32.5} pcbY={-25} pcbRotation={90} v="4.7uF 100V" />
      <ELCAP name="C28" pcbX={-30} pcbY={-43} />
      <C name="C29" pcbX={-76.5} pcbY={-21} pcbRotation={90} v="2.2uF 100V" />
      <C name="C30" pcbX={-74} pcbY={-21} pcbRotation={90} v="2.2uF 100V" />
      <C name="C31" pcbX={-66} pcbY={-21} pcbRotation={90} v="1uF" />
      <C name="C32" pcbX={-66} pcbY={-29.5} v="47nF" />
      <C name="C33" pcbX={-57} pcbY={-29.5} v="22nF" />
      <C name="C34" pcbX={-55} pcbY={-25.5} pcbRotation={90} v="470pF" />
      <R name="R10" pcbX={-60} pcbY={-29.5} v="10k" />
      <R name="R11" pcbX={-63} pcbY={-29.5} v="49.9k" />
      <R name="R12" pcbX={-69} pcbY={-24} pcbRotation={90} v="75k" />
      <R name="R13" pcbX={-67} pcbY={-24} pcbRotation={90} v="10k" />
      <R name="R14" pcbX={-56} pcbY={-21} v="100k" />
      <R name="R15" pcbX={-56} pcbY={-18.5} v="4.3k" />
      <R name="R16" pcbX={-60} pcbY={-18.5} v="10k" />
      <R name="R17" pcbX={-64} pcbY={-18.5} v="1k" />
      <C name="C35" pcbX={-68} pcbY={-17} pcbRotation={90} v="10uF" />
    {net("VIN", [".U7 > .BIAS", ".L2 > .pin1", ".C29 > .pin1", ".C30 > .pin1", ".R12 > .pin1"], { thickness: PWR })}
    {net("GND", [".U7 > .PGND", ".U7 > .AGND", ".U7 > .EP", ".U7 > .DITHOFF", ".R9 > .pin2", ".L3 > .pin2",
      ".C26 > .pin2", ".C27 > .pin2", ".C28 > .pin2", ".C29 > .pin2", ".C30 > .pin2", ".C31 > .pin2", ".C32 > .pin2",
      ".C33 > .pin2", ".C34 > .pin2", ".R11 > .pin2", ".R13 > .pin2", ".R15 > .pin2", ".C35 > .pin2"], { thickness: MID })}
    <trace from=".U7 > .VCC" to=".C31 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".U7 > .GATE" to=".Q2 > .G" thickness={MID} maxLength={TRACE_MAX} />
    {net("CS_P", [".Q2 > .S1", ".Q2 > .S2", ".Q2 > .S3", ".R9 > .pin1", ".U7 > .CS"], { thickness: PWR })}
    {net("SW_P", [".Q2 > .D1", ".Q2 > .D2", ".Q2 > .D3", ".Q2 > .D4", ".Q2 > .D5", ".L2 > .pin2", ".C24 > .pin1", ".C25 > .pin1"], { thickness: PWR })}
    {net("SEP_MID", [".C24 > .pin2", ".C25 > .pin2", ".L3 > .pin1", ".D2 > .anode"], { thickness: PWR })}
    {net("VP", [".D2 > .cathode", ".C26 > .pin1", ".C27 > .pin1", ".C28 > .pin1", ".R14 > .pin1"], { thickness: PWR })}
    <trace from=".U7 > .SS" to=".C32 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".U7 > .RT" to=".R11 > .pin1" maxLength={TRACE_MAX} />
    {net("COMP_P", [".U7 > .COMP", ".R10 > .pin1", ".C34 > .pin1"])}
    <trace from=".R10 > .pin2" to=".C33 > .pin1" maxLength={TRACE_MAX} />
    {net("UVLO_P", [".U7 > .EN", ".R12 > .pin2", ".R13 > .pin1"])}
    {net("FB_P", [".U7 > .FB", ".R14 > .pin2", ".R15 > .pin1", ".R16 > .pin2"])}
    {/* PWM_VP -> 1k/10uF -> 10k into FB; 10k pull-up at the MCU pin = minimum V+ at reset */}
    {net("VP_CTL", [".R16 > .pin1", ".R17 > .pin2", ".C35 > .pin1"])}
    {net("PWM_VP", [".R17 > .pin1"])}

    {/* ============================ V- rail: inverting buck-boost ============================ */}
    {/* LMR51635 ground = V-. |V-| = 0.8 + 100k * (0.8/2.4k - Ictl): 34 V (Q3 off) .. 5 V (291 uA).
        EN = (VIN - V-) * 100k/1.1M: starts at VIN ~ 13 V. Span clamp: BZX84C51 + 1k from V+. */}
      <LMR51635XDDCR name="U8" pcbX={-18} pcbY={-24} />
      <SRP1265A_220M name="L4" pcbX={-10} pcbY={-38} />
      <C name="C36" pcbX={-14.5} pcbY={-20.5} v="100nF" />
      <C name="C37" pcbX={-23.5} pcbY={-21.5} v="2.2uF 100V" />
      <C name="C38" pcbX={-23.5} pcbY={-25} v="2.2uF 100V" />
      <C name="C39" pcbX={-21} pcbY={-28} v="100nF 100V" />
      <C name="C40" pcbX={-24} pcbY={-33} v="4.7uF 100V" />
      <C name="C41" pcbX={-24} pcbY={-37} v="4.7uF 100V" />
      <ELCAP name="C42" pcbX={4} pcbY={-44} />
      <R name="R18" pcbX={-22} pcbY={-17} v="1M" />
      <R name="R19" pcbX={-18.5} pcbY={-17} v="100k" />
      <R name="R20" pcbX={-13} pcbY={-26} v="100k" />
      <R name="R21" pcbX={-13} pcbY={-28.5} v="2.4k" />
      <PNP name="Q3" pcbX={-8} pcbY={-25} />
      <R name="R22" pcbX={-8} pcbY={-20.5} v="9.1k" />
      <R name="R23" pcbX={-4} pcbY={-25} v="10k" />
      <C name="C43" pcbX={-4} pcbY={-21} pcbRotation={90} v="1uF" />
      <BZX84C51 name="D3" pcbX={-8} pcbY={-28.5} />
      <R name="R24" pcbX={-4} pcbY={-28.5} v="1k" />
    {net("VIN", [".U8 > .VIN", ".C37 > .pin1", ".C38 > .pin1", ".C39 > .pin1", ".R18 > .pin1"], { thickness: PWR })}
    {net("VN", [".U8 > .GND", ".C37 > .pin2", ".C38 > .pin2", ".C39 > .pin2", ".C40 > .pin2", ".C41 > .pin2",
      ".C42 > .pin2", ".R19 > .pin2", ".R21 > .pin2"], { thickness: PWR })}
    {net("SW_N", [".U8 > .SW", ".L4 > .pin1", ".C36 > .pin2"], { thickness: PWR })}
    <trace from=".U8 > .CB" to=".C36 > .pin1" maxLength={TRACE_MAX} />
    {net("GND", [".L4 > .pin2", ".C40 > .pin1", ".C41 > .pin1", ".C42 > .pin1", ".R20 > .pin1", ".C43 > .pin2"], { thickness: PWR })}
    {net("EN_N", [".U8 > .EN", ".R18 > .pin2", ".R19 > .pin1"])}
    {net("FB_N", [".U8 > .FB", ".R20 > .pin2", ".R21 > .pin1", ".Q3 > .C", ".R24 > .pin2"])}
    {net("V3V3", [".R22 > .pin1"])}
    <trace from=".Q3 > .E" to=".R22 > .pin2" maxLength={TRACE_MAX} />
    {/* PWM_VN -> 10k/1uF -> PNP base; 100k pull-down at the MCU pin = minimum |V-| at reset */}
    {net("VN_CTL", [".Q3 > .B", ".R23 > .pin2", ".C43 > .pin1"])}
    {net("PWM_VN", [".R23 > .pin1"])}
    {net("VP", [".D3 > .K"])}
    <trace from=".D3 > .A" to=".R24 > .pin1" maxLength={TRACE_MAX} />

    {/* ============================ MCU ============================ */}
    {/* ESP32-S3-MINI-1, antenna over the rear edge, copper keepout under it */}
    <ESP32_S3_MINI_1_N8 name="U20" pcbX={-28} pcbY={36.4} />
    <keepout shape="rect" pcbX={-28} pcbY={47} width="18mm" height="6mm" layers={["top", "inner1", "inner2", "bottom"]} excludeRefs={[".U20"]} />
    {/* no top-layer routing through the module's underside (inside its pad ring) */}
    <keepout shape="rect" pcbX={-28} pcbY={36.4} width="12.8mm" height="12.8mm" layers={["top"]} excludeRefs={[".U20"]} />
      <C name="C50" pcbX={-39.0} pcbY={42.5} pcbRotation={90} v="10uF" />
      <C name="C51" pcbX={-39.0} pcbY={39} pcbRotation={90} v="100nF" />
      <R name="R50" pcbX={-17} pcbY={43} v="10k" />
      <C name="C52" pcbX={-17} pcbY={40.5} v="1uF" />
      <TS_1187A_B_A_B name="SW1" pcbX={-15} pcbY={33} />
      <R name="R51" pcbX={-39.0} pcbY={35} pcbRotation={90} v="10k" />
      <TS_1187A_B_A_B name="SW2" pcbX={-44} pcbY={21} />
      <R name="R52" pcbX={-33} pcbY={24} pcbRotation={90} v="4.7k" />
      <R name="R53" pcbX={-31} pcbY={24} pcbRotation={90} v="4.7k" />
      <R name="R54" pcbX={-29} pcbY={24} pcbRotation={90} v="10k" />
      {/* rail monitors (ADC1): VIN/11, V+/16, V- offset divider (3.3 V*120k + V-*10k)/130k */}
      <R name="R55" pcbX={-38} pcbY={18.5} v="100k" />
      <R name="R56" pcbX={-38} pcbY={16} v="10k" />
      <R name="R57" pcbX={-34} pcbY={18.5} v="150k" />
      <R name="R58" pcbX={-34} pcbY={16} v="10k" />
      <R name="R59" pcbX={-30} pcbY={18.5} v="120k" />
      <R name="R60" pcbX={-30} pcbY={16} v="10k" />
      <C name="C53" pcbX={-38} pcbY={13.5} v="100nF" />
      <C name="C54" pcbX={-34} pcbY={13.5} v="100nF" />
      <C name="C55" pcbX={-30} pcbY={13.5} v="100nF" />
      {/* PWM pull-ups / pull-downs: rails at minimum, ILIM 0 A, relay / fan off at reset */}
      <R name="R61" pcbX={-25} pcbY={21} pcbRotation={90} v="10k" />
      <R name="R62" pcbX={-23} pcbY={21} pcbRotation={90} v="100k" />
      <R name="R63" pcbX={-21} pcbY={21} pcbRotation={90} v="10k" />
      <R name="R64" pcbX={-19} pcbY={21} pcbRotation={90} v="100k" />
      <R name="R65" pcbX={-17} pcbY={21} pcbRotation={90} v="100k" />
    {net("V3V3", [".U20 > .3V3", ".C50 > .pin1", ".C51 > .pin1", ".R50 > .pin1", ".R51 > .pin1", ".R52 > .pin1",
      ".R53 > .pin1", ".R54 > .pin1", ".R60 > .pin1", ".R61 > .pin1", ".R63 > .pin1"], { thickness: MID })}
    {net("GND", [...ESP_GND, ".C50 > .pin2", ".C51 > .pin2", ".C52 > .pin2", ".SW1 > .pin2", ".SW2 > .pin2",
      ".R56 > .pin2", ".R58 > .pin2", ".C53 > .pin2", ".C54 > .pin2", ".C55 > .pin2", ".R62 > .pin2", ".R64 > .pin2", ".R65 > .pin2"])}
    {net("EN", [".U20 > .EN", ".R50 > .pin2", ".C52 > .pin1", ".SW1 > .pin1"])}
    {net("BOOT", [".U20 > .IO0", ".R51 > .pin2", ".SW2 > .pin1"])}
    {net("I2C_SCL", [".U20 > .IO48", ".R52 > .pin2"])}
    {net("I2C_SDA", [".U20 > .IO8", ".R53 > .pin2"])}
    {net("PD_ALERT", [".U20 > .IO3", ".R54 > .pin2"])}
    {net("USB_DN", [".U20 > .IO19"])}
    {net("USB_DP", [".U20 > .IO20"])}
    {net("VIN", [".R55 > .pin1"])}
    {net("VIN_MON", [".U20 > .IO1", ".R55 > .pin2", ".R56 > .pin1", ".C53 > .pin1"])}
    {net("VP", [".R57 > .pin1"])}
    {net("VP_MON", [".U20 > .IO2", ".R57 > .pin2", ".R58 > .pin1", ".C54 > .pin1"])}
    {net("VN", [".R59 > .pin1"])}
    {net("VN_MON", [".U20 > .IO4", ".R59 > .pin2", ".R60 > .pin2", ".C55 > .pin1"])}
    {net("NTC", [".U20 > .IO5"])}
    {net("RELAY", [".U20 > .IO6", ".R65 > .pin1"])}
    {net("OUT_EN", [".U20 > .IO7"])}
    {net("ADC_CS", [".U20 > .IO9"])}
    {net("DAC_CS", [".U20 > .IO10"])}
    {net("A_MOSI", [".U20 > .IO11"])}
    {net("A_SCK", [".U20 > .IO12"])}
    {net("A_MISO", [".U20 > .IO13"])}
    {net("ADC_DRDY", [".U20 > .IO14"])}
    {net("ADC_RST", [".U20 > .IO21"])}
    {net("PWM_VP", [".U20 > .IO15", ".R61 > .pin2"])}
    {net("PWM_VN", [".U20 > .IO16", ".R62 > .pin1"])}
    {net("PWM_ILIM", [".U20 > .IO17", ".R63 > .pin2"])}
    {net("FAN_PWM", [".U20 > .IO18", ".R64 > .pin1"])}
    {net("E_MOSI", [".U20 > .IO35"])}
    {net("E_SCK", [".U20 > .IO36"])}
    {net("E_MISO", [".U20 > .IO37"])}
    {net("ETH_CS", [".U20 > .IO38"])}
    {net("ETH_INT", [".U20 > .IO39"])}
    {net("ETH_RST", [".U20 > .IO40"])}
    {net("DISP_DIN", [".U20 > .IO41"])}
    {net("DISP_CLK", [".U20 > .IO42"])}
    {net("BTN_OUT", [".U20 > .IO33"])}
    {net("BTN_MODE", [".U20 > .IO34"])}

    {/* ============================ Ethernet ============================ */}
    <HR911105A name="J2" pcbX={0} pcbY={37} pcbRotation={180} />
      <W5500 name="U21" pcbX={2} pcbY={12} pcbRotation={180} />
      <NX3225SA_25MHz_STD_CSR_6 name="Y1" pcbX={-4} pcbY={4} />
      <C name="C60" pcbX={-8.5} pcbY={5.5} v="15pF" />
      <C name="C61" pcbX={-8.5} pcbY={2.5} v="15pF" />
      <FERRITE name="FB2" pcbX={10} pcbY={21} />
      <C name="C62" pcbX={13.5} pcbY={21} pcbRotation={90} v="10uF" />
      <C name="C63" pcbX={9} pcbY={16} pcbRotation={90} v="100nF" />
      <C name="C64" pcbX={9} pcbY={13} pcbRotation={90} v="100nF" />
      <C name="C65" pcbX={9} pcbY={10} pcbRotation={90} v="100nF" />
      <C name="C66" pcbX={-5} pcbY={16} pcbRotation={90} v="100nF" />
      <C name="C67" pcbX={-5} pcbY={13} pcbRotation={90} v="100nF" />
      <C name="C68" pcbX={-5} pcbY={10} pcbRotation={90} v="100nF" />
      <C name="C69" pcbX={9} pcbY={3.5} pcbRotation={90} v="10uF" />
      <C name="C70" pcbX={11} pcbY={3.5} pcbRotation={90} v="100nF" />
      <R name="R70" pcbX={-5} pcbY={19.5} v="12.4k" />
      <C name="C71" pcbX={-8} pcbY={13} pcbRotation={90} v="4.7uF" />
      <C name="C72" pcbX={-8} pcbY={10} pcbRotation={90} v="10nF" />
      <R name="R71" pcbX={1} pcbY={22} pcbRotation={90} v="49.9" />
      <R name="R72" pcbX={3} pcbY={22} pcbRotation={90} v="49.9" />
      <R name="R73" pcbX={5} pcbY={22} pcbRotation={90} v="10" />
      <C name="C73" pcbX={7} pcbY={22} pcbRotation={90} v="22nF" />
      <C name="C74" pcbX={-1} pcbY={22} pcbRotation={90} v="6.8nF" />
      <C name="C75" pcbX={-3} pcbY={22} pcbRotation={90} v="6.8nF" />
      <R name="R74" pcbX={-5} pcbY={26} v="49.9" />
      <R name="R75" pcbX={-8.5} pcbY={22} pcbRotation={90} v="49.9" />
      <C name="C76" pcbX={-10.5} pcbY={22} pcbRotation={90} v="10nF" />
      <R name="R76" pcbX={11} pcbY={39} v="330" />
      <R name="R77" pcbX={-11} pcbY={39} v="330" />
      <R name="R78" pcbX={12} pcbY={8} pcbRotation={90} v="10k" />
    {net("V3V3", [".U21 > .VDD", ".FB2 > .pin1", ".C69 > .pin1", ".C70 > .pin1", ".J2 > .LEDG_A", ".J2 > .LEDY_A", ".R78 > .pin1"])}
    {net("V3V3_ETH", [".FB2 > .pin2", ".C62 > .pin1", ".C63 > .pin1", ".C64 > .pin1", ".C65 > .pin1", ".C66 > .pin1",
      ".C67 > .pin1", ".C68 > .pin1", ".U21 > .AVDD1", ".U21 > .AVDD2", ".U21 > .AVDD3", ".U21 > .AVDD4", ".U21 > .AVDD5",
      ".U21 > .AVDD6", ".R71 > .pin1", ".R72 > .pin1", ".R73 > .pin1"])}
    {net("GND", [".U21 > .GND", ".U21 > .AGND1", ".U21 > .AGND2", ".U21 > .AGND3", ".U21 > .AGND4", ".U21 > .AGND5",
      ".U21 > .AGND6", ".U21 > .RSVD1", ".U21 > .RSVD2", ".U21 > .RSVD3", ".U21 > .RSVD4", ".U21 > .RSVD5", ".U21 > .RSVD6",
      ".Y1 > .GND1", ".Y1 > .GND2", ".C60 > .pin2", ".C61 > .pin2", ".C62 > .pin2", ".C63 > .pin2", ".C64 > .pin2",
      ".C65 > .pin2", ".C66 > .pin2", ".C67 > .pin2", ".C68 > .pin2", ".C69 > .pin2", ".C70 > .pin2", ".R70 > .pin2",
      ".C71 > .pin2", ".C72 > .pin2", ".C73 > .pin2", ".C76 > .pin2", ".J2 > .CHS_GND", ".J2 > .SH1", ".J2 > .SH2"])}
    {net("XI", [".U21 > .XI", ".Y1 > .pin1", ".C60 > .pin1"])}
    {net("XO", [".U21 > .XO", ".Y1 > .pin3", ".C61 > .pin1"])}
    <trace from=".U21 > .EXRES1" to=".R70 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".U21 > .TOCAP" to=".C71 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".U21 > .1V2O" to=".C72 > .pin1" maxLength={TRACE_MAX} />
    {net("ETH_TXP", [".U21 > .TXP", ".J2 > .TD_POS", ".R71 > .pin2"])}
    {net("ETH_TXN", [".U21 > .TXN", ".J2 > .TD_NEG", ".R72 > .pin2"])}
    {net("ETH_TCT", [".J2 > .TCT", ".R73 > .pin2", ".C73 > .pin1"])}
    {net("ETH_RXP", [".U21 > .RXP", ".C74 > .pin1"])}
    {net("ETH_RXN", [".U21 > .RXN", ".C75 > .pin1"])}
    {net("ETH_RDP", [".C74 > .pin2", ".J2 > .RD_POS", ".R74 > .pin1"])}
    {net("ETH_RDN", [".C75 > .pin2", ".J2 > .RD_NEG", ".R75 > .pin1"])}
    {net("ETH_RCT", [".J2 > .RCT", ".R74 > .pin2", ".R75 > .pin2", ".C76 > .pin1"])}
    {/* LEDs: green = link, yellow = activity (W5500 outputs active low) */}
    <trace from=".U21 > .LINKLED" to=".R76 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".R76 > .pin2" to=".J2 > .LEDG_K" maxLength={TRACE_MAX} />
    <trace from=".U21 > .ACTLED" to=".R77 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".R77 > .pin2" to=".J2 > .LEDY_K" maxLength={TRACE_MAX} />
    {net("E_MOSI", [".U21 > .MOSI"])}
    {net("E_SCK", [".U21 > .SCLK"])}
    {net("E_MISO", [".U21 > .MISO"])}
    {net("ETH_CS", [".U21 > .SCSn"])}
    {net("ETH_INT", [".U21 > .INTn", ".R78 > .pin2"])}
    {net("ETH_RST", [".U21 > .RSTn"])}

    {/* ============================ analog control & measurement ============================ */}
      <DAC8563SDGSR name="U30" pcbX={24} pcbY={23} />
      <C name="C80" pcbX={19.5} pcbY={23} pcbRotation={90} v="100nF" />
      <C name="C81" pcbX={17.5} pcbY={23} pcbRotation={90} v="1uF" />
      <C name="C82" pcbX={28.5} pcbY={23} pcbRotation={90} v="100nF" />
      {/* U31: current-limit integrators (A: +limit, B: -limit) */}
      <OPA2192IDR name="U31" pcbX={34} pcbY={8} />
      <C name="C83" pcbX={34} pcbY={12.5} v="100nF" />
      <C name="C84" pcbX={34} pcbY={3.5} v="100nF" />
      <R name="R80" pcbX={26} pcbY={12} v="10k" />
      <R name="R81" pcbX={26} pcbY={9.5} v="20k" />
      <C name="C85" pcbX={26} pcbY={7} v="47nF" />
      <R name="R82" pcbX={26} pcbY={4.5} v="12k" />
      <D4148 name="D10" pcbX={28} pcbY={1} />
      <D4148 name="D11" pcbX={34} pcbY={1} />
      <R name="R83" pcbX={39.5} pcbY={1} v="10k" />
      <R name="R84" pcbX={42} pcbY={12} v="10k" />
      <R name="R85" pcbX={42} pcbY={9.5} v="20k" />
      <C name="C86" pcbX={42} pcbY={7} v="47nF" />
      <R name="R86" pcbX={42} pcbY={4.5} v="12k" />
      <D4148 name="D12" pcbX={46} pcbY={9} pcbRotation={90} />
      <D4148 name="D13" pcbX={46} pcbY={3} pcbRotation={90} />
      <R name="R87" pcbX={43} pcbY={-1} v="10k" />
      {/* U32: A = -2.5 V reference (REFN), B = -ISET */}
      <OPA2192IDR name="U32" pcbX={34} pcbY={23} />
      <C name="C87" pcbX={34} pcbY={27.5} v="100nF" />
      <C name="C88" pcbX={34} pcbY={18.5} v="100nF" />
      <RP name="R88" pcbX={40} pcbY={26} v="10k" />
      <RP name="R89" pcbX={40} pcbY={23.5} v="10k" />
      <R name="R90" pcbX={40} pcbY={21} v="10k" />
      <R name="R91" pcbX={40} pcbY={18.5} v="10k" />
      {/* current sense: G = 1 + 50k / 5.6k = 9.93, IN+ on the GND side -> VI = -1 V/A */}
      <INA828IDR name="U33" pcbX={50} pcbY={-33} />
      <RP name="R92" pcbX={50} pcbY={-28} v="5.6k" />
      <C name="C89" pcbX={45.5} pcbY={-31} pcbRotation={90} v="100nF" />
      <C name="C90" pcbX={45.5} pcbY={-35} pcbRotation={90} v="100nF" />
      {/* ADC */}
      <ADS131M02IPWR name="U34" pcbX={32} pcbY={-9} />
      <C name="C91" pcbX={26.5} pcbY={-6} pcbRotation={90} v="100nF" />
      <C name="C92" pcbX={24.5} pcbY={-6} pcbRotation={90} v="1uF" />
      <C name="C93" pcbX={37.5} pcbY={-5} pcbRotation={90} v="100nF" />
      <C name="C94" pcbX={39.5} pcbY={-5} pcbRotation={90} v="1uF" />
      <C name="C95" pcbX={37.5} pcbY={-12} pcbRotation={90} v="220nF" />
      <OT2JI_111_8_192M name="X1" pcbX={42} pcbY={-9} />
      <C name="C96" pcbX={42} pcbY={-5.5} v="100nF" />
      <RP name="R93" pcbX={24} pcbY={-14} v="300k" />
      <RP name="R94" pcbX={24} pcbY={-16.5} v="10k" />
      <RP name="R95" pcbX={28} pcbY={-14} v="300k" />
      <RP name="R96" pcbX={28} pcbY={-16.5} v="10k" />
      <C name="C97" pcbX={24} pcbY={-19} v="1nF" />
      <C name="C98" pcbX={28} pcbY={-19} v="1nF" />
      <R name="R97" pcbX={33} pcbY={-16} v="1k" />
      <C name="C99" pcbX={33} pcbY={-18.5} v="10nF" />
    {net("V3V3A", [".U30 > .AVDD", ".U30 > .N_CLR", ".C80 > .pin1", ".C81 > .pin1", ".U34 > .AVDD", ".C91 > .pin1", ".C92 > .pin1"])}
    {net("V3V3", [".U34 > .DVDD", ".C93 > .pin1", ".C94 > .pin1", ".X1 > .VDD", ".X1 > .Tri_State", ".C96 > .pin1"])}
    {net("V5A", [".U31 > .VPOS", ".U32 > .VPOS", ".U33 > .VS_POS", ".C83 > .pin1", ".C87 > .pin1", ".C89 > .pin1"])}
    {net("VNA", [".U31 > .VNEG", ".U32 > .VNEG", ".U33 > .VS_NEG", ".C84 > .pin2", ".C88 > .pin2", ".C90 > .pin2"])}
    {net("GND", [".U30 > .GND", ".U30 > .N_LDAC", ".C80 > .pin2", ".C81 > .pin2", ".C82 > .pin2", ".C83 > .pin2",
      ".C84 > .pin1", ".C87 > .pin2", ".C88 > .pin1", ".C89 > .pin2", ".C90 > .pin1", ".U31 > .INA_P", ".U31 > .INB_P",
      ".U32 > .INA_P", ".U32 > .INB_P", ".U33 > .REF", ".U34 > .AGND", ".U34 > .DGND", ".U34 > .AIN1N", ".C91 > .pin2",
      ".C92 > .pin2", ".C93 > .pin2", ".C94 > .pin2", ".C95 > .pin2", ".X1 > .GND", ".C96 > .pin2", ".R94 > .pin2",
      ".R96 > .pin2", ".C97 > .pin2", ".C98 > .pin2", ".C99 > .pin2"])}
    {/* DAC: A = VSET (output voltage), B = ISET (current limit), internal 2.5 V reference */}
    {net("DAC_CS", [".U30 > .N_SYNC"])}
    {net("A_SCK", [".U30 > .SCLK", ".U34 > .SCLK"])}
    {net("A_MOSI", [".U30 > .DIN", ".U34 > .DIN"])}
    {net("A_MISO", [".U34 > .DOUT"])}
    {net("ADC_CS", [".U34 > .N_CS"])}
    {net("ADC_DRDY", [".U34 > .N_DRDY"])}
    {net("ADC_RST", [".U34 > .N_SYNC"])}
    {net("REF2V5", [".U30 > .VREFIN", ".C82 > .pin1", ".R88 > .pin1"])}
    {net("VSET", [".U30 > .VOUTA"])}
    {net("ISET", [".U30 > .VOUTB", ".R81 > .pin1", ".R90 > .pin1"])}
    {/* REFN = -REF2V5 (0.1 % pair), ISETN = -ISET */}
    {net("REFN_IN", [".U32 > .INA_N", ".R88 > .pin2", ".R89 > .pin1"])}
    {net("REFN", [".U32 > .OUTA", ".R89 > .pin2"])}
    {net("ISETN_IN", [".U32 > .INB_N", ".R90 > .pin2", ".R91 > .pin1"])}
    {net("ISETN", [".U32 > .OUTB", ".R91 > .pin2", ".R85 > .pin1"])}
    {/* + limit: integrates VI + ISET/2 (Ri 10k / 20k), output rises when I > ISET/2 */}
    {net("VI", [".U33 > .OUT", ".R80 > .pin1", ".R84 > .pin1", ".R97 > .pin1"])}
    {net("LIMP_IN", [".U31 > .INA_N", ".R80 > .pin2", ".R81 > .pin2", ".C85 > .pin1", ".D10 > .anode"])}
    {net("LIMP_Z", [".C85 > .pin2", ".R82 > .pin1"])}
    {net("LIMP_OUT", [".U31 > .OUTA", ".R82 > .pin2", ".D10 > .cathode", ".D11 > .anode"])}
    {net("LIMP_OR", [".D11 > .cathode", ".R83 > .pin1"])}
    {/* - limit: integrates VI - ISET/2, output falls when I < -ISET/2 */}
    {net("LIMN_IN", [".U31 > .INB_N", ".R84 > .pin2", ".R85 > .pin2", ".C86 > .pin1", ".D12 > .cathode"])}
    {net("LIMN_Z", [".C86 > .pin2", ".R86 > .pin1"])}
    {net("LIMN_OUT", [".U31 > .OUTB", ".R86 > .pin2", ".D12 > .anode", ".D13 > .cathode"])}
    {net("LIMN_OR", [".D13 > .anode", ".R87 > .pin1"])}
    {net("SUMN", [".R83 > .pin2", ".R87 > .pin2"])}
    <trace from=".U33 > .RG1" to=".R92 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".U33 > .RG2" to=".R92 > .pin2" maxLength={TRACE_MAX} />
    {net("LO", [".U33 > .IN_NEG"])}
    {net("GND", [".U33 > .IN_POS"])}
    <trace from=".U34 > .CAP" to=".C95 > .pin1" maxLength={TRACE_MAX} />
    {net("OSC_8M", [".U34 > .CLKIN", ".X1 > .OUT"])}
    {/* V channel: (S+ - S-) / 31 differential, I channel: VI through 1k/10nF */}
    {net("SPLUS", [".R93 > .pin1"])}
    {net("SMINUS", [".R95 > .pin1"])}
    {net("AIN0P", [".U34 > .AIN0P", ".R93 > .pin2", ".R94 > .pin1", ".C97 > .pin1"])}
    {net("AIN0N", [".U34 > .AIN0N", ".R95 > .pin2", ".R96 > .pin1", ".C98 > .pin1"])}
    {net("AIN1P", [".U34 > .AIN1P", ".R97 > .pin2", ".C99 > .pin1"])}

    {/* ============================ output stage ============================ */}
    <OPA548T name="U40" pcbX={62} pcbY={42} />
      <C name="C100" pcbX={59.5} pcbY={35.5} pcbRotation={90} v="4.7uF 100V" />
      <C name="C101" pcbX={56} pcbY={35.5} pcbRotation={90} v="100nF 100V" />
      <C name="C102" pcbX={72} pcbY={35.5} pcbRotation={90} v="4.7uF 100V" />
      <C name="C103" pcbX={68.5} pcbY={35.5} pcbRotation={90} v="100nF 100V" />
      {/* summing node: VSET via 2x 10k (5k), REFN via 10k, S+ via 120k; HF feedback 4.7n C0G from the amp */}
      <RP name="R100" pcbX={49} pcbY={31.5} v="10k" />
      <RP name="R101" pcbX={52} pcbY={31.5} v="10k" />
      <RP name="R102" pcbX={55} pcbY={31.5} v="10k" />
      <RP name="R103" pcbX={58} pcbY={31.5} v="120k" />
      <C name="C104" pcbX={61.5} pcbY={31.5} v="4.7nF C0G" />
      {/* Kelvin: + input = S- * 3.33k / 123.3k (matches the inverting network) */}
      <RP name="R104" pcbX={49} pcbY={29} v="120k" />
      <RP name="R105" pcbX={52} pcbY={29} v="10k" />
      <RP name="R106" pcbX={55} pcbY={29} v="10k" />
      <RP name="R107" pcbX={58} pcbY={29} v="10k" />
      {/* E/S: opto LED on at reset (OPA548 disabled); MCU pulls OUT_EN low to enable */}
      <PC817C name="U41" pcbX={68} pcbY={27} />
      <R name="R108" pcbX={75} pcbY={34} pcbRotation={90} v="680" />
      <C name="C105" pcbX={68} pcbY={31.5} v="1nF" />
      {/* ILIM: PNP current source (27k from 3.3 V, PWM base) into an NPN mirror on V-;
          ILIM = 15000 * I = 0 .. 1.47 A, 0 A at reset (base pulled up) */}
      <PNP name="Q40" pcbX={48.5} pcbY={25} />
      <R name="R109" pcbX={48.5} pcbY={21.5} v="27k" />
      <R name="R110" pcbX={52} pcbY={25} v="10k" />
      <C name="C106" pcbX={52} pcbY={21.5} v="1uF" />
      <NPN name="Q41" pcbX={55.5} pcbY={25} />
      <NPN name="Q42" pcbX={59.5} pcbY={25} />
      <R name="R111" pcbX={55.5} pcbY={21.5} v="1k" />
      <R name="R112" pcbX={59.5} pcbY={21.5} v="1k" />
      <SS5100 name="D40" pcbX={70} pcbY={19} />
      <SS5100 name="D41" pcbX={70} pcbY={14} />
      <R name="R113" pcbX={73} pcbY={41} pcbRotation={90} v="10k" />
      <C name="C107" pcbX={75} pcbY={41} pcbRotation={90} v="100nF" />
    {/* NTC next to the OPA548 tab (R113 = 10k pull-up) */}
    <resistor name="RT1" resistance="10k" footprint="0603" manufacturerPartNumber="NCP18XH103F03RB"
      supplierPartNumbers={{ jlcpcb: ["C13564"] }} pcbX={70} pcbY={41} />
    {net("VP", [".U40 > .V_POS", ".C100 > .pin1", ".C101 > .pin1", ".D40 > .cathode"], { thickness: PWR })}
    {net("VN", [".U40 > .V_NEG", ".C102 > .pin2", ".C103 > .pin2", ".D41 > .anode", ".U41 > .EM", ".C105 > .pin2",
      ".R111 > .pin2", ".R112 > .pin2"], { thickness: PWR })}
    {net("GND", [".C100 > .pin2", ".C101 > .pin2", ".C102 > .pin1", ".C103 > .pin1", ".R105 > .pin2", ".R106 > .pin2",
      ".R107 > .pin2", ".U41 > .CAT", ".C106 > .pin2", ".RT1 > .pin2", ".C107 > .pin2"])}
    {net("AMP_OUT", [".U40 > .VO", ".C104 > .pin1", ".D40 > .anode", ".D41 > .cathode"], { thickness: PWR })}
    {net("SUMN", [".U40 > .VIN_NEG", ".R100 > .pin2", ".R101 > .pin2", ".R102 > .pin2", ".R103 > .pin2", ".C104 > .pin2"])}
    {net("VSET", [".R100 > .pin1", ".R101 > .pin1"])}
    {net("REFN", [".R102 > .pin1"])}
    {net("SPLUS", [".R103 > .pin1"])}
    {net("SMINUS", [".R104 > .pin1"])}
    {net("SUMP", [".U40 > .VIN_POS", ".R104 > .pin2", ".R105 > .pin1", ".R106 > .pin1", ".R107 > .pin1"])}
    {net("ES", [".U40 > .ES", ".U41 > .COL", ".C105 > .pin1"])}
    {net("V3V3", [".R108 > .pin1", ".R109 > .pin1", ".R113 > .pin1"])}
    {net("OUT_EN", [".U41 > .AN", ".R108 > .pin2"])}
    <trace from=".Q40 > .E" to=".R109 > .pin2" maxLength={TRACE_MAX} />
    {net("ILIM_CTL", [".Q40 > .B", ".R110 > .pin2", ".C106 > .pin1"])}
    {net("PWM_ILIM", [".R110 > .pin1"])}
    {net("MIR", [".Q40 > .C", ".Q41 > .C", ".Q41 > .B", ".Q42 > .B"])}
    <trace from=".Q41 > .E" to=".R111 > .pin1" maxLength={TRACE_MAX} />
    <trace from=".Q42 > .E" to=".R112 > .pin1" maxLength={TRACE_MAX} />
    {net("ILIM", [".U40 > .ILIM", ".Q42 > .C"])}
    {net("NTC", [".RT1 > .pin1", ".R113 > .pin2", ".C107 > .pin1"])}

    {/* relay (both poles in parallel), sense resistors, shunt, TVS, output terminal */}
      <HFD4_5 name="K1" pcbX={62} pcbY={6} />
      <NMOS name="Q43" pcbX={54} pcbY={8} />
      <D4148 name="D42" pcbX={50.5} pcbY={6} pcbRotation={90} />
      <R name="R114" pcbX={70} pcbY={8} v="4.7k" />
      <R name="R115" pcbX={70} pcbY={1} v="100" />
      <R name="R116" pcbX={70} pcbY={-30} v="100" />
      <SMBJ36CA name="D43" pcbX={62} pcbY={-22} />
      <C name="C108" pcbX={62} pcbY={-28} v="1uF 100V" />
      <RSENSE name="R117" pcbX={62} pcbY={-35} v="100m" />
    <DG301_5_0_04P_14_1000A_H_ name="J3" pcbX={62} pcbY={-45} />
    {net("V5", [".K1 > .COIL_P", ".D42 > .cathode"])}
    {net("RLY_D", [".K1 > .COIL_N", ".D42 > .anode", ".Q43 > .D"])}
    {net("RELAY", [".Q43 > .G"])}
    {net("GND", [".Q43 > .S", ".R117 > .pin2"], { thickness: PWR })}
    {net("AMP_OUT", [".K1 > .COM1", ".K1 > .COM2", ".R114 > .pin1"], { thickness: PWR })}
    {net("HI", [".K1 > .NO1", ".K1 > .NO2", ".J3 > .pin1", ".R115 > .pin1", ".D43 > .pin1", ".C108 > .pin1"], { thickness: PWR })}
    {net("SPLUS", [".J3 > .pin2", ".R114 > .pin2", ".R115 > .pin2"])}
    {net("SMINUS", [".J3 > .pin3", ".R116 > .pin2"])}
    {net("LO", [".J3 > .pin4", ".R116 > .pin1", ".D43 > .pin2", ".C108 > .pin2", ".R117 > .pin1"], { thickness: PWR })}

    {/* ============================ fan, front panel ============================ */}
    <B2B_XH_A_GU name="J4" pcbX={44} pcbY={46} />
    <NMOS name="Q44" pcbX={44} pcbY={40} />
    <D4148 name="D44" pcbX={49} pcbY={40} pcbRotation={90} />
    {net("V5", [".J4 > .pin1", ".D44 > .cathode"])}
    {net("FAN_D", [".J4 > .pin2", ".D44 > .anode", ".Q44 > .D"])}
    {net("FAN_PWM", [".Q44 > .G"])}
    {net("GND", [".Q44 > .S"])}

    {/* 2x5 ribbon to the display board: 1/2 5V, 3/4 GND, 5 DIN, 6 CLK, 7 BTN_OUT, 8 BTN_MODE, 9 3V3, 10 GND */}
    <A2541WV_2x5P name="J5" pcbX={-68} pcbY={-6} />
    <R name="R120" v="10k" pcbX={-55} pcbY={-3} />
    <R name="R121" v="10k" pcbX={-55} pcbY={-5.5} />
    <C name="C120" v="100nF" pcbX={-52} pcbY={-3} />
    <C name="C121" v="100nF" pcbX={-52} pcbY={-5.5} />
    {net("V5", [".J5 > .pin1", ".J5 > .pin2"], { thickness: MID })}
    {net("GND", [".J5 > .pin3", ".J5 > .pin4", ".J5 > .pin10", ".C120 > .pin2", ".C121 > .pin2"])}
    {net("DISP_DIN", [".J5 > .pin5"])}
    {net("DISP_CLK", [".J5 > .pin6"])}
    {net("BTN_OUT", [".J5 > .pin7", ".R120 > .pin2", ".C120 > .pin1"])}
    {net("BTN_MODE", [".J5 > .pin8", ".R121 > .pin2", ".C121 > .pin1"])}
    {net("V3V3", [".J5 > .pin9", ".R120 > .pin1", ".R121 > .pin1"])}

    {/* ============================ mechanical ============================ */}
    <hole name="H1" diameter="3.2mm" pcbX={-76} pcbY={-46} />
    <hole name="H2" diameter="3.2mm" pcbX={76} pcbY={-46} />
    <hole name="H3" diameter="3.2mm" pcbX={-76} pcbY={30} />
    <hole name="H4" diameter="3.2mm" pcbX={76} pcbY={0} />
    <silkscreentext text="VibePCB SMU v1  +-30V +-1A" pcbX={20} pcbY={-46} fontSize="1.5mm" />
    <silkscreentext text="HI   S+   S-   LO" pcbX={62} pcbY={-40} fontSize="1.2mm" />

    <copperpour connectsTo="net.GND" layer="top" clearance="0.3mm" boardEdgeMargin="0.5mm" />
    <copperpour connectsTo="net.GND" layer="inner1" clearance="0.3mm" boardEdgeMargin="0.5mm" />
    <copperpour connectsTo="net.GND" layer="inner2" clearance="0.3mm" boardEdgeMargin="0.5mm" />
    <copperpour connectsTo="net.GND" layer="bottom" clearance="0.3mm" boardEdgeMargin="0.5mm" />
  </board>
)

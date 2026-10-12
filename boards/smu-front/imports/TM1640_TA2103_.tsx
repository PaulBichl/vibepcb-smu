import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GRID12"],
  pin2: ["GRID13"],
  pin3: ["GRID14"],
  pin4: ["GRID15"],
  pin5: ["GRID16"],
  pin6: ["VSS"],
  pin7: ["DIN"],
  pin8: ["SCLK"],
  pin9: ["SEG1"],
  pin10: ["SEG2"],
  pin11: ["SEG3"],
  pin12: ["SEG4"],
  pin13: ["SEG5"],
  pin14: ["SEG6"],
  pin15: ["SEG7"],
  pin16: ["SEG8"],
  pin17: ["VDD"],
  pin18: ["GRID1"],
  pin19: ["GRID2"],
  pin20: ["GRID3"],
  pin21: ["GRID4"],
  pin22: ["GRID5"],
  pin23: ["GRID6"],
  pin24: ["GRID7"],
  pin25: ["GRID8"],
  pin26: ["GRID9"],
  pin27: ["GRID10"],
  pin28: ["GRID11"]
} as const

const pinAttributes = {
  pin6: {requiresGround: true},
  pin17: {requiresPower: true}
} as const

export const TM1640_TA2103_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5337152"
  ]
}}
      manufacturerPartNumber="TM1640(TA2103)"
      footprint="dfn28_pillpads_w11.54mm_pw0.63mm_pl1.62mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5337152.obj?uuid=91bf8115b451489cb58bb2ba532d9394",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5337152.step?uuid=91bf8115b451489cb58bb2ba532d9394",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999842880061, y: 0.000012699999956566899, z: 0 },
      }}
      {...props}
    />
  )
}
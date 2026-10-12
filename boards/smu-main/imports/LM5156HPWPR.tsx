import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["BIAS"],
  pin2: ["NC"],
  pin3: ["VCC"],
  pin4: ["GATE"],
  pin5: ["PGND"],
  pin6: ["AGND"],
  pin7: ["CS"],
  pin8: ["COMP"],
  pin9: ["DITHOFF"],
  pin10: ["FB"],
  pin11: ["SS"],
  pin12: ["RT"],
  pin13: ["PGOOD"],
  pin14: ["EN","UVLO","SYNC"],
  pin15: ["EP"]
} as const

const pinAttributes = {
  pin2: {doNotConnect: true},
  pin3: {requiresPower: true},
  pin5: {requiresGround: true},
  pin6: {requiresGround: true}
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin15": [...pinLabels["pin15"], "thermalpad"],
} as const

export const LM5156HPWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2867852"
  ]
}}
      manufacturerPartNumber="LM5156HPWPR"
      footprint="dfn14_thermalpad2.06mmx1.83mm_pillpads_p0.65mm_w7.46mm_pw0.34mm_pl1.73mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867852.obj?uuid=e28c83e0d6364fc9bab44164bfc1fe25",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867852.step?uuid=e28c83e0d6364fc9bab44164bfc1fe25",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00011430000006384944, y: 0, z: -0.099083 },
      }}
      {...props}
    />
  )
}
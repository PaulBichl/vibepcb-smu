import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["CPOUT"],
  pin4: ["VOUT"],
  pin5: ["VFB"],
  pin6: ["EN"],
  pin7: ["C1_NEG"],
  pin8: ["C1_POS"],
  pin9: ["PAD"]
} as const

const pinAttributes = {
  pin1: {requiresPower: true},
  pin2: {requiresGround: true}
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin9": [...pinLabels["pin9"], "thermalpad"],
} as const

export const LM27761DSGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C129351"
  ]
}}
      manufacturerPartNumber="LM27761DSGR"
      footprint="dfn8_thermalpad0.9mmx1.6mm_p0.5mm_w2.37mm_pw0.28mm_pl0.51mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C129351.obj?uuid=bdbb82cfec2f421cabcde62c239dd780",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C129351.step?uuid=bdbb82cfec2f421cabcde62c239dd780",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
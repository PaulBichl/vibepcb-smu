import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["RG2"],
  pin2: ["IN_NEG"],
  pin3: ["IN_POS"],
  pin4: ["VS_NEG"],
  pin5: ["REF"],
  pin6: ["OUT"],
  pin7: ["VS_POS"],
  pin8: ["RG1"]
} as const

export const INA828IDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C544342"
  ]
}}
      manufacturerPartNumber="INA828IDR"
      footprint="soic8_pillpads_w7mm_pw0.59mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C544342.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C544342.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
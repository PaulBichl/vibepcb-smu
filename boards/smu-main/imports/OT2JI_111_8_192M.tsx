import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["Tri_State"],
  pin2: ["GND"],
  pin3: ["OUT"],
  pin4: ["VDD"]
} as const

const pinAttributes = {
  pin2: {requiresGround: true},
  pin4: {requiresPower: true}
} as const

export const OT2JI_111_8_192M = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7425393"
  ]
}}
      manufacturerPartNumber="OT2JI-111-8.192M"
      footprint="crystal"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7425393.obj?uuid=971dd1f8acf54df881da34388a4ee557",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7425393.step?uuid=971dd1f8acf54df881da34388a4ee557",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.01 },
      }}
      {...props}
    />
  )
}
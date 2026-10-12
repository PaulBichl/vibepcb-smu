import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A"],
  pin2: ["NC"],
  pin3: ["K"]
} as const

export const BZX84C51 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C213380"
  ]
}}
      manufacturerPartNumber="BZX84C51"
      footprint="sot23w_p1.23mm_pw0.6mm_pl1.07mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C213380.obj?uuid=cefd4596db214da394d9632b2b88f8f2",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C213380.step?uuid=cefd4596db214da394d9632b2b88f8f2",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
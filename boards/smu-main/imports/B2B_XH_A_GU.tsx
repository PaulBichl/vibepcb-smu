import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const B2B_XH_A_GU = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C265283"
  ]
}}
      manufacturerPartNumber="B2B-XH-A-GU"
      footprint="pinrow2_od1.8mm_id1.2mm_pin1location(rightside,top)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C265283.obj?uuid=f68e3647589342c49308db6273906115",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C265283.step?uuid=f68e3647589342c49308db6273906115",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.5249926000000187, z: 0.09999300000000044 },
      }}
      {...props}
    />
  )
}
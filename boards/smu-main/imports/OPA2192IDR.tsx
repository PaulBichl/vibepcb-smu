import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUTA"],
  pin2: ["INA_N"],
  pin3: ["INA_P"],
  pin4: ["VNEG"],
  pin5: ["INB_P"],
  pin6: ["INB_N"],
  pin7: ["OUTB"],
  pin8: ["VPOS"]
} as const

export const OPA2192IDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C110074"
  ]
}}
      manufacturerPartNumber="OPA2192IDR"
      footprint="soic8_pillpads_w7mm_pw0.59mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C110074.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C110074.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
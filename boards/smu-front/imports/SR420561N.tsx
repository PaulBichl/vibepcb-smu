import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["E"],
  pin2: ["D"],
  pin3: ["DP"],
  pin4: ["C"],
  pin5: ["G"],
  pin6: ["DIG4"],
  pin7: ["B"],
  pin8: ["DIG3"],
  pin9: ["DIG2"],
  pin10: ["F"],
  pin11: ["A"],
  pin12: ["DIG1"]
} as const

export const SR420561N = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C109200"
  ]
}}
      manufacturerPartNumber="SR420561N"
      footprint="dip12_nosquareplating_w15.24mm_od1.52mm_id0.78mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C109200.obj?uuid=722a063e8d4e4ffa8e5b564707275aaa",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C109200.step?uuid=722a063e8d4e4ffa8e5b564707275aaa",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000013410317, y: -0.00012699999999199463, z: -0.10000699999999973 },
      }}
      {...props}
    />
  )
}
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["AN"],
  pin2: ["CAT"],
  pin3: ["EM"],
  pin4: ["COL"]
} as const

export const PC817C = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C22447129"
  ]
}}
      manufacturerPartNumber="PC817C"
      footprint="dfn4_p2.54mm_w12.2001mm_pw1.8mm_pl2mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C22447129.obj?uuid=965674740e3b443a808d1fc638dfe5ca",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C22447129.step?uuid=965674740e3b443a808d1fc638dfe5ca",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: -0.0001015999999935957, z: -0.035 },
      }}
      {...props}
    />
  )
}
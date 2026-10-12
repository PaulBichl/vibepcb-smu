import type { LedProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["cathode","neg"],
  pin2: ["anode","pos"]
} as const

export const KT_0603G = (props: LedProps) => {
  const { name = "LED1", ...restProps } = props

  return (
    <led
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C12624"
  ]
}}
      manufacturerPartNumber="KT-0603G"
      footprint="smdpads2_p1.498mm_pw0.8mm_ph0.8mm_cyw2.798mm_cyh1.32mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C12624.obj?uuid=3c2caa1a3e7d4a5a87f46b87d898ef41",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C12624.step?uuid=3c2caa1a3e7d4a5a87f46b87d898ef41",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0.000012699999956566899, z: -0.01 },
      }}
      {...restProps}
    />
  )
}
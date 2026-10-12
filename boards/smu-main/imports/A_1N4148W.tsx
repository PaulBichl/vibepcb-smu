import type { DiodeProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["cathode","neg"],
  pin2: ["anode","pos"]
} as const

const pinAttributes = {
  pin2: {isPassive: true},
  pin1: {isPassive: true}
} satisfies NonNullable<DiodeProps["pinAttributes"]>

export const A_1N4148W = (props: DiodeProps) => {
  const { name = "D1", ...restProps } = props

  return (
    <diode
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C81598"
  ]
}}
      manufacturerPartNumber="1N4148W"
      pinAttributes={pinAttributes}
      footprint="smdpads2_p3.4699mm_pw1.1mm_ph1mm_cyw5.0699mm_cyh2.1mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C81598.obj?uuid=114f2449d65947c2a2476b7fb75383eb",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C81598.step?uuid=114f2449d65947c2a2476b7fb75383eb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...restProps}
    />
  )
}
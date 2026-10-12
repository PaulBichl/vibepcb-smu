import type { DiodeProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["cathode","neg"],
  pin2: ["anode","pos"]
} as const

export const SS5100 = (props: DiodeProps) => {
  const { name = "D1", ...restProps } = props

  return (
    <diode
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5128814"
  ]
}}
      manufacturerPartNumber="SS5100"
      footprint="smdpads2_p4.7196mm_pw2.159mm_ph2.7432mm_cyw7.3786mm_cyh4.05mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5128814.obj?uuid=e5bef0ac9c9d433fbe4d0cbf05ecf245",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5128814.step?uuid=e5bef0ac9c9d433fbe4d0cbf05ecf245",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00013969999997698324, y: 0, z: -1.125 },
      }}
      {...restProps}
    />
  )
}
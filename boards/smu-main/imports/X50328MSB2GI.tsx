import type { CrystalProps } from "@tscircuit/props"

type ImportedCrystalProps = Omit<CrystalProps, "frequency" | "pinVariant">

export const X50328MSB2GI = (props: ImportedCrystalProps) => {
  const { name = "X1", ...restProps } = props

  return (
    <crystal
      name={name}
      frequency="8MHz"
      pinVariant="two_pin"
      supplierPartNumbers={{
  "jlcpcb": [
    "C115962"
  ]
}}
      manufacturerPartNumber="X50328MSB2GI"
      footprint="smdpads2_p4.1001mm_pw1.9mm_ph2.4mm_cyw6.5001mm_cyh3.7mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C115962.obj?uuid=761affdd34194a39b73f9570bc2cdc8f",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C115962.step?uuid=761affdd34194a39b73f9570bc2cdc8f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.00007619999985308823, z: -0.01 },
      }}
      {...restProps}
    />
  )
}
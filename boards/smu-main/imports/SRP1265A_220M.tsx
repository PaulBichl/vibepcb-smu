import type { InductorProps } from "@tscircuit/props"

export const SRP1265A_220M = (props: Omit<InductorProps, "inductance">) => {
  return (
    <inductor
      inductance="22uH"
      supplierPartNumbers={{
  "jlcpcb": [
    "C2041465"
  ]
}}
      manufacturerPartNumber="SRP1265A-220M"
      footprint="smdpads2_p11.5001mm_pw3.5mm_ph5mm_cyw15.5001mm_cyh13mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2041465.obj?uuid=b9cef65ce96748059577ce5e642ee887",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2041465.step?uuid=b9cef65ce96748059577ce5e642ee887",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999956566899, y: 0.000012699999956566899, z: 0 },
      }}
      {...props}
    />
  )
}
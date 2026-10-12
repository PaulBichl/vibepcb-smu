import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["S1"],
  pin2: ["S2"],
  pin3: ["S3"],
  pin4: ["G"],
  pin5: ["D3"],
  pin6: ["D5"],
  pin7: ["D2"],
  pin8: ["D1"],
  pin9: ["D4"]
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin9": [...pinLabels["pin9"], "thermalpad"],
} as const

export const BSC160N10NS3G = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C148261"
  ]
}}
      manufacturerPartNumber="BSC160N10NS3G"
      footprint="dfn8_thermalpad4mmx4.5mm_thermalpadcenteroffsetx0.705mm_w6.65mm_pw0.7mm_pl0.92mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C148261.obj?uuid=891406f416a3463aa7e73ae0eae8aa8a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C148261.step?uuid=891406f416a3463aa7e73ae0eae8aa8a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999956566899, y: 0.0001142999999501626, z: 0 },
      }}
      {...props}
    />
  )
}
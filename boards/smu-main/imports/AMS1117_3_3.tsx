import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VOUT1"],
  pin3: ["VIN"],
  pin4: ["VOUT2"]
} as const

const pinAttributes = {
  pin1: {requiresGround: true},
  pin3: {requiresPower: true}
} as const

export const AMS1117_3_3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C6186"
  ]
}}
      manufacturerPartNumber="AMS1117-3.3"
      footprint="sot223_w8.0599mm_p2.3mm_pl2.5mm_pw1.1mm_tabpl2.34mm_tabpw3.6mm_taboffset0.08mm_rounded0_pin1location(rightside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C6186.obj?uuid=e80246a9471445bfb635be848806a22e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C6186.step?uuid=e80246a9471445bfb635be848806a22e",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.14002385000003414, y: -0.000012700000070253736, z: -0.049394 },
      }}
      {...props}
    />
  )
}
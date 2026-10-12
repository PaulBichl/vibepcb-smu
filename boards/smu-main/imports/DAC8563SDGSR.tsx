import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VOUTA"],
  pin2: ["VOUTB"],
  pin3: ["GND"],
  pin4: ["N_LDAC"],
  pin5: ["N_CLR"],
  pin6: ["N_SYNC"],
  pin7: ["SCLK"],
  pin8: ["DIN"],
  pin9: ["AVDD"],
  pin10: ["VREFIN","VREFOUT"]
} as const

const pinAttributes = {
  pin3: {requiresGround: true}
} as const

export const DAC8563SDGSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C1554729"
  ]
}}
      manufacturerPartNumber="DAC8563SDGSR"
      footprint="dfn10_p0.5mm_w6mm_pw0.3mm_pl1.3mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1554729.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1554729.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  )
}
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["N_OE"],
  pin2: ["A"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["VCC"]
} as const

const pinAttributes = {
  pin3: {requiresGround: true},
  pin5: {requiresPower: true}
} as const

export const SN74LV1T125DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C473338"
  ]
}}
      manufacturerPartNumber="SN74LV1T125DBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.47mm_pw0.49mm_pl1.16mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C473338.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C473338.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.004489450000050965, y: 0.000012700000070253736, z: -0.049083 },
      }}
      {...props}
    />
  )
}
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["VSS"],
  pin3: ["CE"],
  pin4: ["NC"],
  pin5: ["VOUT"]
} as const

const pinAttributes = {
  pin1: {isInput: true, requiresPower: true, mustBeConnected: true, shouldHaveDecouplingCapacitor: true, recommendedDecouplingCapacitorCapacitance: "1uF"},
  pin2: {requiresGround: true, mustBeConnected: true},
  pin4: {doNotConnect: true},
  pin3: {isInput: true},
  pin5: {isOutput: true, providesPower: true, providesVoltage: "3.3V", shouldHaveDecouplingCapacitor: true, recommendedDecouplingCapacitorCapacitance: "1uF"}
} satisfies NonNullable<ChipProps["pinAttributes"]>

export const ME6211C33M5G_N = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C82942"
  ]
}}
      manufacturerPartNumber="ME6211C33M5G-N"
      footprint="dfn6_missing(5)_p0.95mm_w3.47mm_pw0.49mm_pl1.16mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C82942.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C82942.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.004489450000050965, y: 0.000012700000070253736, z: -0.049083 },
      }}
      {...props}
    />
  )
}
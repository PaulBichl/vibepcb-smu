import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["AVDD"],
  pin2: ["AGND"],
  pin3: ["AIN0P"],
  pin4: ["AIN0N"],
  pin5: ["AIN1N"],
  pin6: ["AIN1P"],
  pin7: ["NC1"],
  pin8: ["NC2"],
  pin9: ["NC3"],
  pin10: ["NC4"],
  pin11: ["N_SYNC","N_RESET"],
  pin12: ["N_CS"],
  pin13: ["N_DRDY"],
  pin14: ["SCLK"],
  pin15: ["DOUT"],
  pin16: ["DIN"],
  pin17: ["CLKIN"],
  pin18: ["CAP"],
  pin19: ["DGND"],
  pin20: ["DVDD"]
} as const

const pinAttributes = {
  pin2: {requiresGround: true},
  pin7: {doNotConnect: true},
  pin8: {doNotConnect: true},
  pin9: {doNotConnect: true},
  pin10: {doNotConnect: true}
} as const

export const ADS131M02IPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2922448"
  ]
}}
      manufacturerPartNumber="ADS131M02IPWR"
      footprint="tssop20_p0.65mm_w3.9999mm_pw0.364mm_pl1.742mm_rounded0.182mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2922448.obj?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2922448.step?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.019205 },
      }}
      {...props}
    />
  )
}
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["TD_POS"],
  pin2: ["TD_NEG"],
  pin3: ["RD_POS"],
  pin4: ["TCT"],
  pin5: ["RCT"],
  pin6: ["RD_NEG"],
  pin7: ["NC"],
  pin8: ["CHS_GND"],
  pin9: ["LEDG_A"],
  pin10: ["LEDG_K"],
  pin11: ["LEDY_K"],
  pin12: ["LEDY_A"],
  pin13: ["SH1"],
  pin14: ["SH2"]
} as const

const pinAttributes = {
  pin7: {doNotConnect: true}
} as const

export const HR911105A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C12074"
  ]
}}
      manufacturerPartNumber="HR911105A"
      footprint={<footprint>
        <hole pcbX="-5.715mm" pcbY="-1.9450431mm" diameter="3.3000188mm" />
<hole pcbX="5.715mm" pcbY="-1.9450431mm" diameter="3.3000188mm" />
<platedhole  portHints={["pin1"]} pcbX="-4.45008mm" pcbY="4.4049569mm" holeWidth="0.999998mm" holeHeight="0.999998mm" outerWidth="1.5999968mm" outerHeight="1.5999968mm" rectPad={true} pcbRotation="0deg" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-3.18008mm" pcbY="6.9449569mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-1.91008mm" pcbY="4.4049569mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-0.64008mm" pcbY="6.9449569mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="0.62992mm" pcbY="4.4049569mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="1.89992mm" pcbY="6.9449569mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="3.16992mm" pcbY="4.4049569mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="4.43992mm" pcbY="6.9449569mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-6.625082mm" pcbY="-6.8449571mm" outerDiameter="1.7999964mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="-4.085082mm" pcbY="-6.8449571mm" outerDiameter="1.7999964mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="4.085082mm" pcbY="-6.8449571mm" outerDiameter="1.7999964mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin12"]} pcbX="6.625082mm" pcbY="-6.8449571mm" outerDiameter="1.7999964mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin13"]} pcbX="-7.744968mm" pcbY="1.1049889mm" outerDiameter="2.499995mm" holeDiameter="1.7999964mm" shape="circle" />
<platedhole  portHints={["pin14"]} pcbX="7.744968mm" pcbY="1.1049889mm" outerDiameter="2.499995mm" holeDiameter="1.7999964mm" shape="circle" />
<silkscreenpath route={[{"x":-8.0499966000001,"y":-0.5649849000000131},{"x":-8.0499966000001,"y":-12.865011099999947}]} />
<silkscreenpath route={[{"x":8.049996599999872,"y":-0.5649849000000131},{"x":8.049996599999872,"y":-12.865011099999947}]} />
<silkscreenpath route={[{"x":-8.0499966000001,"y":8.734971099999939},{"x":-8.0499966000001,"y":2.7349830999999085}]} />
<silkscreenpath route={[{"x":8.05035220000002,"y":8.734666300000072},{"x":8.05035220000002,"y":2.7346529000000146}]} />
<silkscreenpath route={[{"x":-8.0499966000001,"y":8.734971099999939},{"x":8.049996599999872,"y":8.734971099999939}]} />
<silkscreenpath route={[{"x":-8.0499966000001,"y":-12.865011099999947},{"x":8.049996599999872,"y":-12.865011099999947}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="9.7252429mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-9.244965499999921,"y":7.994955300000015},{"x":9.244965499999807,"y":7.994955300000015},{"x":9.244965499999807,"y":-7.994955300000015},{"x":-9.244965499999921,"y":-7.994955300000015},{"x":-9.244965499999921,"y":7.994955300000015}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C12074.obj?uuid=269ece015cf14129b359f9a66aa2dc0d",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C12074.step?uuid=269ece015cf14129b359f9a66aa2dc0d",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 2.129989199999982, z: -0.00000660000000030081 },
      }}
      {...props}
    />
  )
}
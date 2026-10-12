import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"]
} as const

export const A2541WV_2x5P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C225520"
  ]
}}
      manufacturerPartNumber="A2541WV-2x5P"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-5.08mm" pcbY="-1.27mm" holeWidth="1.1999976mm" holeHeight="1.1999976mm" outerWidth="1.7999964mm" outerHeight="1.7999964mm" rectPad={true} pcbRotation="0deg" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-5.08mm" pcbY="1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-2.54mm" pcbY="-1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-2.54mm" pcbY="1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-0mm" pcbY="-1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-0mm" pcbY="1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="2.54mm" pcbY="-1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="2.54mm" pcbY="1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="5.08mm" pcbY="-1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="5.08mm" pcbY="1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<silkscreenpath route={[{"x":-6.6000375999999505,"y":2.5399999999999636},{"x":6.600012199999924,"y":2.5399999999999636}]} />
<silkscreenpath route={[{"x":6.600012199999924,"y":-2.5399999999999636},{"x":-6.6000375999999505,"y":-2.5399999999999636}]} />
<silkscreenpath route={[{"x":-6.6000375999999505,"y":2.5399999999999636},{"x":-6.6000375999999505,"y":-2.5399999999999636}]} />
<silkscreenpath route={[{"x":6.600012199999924,"y":2.5399999999999636},{"x":6.600012199999924,"y":-2.5399999999999636}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.54mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.600000000000136,"y":2.7899999999999636},{"x":6.599974599999882,"y":2.7899999999999636},{"x":6.599974599999882,"y":-2.7899999999999636},{"x":-6.600000000000136,"y":-2.7899999999999636},{"x":-6.600000000000136,"y":2.7899999999999636}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C225520.obj?uuid=c287671196144175b06aefa49d054a6e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C225520.step?uuid=c287671196144175b06aefa49d054a6e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 5.08001270000007, y: -1.27, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
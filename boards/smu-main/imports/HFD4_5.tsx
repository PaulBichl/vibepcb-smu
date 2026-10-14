import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["COIL_P"],
  pin2: ["NC1"],
  pin3: ["COM1"],
  pin4: ["NO1"],
  pin5: ["NO2"],
  pin6: ["COM2"],
  pin7: ["NC2"],
  pin8: ["COIL_N"]
} as const

export const HFD4_5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C23510"
  ]
}}
      manufacturerPartNumber="HFD4/5"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.79984mm" pcbY="-2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0.59944mm" pcbY="-2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.6002mm" pcbY="-2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.79984mm" pcbY="-2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="3.79984mm" pcbY="2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="1.6002mm" pcbY="2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-0.59944mm" pcbY="2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-3.799586mm" pcbY="2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<silkscreenpath route={[{"x":5.010403999999994,"y":3.2498284000000126},{"x":4.583963399999988,"y":3.2498284000000126}]} />
<silkscreenpath route={[{"x":3.0368239999999957,"y":3.2498284000000126},{"x":2.3839424000000236,"y":3.2498284000000126}]} />
<silkscreenpath route={[{"x":0.8368284000000017,"y":3.2498284000000126},{"x":0.1839722000000279,"y":3.2498284000000126}]} />
<silkscreenpath route={[{"x":-1.3631671999999924,"y":3.2498284000000126},{"x":-3.016046799999998,"y":3.2498284000000126}]} />
<silkscreenpath route={[{"x":-4.5631607999999915,"y":3.2498284000000126},{"x":-4.989601399999984,"y":3.2498284000000126}]} />
<silkscreenpath route={[{"x":3.0368239999999957,"y":-3.2501585999999634},{"x":2.3839424000000236,"y":-3.2501585999999634}]} />
<silkscreenpath route={[{"x":0.8368284000000017,"y":-3.2501585999999634},{"x":0.1839722000000279,"y":-3.2501585999999634}]} />
<silkscreenpath route={[{"x":-1.3631671999999924,"y":-3.2501585999999634},{"x":-3.016046799999998,"y":-3.2501585999999634}]} />
<silkscreenpath route={[{"x":-4.5631607999999915,"y":-3.2501585999999634},{"x":-4.989601399999984,"y":-3.2501585999999634}]} />
<silkscreenpath route={[{"x":5.010403999999994,"y":3.2498284000000126},{"x":5.010403999999994,"y":-3.2501585999999634}]} />
<silkscreenpath route={[{"x":-4.989601399999984,"y":-3.2501585999999634},{"x":-4.989601399999984,"y":3.2498284000000126}]} />
<silkscreenpath route={[{"x":5.010403999999994,"y":-3.2501585999999634},{"x":4.583963399999988,"y":-3.2501585999999634}]} />
<silkscreencircle pcbX="-4.700016mm" pcbY="-3.800094mm" radius="0.150114mm" />
<silkscreentext text="{NAME}" pcbX="-0.002286mm" pcbY="4.378454mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.249989999999997,"y":3.589998400000013},{"x":5.249989999999997,"y":3.589998400000013},{"x":5.249989999999997,"y":-3.5899983999999563},{"x":-5.249989999999997,"y":-3.5899983999999563},{"x":-5.249989999999997,"y":3.589998400000013}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C23510.obj?uuid=6231967971874306837d279a8847f5b2",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C23510.step?uuid=6231967971874306837d279a8847f5b2",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.00501269999995646, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}
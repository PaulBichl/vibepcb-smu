import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VIN_POS"],
  pin2: ["VIN_NEG"],
  pin3: ["ILIM"],
  pin4: ["V_NEG"],
  pin5: ["V_POS"],
  pin6: ["VO"],
  pin7: ["ES"]
} as const

export const OPA548T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-0.4,"y":-0.4},{"x":0.4,"y":0},{"x":-0.4,"y":0.4},{"x":-0.4,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.32,"y":0.2},{"x":-0.2,"y":0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.32,"y":-0.2},{"x":-0.2,"y":-0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.26,"y":-0.14},{"x":-0.26,"y":-0.26}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":0.4},{"x":0,"y":0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":-0.2},{"x":0,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.28,"y":0.34},{"x":-0.4,"y":0.6}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.28,"y":-0.34},{"x":-0.4,"y":-0.6}]} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["VIN_POS"]} direction="left" schX={-0.8} schY={-0.2} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["VIN_NEG"]} direction="left" schX={-0.8} schY={0.2} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["ILIM"]} direction="left" schX={-0.8} schY={-0.6} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["V_NEG"]} direction="down" schX={0} schY={-0.8} schStemLength={0.4} />
          <port name="pin5" pinNumber={5} aliases={["V_POS"]} direction="up" schX={0} schY={0.8} schStemLength={0.4} />
          <port name="pin6" pinNumber={6} aliases={["VO"]} direction="right" schX={0.8} schY={0} schStemLength={0.4} />
          <port name="pin7" pinNumber={7} aliases={["ES"]} direction="left" schX={-0.8} schY={0.6} schStemLength={0.4} />
          <schematictext schX={0} schY={1.03} text="{NAME}" fontSize={0.2} anchor="bottom_center" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C138712"
  ]
}}
      manufacturerPartNumber="OPA548T"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.3850009mm" pcbY="-1.6706279mm" holeWidth="1.1051032mm" holeHeight="1.1000232mm" outerWidth="1.7999964mm" outerHeight="1.7999964mm" rectPad={true} pcbRotation="0deg" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-2.1150009mm" pcbY="2.5206261mm" holeWidth="1.1051032mm" holeHeight="1.1000232mm" outerWidth="1.7999964mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="-0.8450009mm" pcbY="-1.6703739mm" holeWidth="1.1051032mm" holeHeight="1.1000232mm" outerWidth="1.7999964mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="0.4249991mm" pcbY="2.5206261mm" holeWidth="1.1051032mm" holeHeight="1.1000232mm" outerWidth="1.7999964mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin5"]} pcbX="1.6949991mm" pcbY="-1.6703739mm" holeWidth="1.1051032mm" holeHeight="1.1000232mm" outerWidth="1.7999964mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin6"]} pcbX="2.9649991mm" pcbY="2.5206261mm" holeWidth="1.1051032mm" holeHeight="1.1000232mm" outerWidth="1.7999964mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="4.2349991mm" pcbY="-1.6703739mm" holeWidth="1.1051032mm" holeHeight="1.1000232mm" outerWidth="1.7999964mm" outerHeight="1.7999964mm" shape="pill" />
<silkscreenpath route={[{"x":-4.695640900000015,"y":5.940228100000013},{"x":5.5456391000000025,"y":5.940228100000013}]} />
<silkscreenpath route={[{"x":-3.1792609000000027,"y":2.8084081000000083},{"x":-4.695640900000015,"y":2.8084081000000083},{"x":-4.695640900000015,"y":7.451528100000019},{"x":5.5456391000000025,"y":7.451528100000019},{"x":5.5456391000000025,"y":2.8084081000000083},{"x":4.029259100000004,"y":2.8084081000000083}]} />
<silkscreenpath route={[{"x":-1.0482008999999977,"y":2.8084081000000083},{"x":-0.6392608999999965,"y":2.8084081000000083}]} />
<silkscreenpath route={[{"x":1.4892591000000124,"y":2.8084081000000083},{"x":1.9007390999999956,"y":2.8084081000000083}]} />
<silkscreenpath route={[{"x":2.274119099999993,"y":7.451528100000019},{"x":2.274119099999993,"y":5.940228100000013}]} />
<silkscreenpath route={[{"x":-3.3850008999999943,"y":2.8084081000000083},{"x":-3.3850008999999943,"y":0.17950810000000672}]} />
<silkscreenpath route={[{"x":-0.8450009000000023,"y":2.8084081000000083},{"x":-0.8450009000000023,"y":0.19474810000001241}]} />
<silkscreenpath route={[{"x":1.694999100000004,"y":2.8084081000000083},{"x":1.694999100000004,"y":0.19474810000001241}]} />
<silkscreenpath route={[{"x":4.234999099999996,"y":2.8084081000000083},{"x":4.234999099999996,"y":0.19474810000001241}]} />
<silkscreenpath route={[{"x":-1.4241208999999913,"y":7.451528100000019},{"x":-1.4241208999999913,"y":5.940228100000013}]} />
<silkscreentext text="{NAME}" pcbX="0.4122991mm" pcbY="8.4870881mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.094992899999994,"y":7.739475700000014},{"x":5.944991099999996,"y":7.739475700000014},{"x":5.944991099999996,"y":-2.8206260999999984},{"x":-5.094992899999994,"y":-2.8206260999999984},{"x":-5.094992899999994,"y":7.739475700000014}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C138712.obj?uuid=1b0b9d7a6ce5448dac0421b192c372c8",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C138712.step?uuid=1b0b9d7a6ce5448dac0421b192c372c8",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.42499909999999375, y: -2.919986400000001, z: -15.3189906 },
      }}
      {...props}
    />
  )
}
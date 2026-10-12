import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["GND1"],
  pin3: ["pin3"],
  pin4: ["GND2"]
} as const

const pinAttributes = {
  pin2: {requiresGround: true},
  pin4: {requiresGround: true}
} as const

export const NX3225SA_25MHz_STD_CSR_6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      symbol={
        <symbol>
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.6} schY={-0.2} schStemLength={0.2} />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="right" schX={0.6} schY={0.2} schStemLength={0.2} />
          <port name="pin4" pinNumber={4} aliases={["GND2"]} direction="left" schX={-0.6} schY={0.2} schStemLength={0.2} />
          <port name="pin2" pinNumber={2} aliases={["GND1"]} direction="right" schX={0.6} schY={-0.2} schStemLength={0.2} />
          <schematicrect schX={0} schY={0} width={0.8} height={0.8} strokeWidth={0.02} color="#880000" />
          <schematiccircle center={{ x: -0.3, y: -0.3 }} radius={0.03} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":-0.1,"y":-0.14},{"x":-0.1,"y":0.14}]} strokeColor="#881100" />
          <schematicpath points={[{"x":0.1,"y":-0.14},{"x":0.1,"y":0.14}]} strokeColor="#881100" />
          <schematicpath points={[{"x":-0.4,"y":-0.2},{"x":-0.2,"y":-0.2},{"x":-0.2,"y":0},{"x":-0.1,"y":0}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.4,"y":0.2},{"x":0.2,"y":0.2},{"x":0.2,"y":0},{"x":0.1,"y":0}]} strokeColor="#880000" />
          <schematicrect schX={0} schY={0} width={0.08} height={0.28} strokeWidth={0.02} color="#880000" />
          <schematictext schX={0} schY={0.608} text="{NAME}" fontSize={0.2} anchor="bottom_center" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C448646"
  ]
}}
      manufacturerPartNumber="NX3225SA-25MHz-STD-CSR-6"
      footprint="crystal"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C448646.obj?uuid=02485e56ba8d4732a26526d2983fc729",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C448646.step?uuid=02485e56ba8d4732a26526d2983fc729",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: 0 },
      }}
      {...props}
    />
  )
}
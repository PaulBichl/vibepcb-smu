import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["AN"],
  pin2: ["CAT"],
  pin3: ["EM"],
  pin4: ["COL"]
} as const

export const PC817C = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicrect schX={-0.1} schY={0} width={1} height={0.68} strokeWidth={0.02} color="#880000" />
          <port name="pin1" pinNumber={1} aliases={["AN"]} direction="left" schX={-1} schY={0.2} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["CAT"]} direction="left" schX={-1} schY={-0.2} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["EM"]} direction="right" schX={0.8} schY={-0.2} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["COL"]} direction="right" schX={0.8} schY={0.2} schStemLength={0.4} />
          <schematicpath points={[{"x":0.4,"y":0.2},{"x":0.2,"y":0.06}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":-0.06},{"x":0.4,"y":-0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.18},{"x":0.2,"y":-0.18}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.4,"y":-0.2},{"x":0.34,"y":-0.1},{"x":0.28,"y":-0.18},{"x":0.4,"y":-0.2}]} strokeColor="#880000" isFilled fillColor="#880000" />
          <schematicpath svgPath="M -0.04 -0.16 L -0.08 -0.08 L -0.12 -0.12 Z" strokeColor="#880000" isFilled fillColor="#880000" />
          <schematicpath svgPath="M 0.02 -0.08 L -0.02 0 L -0.06 -0.04 Z" strokeColor="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":-0.18,"y":-0.02},{"x":-0.04,"y":-0.16}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":0.06},{"x":0.02,"y":-0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.18,"y":-0.1},{"x":-0.5,"y":-0.1}]} strokeColor="#880000" />
          <schematicpath svgPath="M -0.46 0.1 L -0.34 -0.1 L -0.2 0.1 Z" strokeColor="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":-0.6,"y":0.2},{"x":-0.34,"y":0.2},{"x":-0.34,"y":-0.2},{"x":-0.6,"y":-0.2}]} strokeColor="#880000" />
          <schematictext schX={-0.1} schY={0.568} text="{NAME}" fontSize={0.2} anchor="bottom_center" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C22447129"
  ]
}}
      manufacturerPartNumber="PC817C"
      footprint="dfn4_p2.54mm_w12.2001mm_pw1.8mm_pl2mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C22447129.obj?uuid=965674740e3b443a808d1fc638dfe5ca",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C22447129.step?uuid=965674740e3b443a808d1fc638dfe5ca",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: -0.0001015999999935957, z: -0.035 },
      }}
      {...props}
    />
  )
}
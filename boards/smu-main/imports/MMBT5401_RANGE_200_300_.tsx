import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["B"],
  pin2: ["E"],
  pin3: ["C"]
} as const

export const MMBT5401_RANGE_200_300_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":0,"y":-0.06},{"x":0.12,"y":-0.08},{"x":0.06,"y":-0.16},{"x":0,"y":-0.06}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":0.18},{"x":0,"y":-0.18}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.2},{"x":0,"y":0.06}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":-0.06},{"x":0.2,"y":-0.2}]} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["B"]} direction="left" schX={-0.2} schY={0} schStemLength={0.2} />
          <port name="pin2" pinNumber={2} aliases={["E"]} direction="down" schX={0.2} schY={-0.4} schStemLength={0.2} />
          <port name="pin3" pinNumber={3} aliases={["C"]} direction="up" schX={0.2} schY={0.4} schStemLength={0.2} />
          <schematictext schX={0} schY={0.64} text="{NAME}" fontSize={0.2} anchor="bottom_center" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C8326"
  ]
}}
      manufacturerPartNumber="MMBT5401(RANGE:200-300)"
      footprint="sot23w_p1mm_pw0.65mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C8326.obj?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C8326.step?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.000012700000070253736, y: -0.000012699999956566899, z: 0.050795 },
      }}
      {...props}
    />
  )
}
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["C"],
  pin2: ["A"]
} as const

export const SMBJ24A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <port name="pin2" pinNumber={2} aliases={["A"]} direction="right" schX={0.4} schY={0} schStemLength={0.3} />
          <port name="pin1" pinNumber={1} aliases={["C"]} direction="left" schX={-0.4} schY={0} schStemLength={0.3} />
          <schematicpath points={[{"x":-0.18,"y":0.18},{"x":-0.1,"y":0.1},{"x":-0.1,"y":-0.1},{"x":-0.02,"y":-0.18}]} strokeColor="#880000" />
          <schematicpath svgPath="M 0.1 -0.12 L -0.1 0 L 0.1 0.14 Z" strokeColor="#880000" />
          <schematictext schX={0} schY={0.38} text="{NAME}" fontSize={0.2} anchor="bottom_center" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C123819"
  ]
}}
      manufacturerPartNumber="SMBJ24A"
      footprint="smdpads2_p4.7214mm_pw2.0475mm_ph2.1924mm_cyw7.2688mm_cyh4.1mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C123819.obj?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C123819.step?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.1 },
      }}
      {...props}
    />
  )
}
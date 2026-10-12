import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["E"],
  pin2: ["D"],
  pin3: ["DP"],
  pin4: ["C"],
  pin5: ["G"],
  pin6: ["DIG4"],
  pin7: ["B"],
  pin8: ["DIG3"],
  pin9: ["DIG2"],
  pin10: ["F"],
  pin11: ["A"],
  pin12: ["DIG1"]
} as const

export const SR420561N = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-1.76,"y":1.1},{"x":1.8,"y":1.1},{"x":1.8,"y":-1.1},{"x":-1.76,"y":-1.1},{"x":-1.76,"y":1.1}]} strokeWidth={0.02} strokeColor="#880000" isFilled fillColor="#EFEFEF" />
          <port name="pin1" pinNumber={1} aliases={["E"]} direction="down" schX={-0.5} schY={-1.5} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["D"]} direction="down" schX={-0.3} schY={-1.5} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["DP"]} direction="down" schX={-0.1} schY={-1.5} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["C"]} direction="down" schX={0.1} schY={-1.5} schStemLength={0.4} />
          <port name="pin5" pinNumber={5} aliases={["G"]} direction="down" schX={0.3} schY={-1.5} schStemLength={0.4} />
          <port name="pin6" pinNumber={6} aliases={["DIG4"]} direction="down" schX={0.5} schY={-1.5} schStemLength={0.4} />
          <port name="pin7" pinNumber={7} aliases={["B"]} direction="up" schX={0.5} schY={1.5} schStemLength={0.4} />
          <port name="pin8" pinNumber={8} aliases={["DIG3"]} direction="up" schX={0.3} schY={1.5} schStemLength={0.4} />
          <port name="pin9" pinNumber={9} aliases={["DIG2"]} direction="up" schX={0.1} schY={1.5} schStemLength={0.4} />
          <port name="pin10" pinNumber={10} aliases={["F"]} direction="up" schX={-0.1} schY={1.5} schStemLength={0.4} />
          <port name="pin11" pinNumber={11} aliases={["A"]} direction="up" schX={-0.3} schY={1.5} schStemLength={0.4} />
          <port name="pin12" pinNumber={12} aliases={["DIG1"]} direction="up" schX={-0.5} schY={1.5} schStemLength={0.4} />
          <schematicpath points={[{"x":0.32,"y":0.42},{"x":0.64,"y":0.42}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.24,"y":0.3},{"x":0.16,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.24,"y":-0.02},{"x":0.56,"y":-0.02}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":-0.14},{"x":0.1,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.72,"y":0.3},{"x":0.64,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.62,"y":-0.14},{"x":0.54,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":-0.46},{"x":0.5,"y":-0.46}]} strokeColor="#880000" />
          <schematiccircle center={{ x: 0.66, y: -0.44 }} radius={0.06} strokeWidth={0.02} color="#880000" isFilled fillColor="#EFEFEF" />
          <schematictext schX={0.6} schY={-0.6} text="dp" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={0.44} schY={0.44} text="a" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={0.56} schY={0.12} text="b" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={0.46} schY={-0.3} text="c" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={0.3} schY={-0.44} text="d" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={0.28} schY={0.14} text="f" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={0.38} schY={0.04} text="g" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematicpath points={[{"x":-0.54,"y":0.42},{"x":-0.22,"y":0.42}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.62,"y":0.3},{"x":-0.7,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.62,"y":-0.02},{"x":-0.3,"y":-0.02}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":-0.14},{"x":-0.76,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.14,"y":0.3},{"x":-0.22,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.24,"y":-0.14},{"x":-0.32,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":-0.46},{"x":-0.36,"y":-0.46}]} strokeColor="#880000" />
          <schematiccircle center={{ x: -0.2, y: -0.44 }} radius={0.06} strokeWidth={0.02} color="#880000" isFilled fillColor="#EFEFEF" />
          <schematictext schX={-0.26} schY={-0.6} text="dp" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-0.42} schY={0.44} text="a" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-0.3} schY={0.12} text="b" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-0.4} schY={-0.3} text="c" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-0.56} schY={-0.44} text="d" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-0.66} schY={-0.32} text="e" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-0.58} schY={0.14} text="f" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-0.48} schY={0.04} text="g" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={0.2} schY={-0.34} text="e" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematicpath points={[{"x":-1.4,"y":0.42},{"x":-1.08,"y":0.42}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.48,"y":0.3},{"x":-1.56,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.48,"y":-0.02},{"x":-1.16,"y":-0.02}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.54,"y":-0.14},{"x":-1.62,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1,"y":0.3},{"x":-1.08,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.1,"y":-0.14},{"x":-1.18,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.54,"y":-0.46},{"x":-1.22,"y":-0.46}]} strokeColor="#880000" />
          <schematiccircle center={{ x: -1.06, y: -0.44 }} radius={0.06} strokeWidth={0.02} color="#880000" isFilled fillColor="#EFEFEF" />
          <schematictext schX={-1.12} schY={-0.6} text="dp" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-1.28} schY={0.44} text="a" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-1.16} schY={0.12} text="b" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-1.26} schY={-0.3} text="c" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-1.42} schY={-0.44} text="d" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-1.52} schY={-0.32} text="e" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-1.44} schY={0.14} text="f" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={-1.34} schY={0.04} text="g" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematicpath points={[{"x":1.16,"y":0.42},{"x":1.48,"y":0.42}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.08,"y":0.3},{"x":1,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.08,"y":-0.02},{"x":1.4,"y":-0.02}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.02,"y":-0.14},{"x":0.94,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.56,"y":0.3},{"x":1.48,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.46,"y":-0.14},{"x":1.38,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.02,"y":-0.46},{"x":1.34,"y":-0.46}]} strokeColor="#880000" />
          <schematiccircle center={{ x: 1.5, y: -0.44 }} radius={0.06} strokeWidth={0.02} color="#880000" isFilled fillColor="#EFEFEF" />
          <schematictext schX={1.44} schY={-0.6} text="dp" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={1.28} schY={0.44} text="a" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={1.4} schY={0.12} text="b" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={1.3} schY={-0.3} text="c" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={1.14} schY={-0.44} text="d" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={1.04} schY={-0.32} text="e" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={1.12} schY={0.14} text="f" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={1.22} schY={0.04} text="g" fontSize={0.2} anchor="left" color="#000000" schRotation={0} />
          <schematictext schX={0.02} schY={1.74} text="{NAME}" fontSize={0.2} anchor="bottom_center" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C109200"
  ]
}}
      manufacturerPartNumber="SR420561N"
      footprint="dip12_nosquareplating_w15.24mm_od1.52mm_id0.78mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C109200.obj?uuid=722a063e8d4e4ffa8e5b564707275aaa",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C109200.step?uuid=722a063e8d4e4ffa8e5b564707275aaa",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000013410317, y: -0.00012699999999199463, z: -0.10000699999999973 },
      }}
      {...props}
    />
  )
}
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
      symbol={
        <symbol>
          <schematicpath points={[{"x":-0.4142,"y":0.6},{"x":-0.1012,"y":0.6}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8,"y":1},{"x":1.038,"y":1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.14,"y":0.84},{"x":-0.9,"y":0.84}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.038,"y":0.2},{"x":-0.4142,"y":0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.1844,"y":0.595},{"x":-1.1844,"y":0.2036}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.1458,"y":0.595},{"x":-1.1458,"y":0.2036}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.0788,"y":0.2},{"x":-0.68,"y":0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4142,"y":0.313},{"x":-0.4142,"y":0.2},{"x":-0.413,"y":0.1988}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.0788,"y":0.6},{"x":-0.68,"y":0.6}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":0.3802},{"x":-0.5744,"y":0.3802}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":0.4186},{"x":-0.5744,"y":0.4186}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4142,"y":0.4858},{"x":-0.4142,"y":0.6}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4142,"y":0.3802},{"x":-0.6068,"y":0.3802}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4142,"y":0.4186},{"x":-0.6068,"y":0.4186}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":-0.4},{"x":-1.8,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.038,"y":1.7392},{"x":1.038,"y":0.067},{"x":1.5946,"y":0.067},{"x":1.5946,"y":1.7392},{"x":1.038,"y":1.7392}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":-0.3504},{"x":-1.2514,"y":-0.451}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.1968,"y":-0.3504},{"x":-1.1968,"y":-0.451}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8,"y":-0.4},{"x":-1.1968,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":0},{"x":0.1242,"y":-0.0322}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":-0.19},{"x":0.1242,"y":-0.1578}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":-0.19},{"x":0.14,"y":-0.22}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":-0.0634},{"x":0.1242,"y":-0.0956}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":-0.0634},{"x":0.1242,"y":-0.0322}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":-0.1266},{"x":0.1242,"y":-0.1578}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":-0.1266},{"x":0.1242,"y":-0.0956}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.18,"y":0},{"x":0.14,"y":0.02}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.14,"y":-0.22},{"x":0.14,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.628,"y":0.0112},{"x":0.5722,"y":-0.0212}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.628,"y":-0.1788},{"x":0.5722,"y":-0.1466}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.628,"y":-0.1788},{"x":0.5994,"y":-0.1938}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.628,"y":-0.0522},{"x":0.5722,"y":-0.0844}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.628,"y":-0.0522},{"x":0.5722,"y":-0.0212}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.628,"y":-0.1156},{"x":0.5722,"y":-0.1466}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.628,"y":-0.1156},{"x":0.5722,"y":-0.0844}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.628,"y":0.0112},{"x":0.6,"y":0.04}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.5994,"y":-0.1938},{"x":0.5994,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8416,"y":0.0112},{"x":0.7858,"y":-0.0212}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8416,"y":-0.1788},{"x":0.7858,"y":-0.1466}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8416,"y":-0.1788},{"x":0.8,"y":-0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8416,"y":-0.0522},{"x":0.7858,"y":-0.0844}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8416,"y":-0.0522},{"x":0.7858,"y":-0.0212}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8416,"y":-0.1156},{"x":0.7858,"y":-0.1466}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8416,"y":-0.1156},{"x":0.7858,"y":-0.0844}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8416,"y":0.0112},{"x":0.8,"y":0.04}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8,"y":-0.2},{"x":0.8,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.038,"y":1.1838},{"x":-0.1012,"y":1.1838},{"x":-0.1012,"y":1.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.038,"y":1.4074},{"x":0.5994,"y":1.4074}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.038,"y":1.5914},{"x":0.5994,"y":1.5914}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.038,"y":0.3876},{"x":-0.1012,"y":0.3876},{"x":-0.1012,"y":0.6}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.04,"y":0.8},{"x":0.8,"y":0.8}]} strokeColor="#880000" />
          <schematicpath points={[{"x":1.038,"y":0.5888},{"x":0.3784,"y":0.5888},{"x":0.3784,"y":1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.14,"y":0.02},{"x":0.14,"y":0.84}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.6,"y":0.04},{"x":0.5994,"y":1.5914}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.8,"y":0.04},{"x":0.8,"y":1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":-0.8},{"x":-1.8,"y":-0.8}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":-0.7428},{"x":-1.2514,"y":-0.8572}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.162,"y":-0.8},{"x":-1.2514,"y":-0.7428}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.162,"y":-0.8},{"x":-1.2514,"y":-0.8572}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.162,"y":-0.7428},{"x":-1.162,"y":-0.8572}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.162,"y":-0.8},{"x":-0.9434,"y":-0.8},{"x":-0.9434,"y":-1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.162,"y":-1.4},{"x":-0.9434,"y":-1.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":-1.4},{"x":-1.8,"y":-1.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.162,"y":-1.3428},{"x":-1.162,"y":-1.4572}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.162,"y":-1.4},{"x":-1.2514,"y":-1.4572}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":-1.3428},{"x":-1.2514,"y":-1.4572}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.162,"y":-1.4},{"x":-1.2514,"y":-1.3428}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.9434,"y":-1.4},{"x":-0.9434,"y":-1.6}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4142,"y":1.4},{"x":-0.1012,"y":1.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.3784,"y":1},{"x":-0.4142,"y":1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.0788,"y":1},{"x":-0.68,"y":1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.0788,"y":1.4},{"x":-0.68,"y":1.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.1458,"y":1.3962},{"x":-1.1458,"y":1.0038}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.1844,"y":1.3962},{"x":-1.1844,"y":1.0038}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":1.4},{"x":-1.8,"y":1.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":1.2},{"x":-1.8,"y":1.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4142,"y":1.113},{"x":-0.4142,"y":1},{"x":-0.413,"y":0.9988}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":1.1802},{"x":-0.5744,"y":1.1802}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":1.2198},{"x":-0.5744,"y":1.2198}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4142,"y":1.287},{"x":-0.4142,"y":1.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4142,"y":1.1802},{"x":-0.6068,"y":1.1802}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4142,"y":1.2198},{"x":-0.6068,"y":1.2198}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.0788,"y":1.2},{"x":-0.9012,"y":1.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.9,"y":0.4},{"x":-0.9,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.16,"y":0.08},{"x":-0.9,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.0788,"y":0.4},{"x":-0.9012,"y":0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.9434,"y":-1},{"x":-1.8,"y":-1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.9434,"y":-1.6},{"x":-1.8,"y":-1.6}]} strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 1.334156 A 0.033 0.033 0 1 1 -1.251446 1.400002" strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 1.2671 A 0.0336 0.0336 0 1 1 -1.251446 1.334156" strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 1.200002 A 0.0336 0.0336 0 1 1 -1.251446 1.2671" strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":1},{"x":-1.8,"y":1}]} strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 1.134156 A 0.033 0.033 0 1 1 -1.251446 1.200002" strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 1.0671 A 0.0336 0.0336 0 1 1 -1.251446 1.134156" strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 1 A 0.0336 0.0336 0 1 1 -1.251446 1.0671" strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":0.4},{"x":-1.8,"y":0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":0.6},{"x":-1.8,"y":0.6}]} strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 0.534156 A 0.033 0.033 0 1 1 -1.251446 0.600002" strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 0.4671 A 0.0336 0.0336 0 1 1 -1.251446 0.534156" strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 0.4 A 0.0336 0.0336 0 1 1 -1.251446 0.4671" strokeColor="#880000" />
          <schematicpath points={[{"x":-1.2514,"y":0.2},{"x":-1.8,"y":0.2}]} strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 0.334156 A 0.033 0.033 0 1 1 -1.251446 0.4" strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 0.2671 A 0.0336 0.0336 0 1 1 -1.251446 0.334156" strokeColor="#880000" />
          <schematicpath svgPath="M -1.251446 0.2 A 0.0336 0.0336 0 1 1 -1.251446 0.2671" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 1.400002 A 0.033 0.033 0 1 1 -1.078788 1.334156" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 1.334156 A 0.0336 0.0336 0 1 1 -1.078788 1.2671" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 1.2671 A 0.0336 0.0336 0 1 1 -1.078788 1.200002" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 1.200002 A 0.033 0.033 0 1 1 -1.078788 1.134156" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 1.134156 A 0.0336 0.0336 0 1 1 -1.078788 1.0671" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 1.0671 A 0.0336 0.0336 0 1 1 -1.078788 1" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 0.600002 A 0.033 0.033 0 1 1 -1.078788 0.534156" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 0.534156 A 0.0336 0.0336 0 1 1 -1.078788 0.4671" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 0.4671 A 0.0336 0.0336 0 1 1 -1.078788 0.4" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 0.4 A 0.033 0.033 0 1 1 -1.078788 0.334156" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 0.334156 A 0.0336 0.0336 0 1 1 -1.078788 0.2671" strokeColor="#880000" />
          <schematicpath svgPath="M -1.078788 0.2671 A 0.0336 0.0336 0 1 1 -1.078788 0.2" strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":1.4},{"x":-0.68,"y":1.287}]} strokeColor="#880000" />
          <schematicpath svgPath="M -0.480042 1.286958 A 0.033 0.033 0 1 1 -0.414196 1.286958" strokeColor="#880000" />
          <schematicpath svgPath="M -0.547098 1.286958 A 0.0336 0.0336 0 1 1 -0.480042 1.286958" strokeColor="#880000" />
          <schematicpath svgPath="M -0.614196 1.286958 A 0.0336 0.0336 0 1 1 -0.547098 1.286958" strokeColor="#880000" />
          <schematicpath svgPath="M -0.68 1.286958 A 0.033 0.033 0 1 1 -0.614196 1.286958" strokeColor="#880000" />
          <schematicpath svgPath="M -0.414196 1.113044 A 0.033 0.033 0 1 1 -0.480042 1.113044" strokeColor="#880000" />
          <schematicpath svgPath="M -0.480042 1.113044 A 0.0336 0.0336 0 1 1 -0.547098 1.113044" strokeColor="#880000" />
          <schematicpath svgPath="M -0.547098 1.113044 A 0.0336 0.0336 0 1 1 -0.614196 1.113044" strokeColor="#880000" />
          <schematicpath svgPath="M -0.614196 1.113044 A 0.033 0.033 0 1 1 -0.68 1.113044" strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":1.113},{"x":-0.68,"y":1}]} strokeColor="#880000" />
          <schematicpath svgPath="M -0.480042 0.485704 A 0.033 0.033 0 1 1 -0.414196 0.485704" strokeColor="#880000" />
          <schematicpath svgPath="M -0.547098 0.485704 A 0.0336 0.0336 0 1 1 -0.480042 0.485704" strokeColor="#880000" />
          <schematicpath svgPath="M -0.614196 0.485704 A 0.0336 0.0336 0 1 1 -0.547098 0.485704" strokeColor="#880000" />
          <schematicpath svgPath="M -0.68 0.485704 A 0.033 0.033 0 1 1 -0.614196 0.485704" strokeColor="#880000" />
          <schematicpath svgPath="M -0.414196 0.31179 A 0.033 0.033 0 1 1 -0.480042 0.31179" strokeColor="#880000" />
          <schematicpath svgPath="M -0.480042 0.31179 A 0.0336 0.0336 0 1 1 -0.547098 0.31179" strokeColor="#880000" />
          <schematicpath svgPath="M -0.547098 0.31179 A 0.0336 0.0336 0 1 1 -0.614196 0.31179" strokeColor="#880000" />
          <schematicpath svgPath="M -0.614196 0.31179 A 0.033 0.033 0 1 1 -0.68 0.31179" strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":0.4858},{"x":-0.68,"y":0.6}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.68,"y":0.2},{"x":-0.68,"y":0.3118}]} strokeColor="#880000" />
          <schematicrect schX={0} schY={0} width={3.6} height={3.6} strokeWidth={0.02} color="#880000" />
          <schematictext schX={-1.38} schY={1.462813} text="1CT:1CT" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={-1.38} schY={0.66} text="1CT:1CT" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={-1.32} schY={-0.136562} text="1000pF" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={-1.32} schY={-0.276562} text="2KV" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={-1.48} schY={-0.696562} text="Green LED" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={-1.459062} schY={-1.276563} text="Yellow LED" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={0.94} schY={-0.176563} text="4X75 ohms" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={1.1} schY={1.563437} text="J8" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={1.1} schY={1.36} text="J7" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={1.1} schY={0.96} text="J5" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={1.1} schY={0.76} text="J4" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={1.1} schY={1.1628} text="J6 RX-" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={1.1} schY={0.543437} text="J3 RX+" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={1.1} schY={0.36} text="J2 TX-" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematictext schX={1.1} schY={0.18} text="J1 TX+" fontSize={0.08} anchor="left" color="#880000" schRotation={0} />
          <schematiccircle center={{ x: 0.6, y: 1.4 }} radius={0.02} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: 0.8, y: 0.8 }} radius={0.02} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: 0.14, y: -0.4 }} radius={0.02} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: 0.6, y: -0.4 }} radius={0.02} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -1.06, y: 1.234 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -1.27, y: 1.234 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -1.27, y: 1.034 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -1.06, y: 1.034 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -1.27, y: 0.434 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -1.27, y: 0.236 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -1.06, y: 0.434 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -1.06, y: 0.236 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -0.644, y: 1.31 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -0.644, y: 1.09 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -0.644, y: 0.51 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: -0.644, y: 0.29 }} radius={0.01} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":-0.9,"y":0.84},{"x":-0.9,"y":1.1976}]} strokeColor="#880000" />
          <schematiccircle center={{ x: -0.16, y: -0.4 }} radius={0.02} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":-0.16,"y":-0.22},{"x":-0.16,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":0},{"x":-0.16,"y":0.02}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":-0.1266},{"x":-0.1758,"y":-0.0956}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":-0.1266},{"x":-0.1758,"y":-0.1578}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":-0.0634},{"x":-0.1758,"y":-0.0322}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":-0.0634},{"x":-0.1758,"y":-0.0956}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":-0.19},{"x":-0.16,"y":-0.22}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":-0.19},{"x":-0.1758,"y":-0.1578}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":0},{"x":-0.1758,"y":-0.0322}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.16,"y":0.08},{"x":-0.16,"y":0.02}]} strokeColor="#880000" />
          <port name="pin6" pinNumber={6} aliases={["RD_NEG"]} direction="left" schX={-2.2} schY={1.4} schStemLength={0.4} />
          <port name="pin5" pinNumber={5} aliases={["5"]} direction="left" schX={-2.2} schY={1.2} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["RD_POS"]} direction="left" schX={-2.2} schY={1} schStemLength={0.4} />
          <port name="pin1" pinNumber={1} aliases={["TD_POS"]} direction="left" schX={-2.2} schY={0.2} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["4"]} direction="left" schX={-2.2} schY={0.4} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["TD_NEG"]} direction="left" schX={-2.2} schY={0.6} schStemLength={0.4} />
          <port name="pin7" pinNumber={7} aliases={["NC"]} direction="left" schX={-2.2} schY={-0.2} schStemLength={0.4} />
          <port name="pin8" pinNumber={8} aliases={["CHS_GND"]} direction="left" schX={-2.2} schY={-0.4} schStemLength={0.4} />
          <port name="pin9" pinNumber={9} aliases={["9"]} direction="left" schX={-2.2} schY={-0.8} schStemLength={0.4} />
          <port name="pin10" pinNumber={10} aliases={["10"]} direction="left" schX={-2.2} schY={-1} schStemLength={0.4} />
          <port name="pin11" pinNumber={11} aliases={["11"]} direction="left" schX={-2.2} schY={-1.6} schStemLength={0.4} />
          <port name="pin12" pinNumber={12} aliases={["12"]} direction="left" schX={-2.2} schY={-1.4} schStemLength={0.4} />
          <port name="pin13" pinNumber={13} aliases={["SH1"]} direction="right" schX={2.2} schY={-1.2} schStemLength={0.4} />
          <port name="pin14" pinNumber={14} aliases={["SH2"]} direction="right" schX={2.2} schY={-1.6} schStemLength={0.4} />
          <schematictext schX={0.026} schY={2} text="{NAME}" fontSize={0.2} anchor="bottom_center" />
        </symbol>
      }
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
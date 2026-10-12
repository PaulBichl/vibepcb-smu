import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["TXN"],
  pin2: ["TXP"],
  pin3: ["AGND1"],
  pin4: ["AVDD1"],
  pin5: ["RXN"],
  pin6: ["RXP"],
  pin7: ["DNC"],
  pin8: ["AVDD2"],
  pin9: ["AGND2"],
  pin10: ["EXRES1"],
  pin11: ["AVDD3"],
  pin12: ["NC1"],
  pin13: ["NC2"],
  pin14: ["AGND3"],
  pin15: ["AVDD4"],
  pin16: ["AGND4"],
  pin17: ["AVDD5"],
  pin18: ["VBG"],
  pin19: ["AGND5"],
  pin20: ["TOCAP"],
  pin21: ["AVDD6"],
  pin22: ["1V2O"],
  pin23: ["RSVD1"],
  pin24: ["SPDLED"],
  pin25: ["LINKLED"],
  pin26: ["DUPLED"],
  pin27: ["ACTLED"],
  pin28: ["VDD"],
  pin29: ["GND"],
  pin30: ["XI","CLKIN"],
  pin31: ["XO"],
  pin32: ["SCSn"],
  pin33: ["SCLK"],
  pin34: ["MISO"],
  pin35: ["MOSI"],
  pin36: ["INTn"],
  pin37: ["RSTn"],
  pin38: ["RSVD2"],
  pin39: ["RSVD3"],
  pin40: ["RSVD4"],
  pin41: ["RSVD5"],
  pin42: ["RSVD6"],
  pin43: ["PMODE2"],
  pin44: ["PMODE1"],
  pin45: ["PMODE0"],
  pin46: ["NC3"],
  pin47: ["NC4"],
  pin48: ["AGND6"]
} as const

const pinAttributes = {
  pin3: {requiresGround: true},
  pin9: {requiresGround: true},
  pin12: {doNotConnect: true},
  pin13: {doNotConnect: true},
  pin14: {requiresGround: true},
  pin16: {requiresGround: true},
  pin19: {requiresGround: true},
  pin28: {requiresPower: true, shouldHaveDecouplingCapacitor: true},
  pin29: {requiresGround: true},
  pin46: {doNotConnect: true},
  pin47: {doNotConnect: true},
  pin48: {requiresGround: true},
  pin1: {isOutput: true},
  pin2: {isOutput: true},
  pin4: {requiresPower: true, shouldHaveDecouplingCapacitor: true},
  pin5: {isInput: true},
  pin6: {isInput: true},
  pin7: {doNotConnect: true},
  pin8: {requiresPower: true, shouldHaveDecouplingCapacitor: true},
  pin10: {isBidirectional: true},
  pin11: {requiresPower: true, shouldHaveDecouplingCapacitor: true},
  pin15: {requiresPower: true, shouldHaveDecouplingCapacitor: true},
  pin17: {requiresPower: true, shouldHaveDecouplingCapacitor: true},
  pin18: {doNotConnect: true},
  pin20: {isOutput: true, mustBeConnected: true, shouldHaveDecouplingCapacitor: true, recommendedDecouplingCapacitorCapacitance: "4.7uF"},
  pin21: {requiresPower: true, shouldHaveDecouplingCapacitor: true},
  pin22: {isOutput: true, providesVoltage: "1.2V", shouldHaveDecouplingCapacitor: true, recommendedDecouplingCapacitorCapacitance: "10nF"},
  pin23: {isInput: true, requiresGround: true, mustBeConnected: true, canUseInternalPulldown: true},
  pin24: {isOutput: true},
  pin25: {isOutput: true},
  pin26: {isOutput: true},
  pin27: {isOutput: true},
  pin30: {isInput: true},
  pin31: {isOutput: true},
  pin32: {isInput: true, capabilities: ["spi_cs"], canUseInternalPullup: true},
  pin33: {isInput: true, capabilities: ["spi_sck"]},
  pin34: {isOutput: true, canUseTriState: true, capabilities: ["spi_miso"]},
  pin35: {isInput: true, capabilities: ["spi_mosi"]},
  pin36: {isOutput: true},
  pin37: {isInput: true, canUseInternalPullup: true},
  pin38: {doNotConnect: true},
  pin39: {doNotConnect: true},
  pin40: {doNotConnect: true},
  pin41: {doNotConnect: true},
  pin42: {doNotConnect: true},
  pin43: {isInput: true, canUseInternalPullup: true},
  pin44: {isInput: true, canUseInternalPullup: true},
  pin45: {isInput: true, canUseInternalPullup: true}
} satisfies NonNullable<ChipProps["pinAttributes"]>

export const W5500 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C32843"
  ]
}}
      manufacturerPartNumber="W5500"
      footprint="qfn48_pillpads_h10.2mm_pw0.27mm_pl1.5mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C32843.obj?uuid=a4b96ad857dc48c08dab3d0efdf20aec",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C32843.step?uuid=a4b96ad857dc48c08dab3d0efdf20aec",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0.000795 },
      }}
      {...props}
    />
  )
}
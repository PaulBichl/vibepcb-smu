import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["PC13"],
  pin3: ["PC14_OSC32_IN"],
  pin4: ["PC15_OSC32_OUT"],
  pin5: ["PF0_OSC_IN"],
  pin6: ["PF1_OSC_OUT"],
  pin7: ["PG10_NRST"],
  pin8: ["PC0"],
  pin9: ["PC1"],
  pin10: ["PC2"],
  pin11: ["PC3"],
  pin12: ["PA0"],
  pin13: ["PA1"],
  pin14: ["PA2"],
  pin15: ["VSS1"],
  pin16: ["VDD1"],
  pin17: ["PA3"],
  pin18: ["PA4"],
  pin19: ["PA5"],
  pin20: ["PA6"],
  pin21: ["PA7"],
  pin22: ["PC4"],
  pin23: ["PC5"],
  pin24: ["PB0"],
  pin25: ["PB1"],
  pin26: ["PB2"],
  pin27: ["VSSA"],
  pin28: ["VREF_POS"],
  pin29: ["VDDA"],
  pin30: ["PB10"],
  pin31: ["VSS2"],
  pin32: ["VDD2"],
  pin33: ["PB11"],
  pin34: ["PB12"],
  pin35: ["PB13"],
  pin36: ["PB14"],
  pin37: ["PB15"],
  pin38: ["PC6"],
  pin39: ["PC7"],
  pin40: ["PC8"],
  pin41: ["PC9"],
  pin42: ["PA8"],
  pin43: ["PA9"],
  pin44: ["PA10"],
  pin45: ["PA11"],
  pin46: ["PA12"],
  pin47: ["VSS3"],
  pin48: ["VDD3"],
  pin49: ["PA13"],
  pin50: ["PA14"],
  pin51: ["PA15"],
  pin52: ["PC10"],
  pin53: ["PC11"],
  pin54: ["PC12"],
  pin55: ["PD2"],
  pin56: ["PB3"],
  pin57: ["PB4"],
  pin58: ["PB5"],
  pin59: ["PB6"],
  pin60: ["PB7"],
  pin61: ["PB8_BOOT0"],
  pin62: ["PB9"],
  pin63: ["VSS4"],
  pin64: ["VDD4"]
} as const

const pinAttributes = {
  pin15: {requiresGround: true},
  pin16: {requiresPower: true},
  pin29: {requiresPower: true},
  pin31: {requiresGround: true},
  pin32: {requiresPower: true},
  pin47: {requiresGround: true},
  pin48: {requiresPower: true},
  pin63: {requiresGround: true},
  pin64: {requiresPower: true}
} as const

export const STM32G431RBT6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C431633"
  ]
}}
      manufacturerPartNumber="STM32G431RBT6"
      footprint="tqfp64"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C431633.obj?uuid=7e9b9111dcfd48d3add0eab11d882721",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C431633.step?uuid=7e9b9111dcfd48d3add0eab11d882721",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.011810999999994465, z: 0.000795 },
      }}
      {...props}
    />
  )
}
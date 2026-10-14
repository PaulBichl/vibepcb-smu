import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const SMBJ36CA = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C114002"
  ]
}}
      manufacturerPartNumber="SMBJ36CA"
      footprint="smdpads2_p4.7818mm_pw2.0475mm_ph2.4mm_cyw7.3293mm_cyh4.1mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C114002.obj?uuid=dfcbf83754944015b911a9e368f2919e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C114002.step?uuid=dfcbf83754944015b911a9e368f2919e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.1 },
      }}
      {...props}
    />
  )
}
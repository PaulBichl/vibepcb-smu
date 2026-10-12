# CLAUDE.md

Project repo for a 1-channel 4-quadrant SMU / lab supply (+-30 V, +-1 A): two boards,
`boards/smu-main` (power, analog, MCU, Ethernet; 4 layers) and `boards/smu-front` (displays,
LEDs, buttons; 2 layers). The VibePCB tooling (pipeline, `fixes.py`, `check`, `fab`, tscircuit
skill) is the sibling checkout `../VibePCB`: read its `CLAUDE.md` and `docs/TOOLING.md` first.
Commands run from here (`hatch run pcb all smu-main`); fix generic tool problems in
`../VibePCB`, not here. Design rationale and numbers: `README.md`.

## Loop simulations

`boards/smu-main/sim/` (ngspice, behavioural models in `models.inc`):
`./run_cases.sh` (steady state, all four quadrants) and `./verify.sh` (transients: capacitive
loads, load steps into the current limit, CC->CV recovery; PASS/FAIL). Re-run both after
changing anything in the summing node, current-limit integrators or the shunt/INA path.

## Board-specific lessons

- JLCPCB keyword search via `tsci search` is broken: look parts up with JLCPCB's own API
  (`selectSmtComponentList`) and import them by LCSC number (`tsci import C138712 --jlcpcb`,
  run from the board folder; it writes into `imports/imports/`).
- Imported parts with generic pin names (OPA2192, HFD4/5, HR911105A, BZX84) were relabelled
  from the datasheets in `imports/*.tsx`; keep those labels when re-importing.
- LED polarity differs between LCSC parts (KT-0603G: pin 1 = cathode, KT-0603R: anode):
  use the imported LED components, not `<led>` with a supplier number (tscircuit flags it).
- DAC8563 logic needs VIH = 0.7 * AVDD: it runs on 3.3 V analog (gain 1, 0..2.5 V), so the
  summing network is scaled for 2.5 V full scale (Rin = 2x 10k).
- Placement: `pcbPack` groups ignore the board edge and keepouts; everything is placed
  explicitly. Iterate placement with `tsci build --routing-disabled --disable-parts-engine`.

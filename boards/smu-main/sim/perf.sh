#!/bin/bash
# Performance estimates with TI's vendor models (./fetch_models.sh first). Runs the cases in
# parallel and prints one line per result. Usage: ./perf.sh   (needs ngspice >= 40)
cd "$(dirname "$0")"; export LC_ALL=C
[ -f vendor/OPA548.LIB ] || ./fetch_models.sh
work=$(mktemp -d); trap 'rm -rf "$work"' EXIT
here=$(pwd)
deck() {  # name, params, extra netlist, analysis + measurements (control block body)
  cat > "$work/$1.cir" <<DECK
* $1
.include $here/loop_ti.cir
.param $2
$3
.options reltol=1e-3 method=gear
.control
$4
.endc
.end
DECK
}
acdeck() {
  cat > "$work/$1.cir" <<DECK
* $1
.include $here/cv_ac_ti.cir
.param $2
.control
$3
.endc
.end
DECK
}
SW='SW1 x lo ctl 0 swm
.model swm sw(vt=0.5 ron=1m roff=1e9)'
VO='let vo = v(splus)-v(sminus)
let io = -v(vi)/0.993'
# ---- DC, uncalibrated (nominal parts; offsets/bias from the vendor models)
dc() { deck "$1" "$2" "$3" "tran 2u 10m uic
$VO
meas tran v avg vo from=9m to=10m
meas tran i avg io from=9m to=10m
meas tran ripple pp vo from=9m to=10m"; }
dc dc1_cv_p10v_20r "vset=0.8333 iset=2 rl=20 vpr=14 vnr=-5" ""
dc dc2_cc_p1a_10r "vset=0.4167 iset=2 rl=10 vpr=24 vnr=-5" ""
dc dc3_cc_m1a_10r "vset=2.0833 iset=2 rl=10 vpr=4.5 vnr=-24" ""
dc dc4_cv_p30v_open "vset=0 iset=0.5 rl=1e9 vpr=34 vnr=-5" ""
dc dc5_sink_p12v "vset=1.0417 iset=1 rl=1e9 vpr=16 vnr=-5" "Vext hi xs 12
Rext xs lo 1"
dc dc6_sink_m12v "vset=1.4583 iset=1 rl=1e9 vpr=4.5 vnr=-16" "Vext hi xs -12
Rext xs lo 1"
# without R118 (isolation resistor): the OPA548 oscillates into the 1 uF output capacitor
dc dc0_without_r118 "vset=0.8333 iset=2 rl=20 vpr=14 vnr=-5 riso=1m" ""
# ---- CV step 0 -> +10 V into 20R with extra load capacitance
for c in 0 10u 100u; do
deck "st_cv_step_cl$c" "vset=1.25 vset2=0.8333 tstep=1m iset=2.4 rl=20 vpr=14 vnr=-5" "CL2 hi lo ${c/#0/1p}" "tran 1u 12m uic
$VO
meas tran peak max vo from=1m to=12m
meas tran t10 when vo=1 rise=1 from=1m
meas tran t90 when vo=9 rise=1 from=1m
meas tran final avg vo from=11m to=12m
meas tran t_in_10mv when vo=10.084 rise=1 from=1m"
done
# ---- large step -10 V -> +10 V (slew rate)
deck st_slew "vset=1.6667 vset2=0.8333 tstep=1m iset=2.4 rl=1e9 vpr=14 vnr=-14" "" "tran 0.5u 4m uic
$VO
meas tran t1 when vo=-8 rise=1 from=1m
meas tran t2 when vo=8 rise=1 from=1m"
# ---- load steps at Ilim 1 A: 20R -> short, and short removed (CC -> CV)
deck ld_short "vset=0.8333 iset=2 rl=20 vpr=14 vnr=-5" "RL2 hi x 0.01
Vctl ctl 0 PWL(0 0 3m 0 3.001m 1)
$SW" "tran 1u 30m uic
$VO
meas tran ipeak max io from=3m to=30m
meas tran ifinal avg io from=28m to=30m
meas tran t_in_1pct when io=1.017 fall=last from=3m"
deck ld_unshort "vset=0.8333 iset=2 rl=20 vpr=14 vnr=-5" "RL2 hi x 0.01
Vctl ctl 0 PWL(0 1 15m 1 15.001m 0)
$SW" "tran 1u 30m uic
$VO
meas tran vpeak max vo from=15m to=30m
meas tran tsettle when vo=10.1 fall=last from=15m
meas tran vfinal avg vo from=28m to=30m"
# ---- CV load transient 0.5 A -> 1 A (20R -> 10R) at +10 V, limit 1.2 A
deck ld_cv_half_to_full "vset=0.8333 iset=2.4 rl=20 vpr=14 vnr=-5" "RL2 hi x 20
Vctl ctl 0 PWL(0 0 6m 0 6.001m 1)
$SW" "tran 0.5u 12m uic
$VO
meas tran vmin min vo from=6m to=12m
meas tran trec when vo=9.99 rise=last from=6m
meas tran before avg vo from=5m to=6m
meas tran after avg vo from=11m to=12m"
# ---- AC: loop gain / phase margin, setpoint bandwidth, output impedance
for c in 1u 10u 100u; do
acdeck "ac_loop_cl$c" "cl=$c inj=1" "ac dec 50 10 2Meg
let t = -v(ao)/v(out)
let tdb = vdb(t)
let tph = 180/pi*cph(t)
meas ac fc when tdb=0 fall=1
meas ac phase_at_fc find tph at=fc
let pm_deg = 180 + phase_at_fc
print pm_deg"
done
acdeck ac_bw "cl=1u" "ac dec 50 10 2Meg
let g = (v(splus)-v(sminus))/24
meas ac g0 find vdb(g) at=10
let g3 = g0 - 3
meas ac f3db when vdb(g)=g3"
acdeck ac_zout "cl=1u iac=1" "ac dec 50 10 1Meg
let z = v(splus)-v(sminus)
let zm = mag(z)
meas ac z100 find zm at=100
meas ac z1k find zm at=1k
meas ac z10k find zm at=10k
meas ac zmax max zm"
for nc in "0V:d=0.5 vpr=4.5 vnr=-5" "30V:d=0 vpr=34 vnr=-5"; do  # Vout 0 V and +30 V
acdeck "noise_${nc%%:*}" "${nc#*:} rl=1e9" "noise v(splus,sminus) VS dec 20 10 100k
setplot noise1
let nd_10hz = onoise_spectrum[0]
let nd_1khz = onoise_spectrum[40]
let nd_10khz = onoise_spectrum[60]
print nd_10hz nd_1khz nd_10khz
setplot noise2
print onoise_total"
done
ls "$work"/*.cir | xargs -P "$(nproc)" -I{} sh -c 'ngspice -b "{}" > "{}.log" 2>&1'
for f in "$work"/*.cir; do
  n=$(basename "$f" .cir)
  r=$(grep -E '^[a-z0-9_]+ +=' "$f.log" | grep -vE '^(let|setplot)' | awk '{printf "%s=%s ", $1, $3}')
  extra=$(grep -E '^(pm_deg|onoise_total|nd_[0-9a-z]+) = ' "$f.log" | sort -u | awk '{printf "%s=%s ", $1, $3}')
  printf '%-24s %s%s\n' "$n" "$r" "$extra"
done

#!/bin/bash
# Transient verification of loop.cir (run after run_cases.sh). Each test prints its
# measurements and PASS/FAIL. Hardware limit ihw = 1.1*Ilim + 0.03 A as firmware sets it.
cd "$(dirname "$0")"; export LC_ALL=C
fails=0
t() {  # name, criteria (awk expr on m1..m3), deck body
  printf '* v\n.include %s/loop.cir\n%s\n.end\n' "$(pwd)" "$3" > /tmp/smu_v.cir
  res=$(ngspice -b /tmp/smu_v.cir 2>&1 | grep -E '^m[123] ' | awk '{printf "%s=%s ",$1,$3}')
  ok=$(awk -v r="$res" "BEGIN{n=split(r,a,\" \"); for(i=1;i<=n;i++){split(a[i],kv,\"=\"); v[kv[1]]=kv[2]+0}; m1=v[\"m1\"];m2=v[\"m2\"];m3=v[\"m3\"]; print ($2)?\"PASS\":\"FAIL\"}")
  [ "$ok" = PASS ] || fails=$((fails+1))
  printf '%-4s %-58s %s\n' "$ok" "$1" "$res"
}
SW='SW1 x lo ctl 0 swm
Vctl ctl 0 PWL(0 0 2m 0 2.001m 1)
.model swm sw(vt=0.5 ron=1m roff=1e9)'
for cl in 10u 100u; do
t "CV step 0->+10 V into 20R||$cl: overshoot <2%, settled" "m1<10.2 && m2<0.02" "
.param vset=1.25 vset2=0.8333 tstep=1m iset=4 rl=20 ihw=1.13
CL2 hi lo $cl
.tran 1u 8m
.meas tran m1 max par('v(splus)-v(sminus)') from=1m to=8m
.meas tran m2 pp par('v(splus)-v(sminus)') from=7m to=8m"
done
for r in 1 0.01; do
t "load step 20R->${r}R, Ilim 1 A: peak <1.2 A, settles to 1 A" "m1<1.2 && m2>0.98 && m2<1.02 && m3<0.02" "
.param vset=0.8333 iset=2 rl=1e9 ihw=1.13
RL1 hi lo 20
RL2 hi x $r
$SW
.tran 1u 60m
.meas tran m1 max par('-v(vi)') from=2m to=60m
.meas tran m2 avg par('-v(vi)') from=55m to=60m
.meas tran m3 pp par('-v(vi)') from=55m to=60m"
done
t "30R at Vset 30 V, Ilim 0.5 A (15 V): settles, no ringing" "m2>0.49 && m2<0.51 && m3<0.01" "
.param vset=0 iset=1 rl=1e9 ihw=0.58
RL1 hi lo 100
RL2 hi x 30
$SW
.tran 1u 60m
.meas tran m1 max par('-v(vi)') from=2m to=60m
.meas tran m2 avg par('-v(vi)') from=55m to=60m
.meas tran m3 pp par('-v(vi)') from=55m to=60m"
t "negative: short at -10 V, Ilim 1 A" "m1>-1.2 && m2<-0.98 && m2>-1.02 && m3<0.02" "
.param vset=1.6667 iset=2 rl=1e9 ihw=1.13
RL1 hi lo 20
RL2 hi x 0.01
$SW
.tran 1u 60m
.meas tran m1 min par('-v(vi)') from=2m to=60m
.meas tran m2 avg par('-v(vi)') from=55m to=60m
.meas tran m3 pp par('-v(vi)') from=55m to=60m"
t "CC->CV: short removed at +10 V: V overshoot <5%" "m1<10.5 && m2>9.9" "
.param vset=0.8333 iset=2 rl=1e9 ihw=1.13
RL1 hi lo 20
RL2 hi x 0.01
SW1 x lo ctl 0 swm
Vctl ctl 0 PWL(0 1 30m 1 30.001m 0)
.model swm sw(vt=0.5 ron=1m roff=1e9)
.tran 1u 50m
.meas tran m1 max par('v(splus)-v(sminus)') from=30m to=50m
.meas tran m2 avg par('v(splus)-v(sminus)') from=48m to=50m"
echo "failures: $fails"; exit $fails

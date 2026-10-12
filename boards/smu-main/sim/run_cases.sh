#!/bin/bash
# Runs loop.cir in the four quadrants (20 ms transient each) and prints the settled
# output voltage (S+ - S-) and current. Usage: ./run_cases.sh   (needs ngspice)
cd "$(dirname "$0")"
export LC_ALL=C
# name | vset (V, 0..2.5 -> +30..-30 V) | iset (V, /2 -> A) | load (ohm) | extra netlist line
cases=(
 "CV +10V into 20R, limit 1A (expect +10 V, +0.5 A)|0.8333|2|20|"
 "CC +20V into 10R, limit 1A (expect +10 V, +1.0 A)|0.4167|2|10|"
 "CC -20V into 10R, limit 1A (expect -10 V, -1.0 A)|2.0833|2|10|"
 "CV +30V open, limit 0.25A (expect +30 V, 0 A)|0|0.5|1e9|"
 "Sink: 12V source/1R, set +5V lim 0.5A (expect +11.5 V, -0.5 A)|1.0417|1|1e9|Vext hi xs 12;Rext xs lo 1"
 "Sink: -12V source/1R, set -5V lim 0.5A (expect -11.5 V, +0.5 A)|1.4583|1|1e9|Vext hi xs -12;Rext xs lo 1"
)
for c in "${cases[@]}"; do
  IFS='|' read -r name vset iset rl extra <<< "$c"
  cat > /tmp/smu_case.cir <<DECK
* case
.include loop.cir
.param vset=$vset iset=$iset rl=$rl
$(tr ';' '\n' <<< "$extra")
.tran 2u 20m
.meas tran vo avg par('v(splus)-v(sminus)') from=18m to=20m
.meas tran io avg par('-v(vi)') from=18m to=20m
.end
DECK
  sed -i "s|^.include loop.cir|.include $(pwd)/loop.cir|" /tmp/smu_case.cir
  sed -i "s|^.include models.inc|.include $(pwd)/models.inc|" loop.cir
  out=$(ngspice -b /tmp/smu_case.cir 2>&1)
  vo=$(grep -E '^vo ' <<< "$out" | awk '{print $3}'); io=$(grep -E '^io ' <<< "$out" | awk '{print $3}')
  printf '%-62s Vout=%9.4f V  I=%8.4f A\n' "$name" "$vo" "$io"
done

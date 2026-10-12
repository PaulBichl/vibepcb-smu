* Behavioural models for the SMU control loop (no vendor models needed).
* opamp: single-pole op amp, Aol / GBW, output clamped to rails - margin
.subckt opamp inp inn out vp vn params: aol=1e6 gbw=10e6 margin=0.1 rout=10
Bin 0 x I=(V(inp)-V(inn))*{aol}/1k
Rx x 0 1k
Cx x 0 {1/(6.2832*1k*{gbw}/{aol})}
* internal node saturates near the rails (no unbounded windup)
Bsat x 0 I=0.1*(max(V(x)-V(vp)+{margin}-0.3,0)+min(V(x)-V(vn)-{margin}+0.3,0))
Bo o2 0 V=min(max(V(x), V(vn)+{margin}), V(vp)-{margin})
Ro o2 out {rout}
.ends
* OPA548: 1 MHz GBW, 90 dB, swing ~3 V from the rails at 1 A, internal current
* limit set by RCL (1.5 A here: RCL = 33k)
.subckt opa548 inp inn out vp vn params: ilim=1.5
X1 inp inn o2 vp vn opamp aol=31623 gbw=1e6 margin=3 rout=1
Bi 0 out I={ilim}*tanh((V(o2)-V(out))/(0.05*{ilim}))
.ends
* OPA2192 half: 10 MHz, 120 dB, rail-to-rail out
.subckt opa2192 inp inn out vp vn
X1 inp inn out vp vn opamp aol=1e6 gbw=10e6 margin=0.1 rout=20
.ends
.model D1N4148 D(Is=2.5n N=1.75 Rs=0.6 Cjo=4p)

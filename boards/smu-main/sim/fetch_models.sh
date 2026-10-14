#!/bin/bash
# Downloads TI's vendor SPICE models into sim/vendor/ (not committed: TI's model licence).
# OPA548 = SBOM088C, INA828 = SBOMAG5, OPAx192 = SBOM862 (PSpice versions).
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p vendor
for z in sbom088c sbomag5 sbom862; do
  tmp=$(mktemp -d)
  curl -sSL -m 60 -A "Mozilla/5.0" -o "$tmp/m.zip" "https://www.ti.com/lit/zip/$z"
  unzip -o -q "$tmp/m.zip" -d "$tmp/x"
  find "$tmp/x" -iname '*.lib' -exec cp {} vendor/ \;
  rm -rf "$tmp"
done
ls vendor

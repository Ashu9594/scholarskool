#!/usr/bin/env bash
set -euxo pipefail
cd "$(dirname "$0")"
rm -rf .git
git init -b main
git add -A
git commit -m "Initial static ScholarSkool site (GitHub Pages docs/)"
git remote add origin https://github.com/Ashu9594/scholarskool-clone.git
git push -u origin main --force

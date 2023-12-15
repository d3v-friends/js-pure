#!/bin/bash

set -e

rm -rf cjs
rm -rf esm
tsc -p tsconfig.cjs.json
tsc -p tsconfig.esm.json
find ./cjs -type f -name '*.js' -exec rename 's/\.js/\.cjs/' '{}' \;
find ./esm -type f -name '*.js' -exec rename 's/\.js/\.mjs/' '{}' \;

git add cjs --all
git add esm --all

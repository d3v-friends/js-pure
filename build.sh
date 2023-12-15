#!/bin/bash

set -e

rm -rf cjs
rm -rf mjs
tsc -p tsconfig.cjs.json
tsc -p tsconfig.mjs.json
find ./cjs -type f -name '*.js' -exec rename 's/\.js/\.cjs/' '{}' \;
find ./mjs -type f -name '*.js' -exec rename 's/\.js/\.mjs/' '{}' \;
git add cjs --all
git add mjs --all

#!/bin/bash

set -e

rm -rf cjs
echo ">> tsc cjs"
tsc -p tsconfig.json
echo ">> tsc-alias cjs"
tsc-alias -p tsconfig.json
find ./cjs -type f -name '*.js' -exec rename 's/\.js/\.cjs/' '{}' \;
git add cjs --all

rm -rf mjs
echo ">> tsc mjs"
tsc -p tsconfig.mjs.json
echo ">> tsc-alias mjs"
tsc-alias -p tsconfig.mjs.json
find ./mjs -type f -name '*.js' -exec rename 's/\.js/\.mjs/' '{}' \;
git add mjs --all

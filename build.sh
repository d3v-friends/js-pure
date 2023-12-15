#!/bin/bash

set -e

rm -rf cjs
tsc -p tsconfig.json
find ./cjs -type f -name '*.js' -exec rename 's/\.js/\.cjs/' '{}' \;
git add cjs --all

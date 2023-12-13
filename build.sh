rm -rf cjs
rm -rf esm
tsc -p ./config/cjs.json
tsc -p ./config/esm.json
git add . --all

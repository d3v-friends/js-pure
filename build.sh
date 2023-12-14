rm -rf modules
tsc -p ./config/cjs.json
tsc -p ./config/esm.json
git add . --all

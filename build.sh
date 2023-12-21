# pnpm add -D esbuild
# pnpm add -D dts-bundle-generator
rm -rf ./dist
node ./config/esbuild.cjs
dts-bundle-generator --config ./config/dts.cjs
git add ./dist --all

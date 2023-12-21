export const dts = `
/** @type import('dts-bundle-generator/config-schema').OutputOptions */
const output = {
    inlineDeclareGlobals: false,
    sortNodes: true,
};

/** @type import('dts-bundle-generator/config-schema').BundlerConfig */
module.exports = {
    compilationOptions: {
        preferredConfigPath: "../tsconfig.json",
    },
    entries: [
        {
            filePath: "../src/index.ts",
            outFile: "../dist/index.d.ts",
            noCheck: false,
            output,
        },
    ],
};
`;

export const esbuild = `
const { build } = require("esbuild");

const sharedConfig = {
    tsconfig: "tsconfig.json",
    entryPoints: ["./src/index.ts"],
    bundle: true,
    minify: true,
};

Promise.resolve()
    .then(() =>
        build({
            ...sharedConfig,
            platform: "node",
            format: "esm",
            outfile: "dist/index.mjs",
        }),
    )
    .then(() =>
        build({
            ...sharedConfig,
            platform: "node",
            format: "cjs",
            outfile: "dist/index.cjs",
        }),
    )
    .catch(reason => console.log(reason));
`;

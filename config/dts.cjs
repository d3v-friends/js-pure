/** @type import('dts-bundle-generator/config-schema').BundlerConfig */
module.exports = {
    compilationOptions: {
        preferredConfigPath: "../src/tsconfig.json",
    },
    entries: [
        {
            filePath: "../src/index.ts",
            outFile: "../dist/index.d.ts",
            noCheck: false,
            output: {
                inlineDeclareGlobals: false,
                sortNodes: true,
            },
        },
    ],
};

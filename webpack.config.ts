import path from "path";
import Terser from "terser-webpack-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
    mode: "production",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                            configFile: path.resolve(__dirname, "tsconfig.json"),
                        },
                    },
                ],
            },
            {
                test: /js-pure\/src\/index.ts/g,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: path.resolve(__dirname, "tsconfig.dts.json"),
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        extensionAlias: {
            ".js": [".ts", ".js"],
        },
    },
    target: "node",
    plugins: [],
    optimization: {
        minimize: true,
        minimizer: [
            new Terser({
                terserOptions: {
                    parse: {
                        ecma: 2020,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 2020,
                        comments: false,
                        ascii_only: true,
                    },
                },
                parallel: true,
            }),
        ],
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
};

export default config;

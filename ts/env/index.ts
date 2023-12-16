import JsError from "@src/jsError";
import fs from "fs";
import path from "path";
import readline from "readline";
import fnParam from "../param";

function string(key: string, ...defaultValue: string[]): string {
    const value = process.env[key] || fnParam.string(defaultValue);
    if (value == "") {
        console.log(`not found env: key=${key}`);
        process.exit(1);
    }
    return value;
}

function boolean(key: string, ...defaults: boolean[]): boolean {
    const value = process.env[key] || "";
    if (value === "") {
        if (defaults.length === 0) {
            console.log(`not found env: key=${key}`);
            process.exit(1);
        } else {
            return defaults[0];
        }
    }

    return value === "true";
}

async function readFile(...str: string[]): Promise<void> {
    const fp = path.resolve(...str);
    if (!fs.existsSync(fp)) {
        throw new JsError(`not found env file: path=${fp}`);
    }

    const rl = readline.createInterface({
        input: fs.createReadStream(fp),
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        const env = line.replace(/ /g, "");
        const ls = env.split("=");
        if (ls.length != 2) continue;
        process.env[ls[0]] = ls[1];
        console.log(`env: ${ls[0]}=${ls[1]}`);
    }
}

const fnEnv = {
    string,
    boolean,
    readFile,
};

export default fnEnv;

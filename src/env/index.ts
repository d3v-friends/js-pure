import fs from "fs";
import path from "path";
import readline from "readline";
import { JsError } from "../err";
import { fnParam } from "../param";

export namespace fnEnv {
    export function string(key: string, ...defaultValue: string[]): string {
        const value = process.env[key] || fnParam.string(defaultValue);
        if (value == "") {
            console.log(`not found env: key=${key}`);
            process.exit(1);
        }
        return value;
    }

    export async function read(...str: string[]): Promise<void> {
        const fp = path.resolve(...str);
        if (!fs.existsSync(fp)) {
            throw new JsError("not found env file", { fp }, { ko: `환경변수 파일을 찾지 못하였습니다.` });
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

    export function boolean(key: string, ...defaults: boolean[]): boolean {
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

    export function array(key: string, ...defaults: string[][]): string[] {
        let str = process.env[key] || "";
        if (!str) {
            if (defaults.length === 0) return [];
            return defaults[0];
        }
        for (let i = 0; i < str.lastIndexOf(" "); i++) {
            str = str.replace(" ", "");
        }
        if (!str.startsWith("[")) return [];
        if (!str.endsWith("]")) return [];
        str = str.slice(1, str.length - 1);
        return str.split(",");
    }
}

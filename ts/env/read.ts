import { JsError } from "@src/jsError";
import fs from "fs";
import path from "path";
import readline from "readline";

export default async function (...str: string[]): Promise<void> {
    const fp = path.resolve(...str);
    if (!fs.existsSync(fp)) {
        throw new JsError(`not found env file: path=${fp}`, {
            ko: `환경변수 파일을 찾지 못하였습니다. path=${fp}`,
        });
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

import { fnParam } from "@src/param";

export default function (key: string, ...defaultValue: string[]): string {
    const value = process.env[key] || fnParam.string(defaultValue);
    if (value == "") {
        console.log(`not found env: key=${key}`);
        process.exit(1);
    }
    return value;
}

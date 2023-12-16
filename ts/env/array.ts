import * as process from "process";

export default function (key: string): string[] {
    let str = process.env[key] || "";
    for (let i = 0; i < str.lastIndexOf(" "); i++) {
        str = str.replace(" ", "");
    }

    if (!str) return [];
    if (!str.startsWith("[")) return [];
    if (!str.endsWith("]")) return [];
    str = str.slice(1, str.length - 1);
    return str.split(",");
}

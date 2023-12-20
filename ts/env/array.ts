export default function (key: string, ...defaults: string[][]): string[] {
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

export default function (str: string): string[] {
    return str
        .replace(/ /g, "")
        .split(",")
        .filter(v => v !== "")
        .map(v => v.trim());
}

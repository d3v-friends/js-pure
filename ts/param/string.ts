export default function (v: string[], ...defaults: string[]): string {
    if (v.length === 0) {
        if (defaults.length === 0) return "";
        return defaults[0];
    }
    return v[0];
}

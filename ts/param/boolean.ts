export default function (v: boolean[], ...defaults: boolean[]): boolean {
    if (v.length === 0) {
        if (defaults.length === 0) return false;
        return defaults[0];
    }
    return v[0];
}

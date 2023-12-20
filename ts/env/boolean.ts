export default function (key: string, ...defaults: boolean[]): boolean {
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

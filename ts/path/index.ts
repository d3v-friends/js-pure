import fnEnv from "../env";

function fitOS(fp: string): string {
    const slash = getSlash();
    return fp.replace(slash.from, slash.to);
}

function getSlash() {
    const os = fnEnv.string("OS", "linux");
    const slash = {
        from: /\\/g,
        to: "/",
    };

    if (os === "Windows_NT") {
        slash.from = /\//g;
        slash.to = "\\";
    }

    return slash;
}

export default {
    fitOS,
};

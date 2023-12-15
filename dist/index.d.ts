import Error from "./fnError";
export declare namespace jsPure {
    const fnEnv: {
        string: (key: string, ...defaultValue: string[]) => string;
        boolean: (key: string, ...defaults: boolean[]) => boolean;
        readFile: (...str: string[]) => Promise<void>;
    };
    const fnParam: {
        string: (v: string[]) => string;
        boolean: (v: boolean[]) => boolean;
        strComma: (keys: string[], suffix: string) => string;
        commaToArray: (str: String) => string[];
        arrayToComma: (ls: string[]) => string;
    };
    const fnPath: {
        fitOS: (fp: string) => string;
    };
    class JsError extends Error {
    }
}

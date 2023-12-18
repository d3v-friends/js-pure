export type Nullable<T> = T | null | undefined;
declare const _default: {
    fnEnv: {
        boolean: typeof import("./env/boolean").default;
        array: typeof import("./env/array").default;
        read: typeof import("./env/read").default;
        string: typeof import("./env/string").default;
    };
    fnPath: {
        fitOS: (fp: string) => string;
    };
    fnErr: {
        Error: typeof import("./err/jsError").default;
        msg: typeof import("./err/message").default;
    };
    fnParam: {
        string: (v: string[]) => string;
        boolean: (v: boolean[]) => boolean;
        strComma: (keys: string[], suffix: string) => string;
        commaToArray: (str: String) => string[];
        arrayToComma: (ls: string[]) => string;
    };
};
export default _default;

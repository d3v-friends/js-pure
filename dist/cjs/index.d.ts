export type Nullable<T> = T | null | undefined;
declare const _default: {
    fnEnv: {
        boolean: typeof import("dist/cjs/env/boolean").default;
        array: typeof import("dist/cjs/env/array").default;
        read: typeof import("dist/cjs/env/read").default;
        string: typeof import("dist/cjs/env/string").default;
    };
    fnPath: {
        fitOS: (fp: string) => string;
    };
    fnErr: {
        Error: typeof import("dist/cjs/err/jsError").default;
        msg: typeof import("dist/cjs/err/message").default;
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

declare namespace jsPure {
    export type fnEnv = {
        string: (key: string, ...defaults: string[]) => string;
        boolean: (key: string, ...defaults: boolean[]) => boolean;
        array: (key: string, ...defaults: string[][]) => string[];
    };
    export type fnCsv = {
        to: (ls: string[]) => string;
        from: (str: string) => string[];
    };
    export type fnParam = {
        string: (ls: string[], ...defaults: string[]) => string;
        boolean: (ls: boolean[], ...defaults: boolean[]) => boolean;
    };

    export class JsError extends Error {}
}

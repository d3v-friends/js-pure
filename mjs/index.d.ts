declare namespace jsPure {
    export const env: {
        string: (key: string, ...defaultValue: string[]) => string;
        boolean: (key: string, ...defaults: boolean[]) => boolean;
        readFile: (...str: string[]) => Promise<void>;
    };
    export const param: {
        string: (v: string[]) => string;
        boolean: (v: boolean[]) => boolean;
        strComma: (keys: string[], suffix: string) => string;
        commaToArray: (str: String) => string[];
        arrayToComma: (ls: string[]) => string;
    };
    export const path: {
        fitOS: (fp: string) => string;
    };
    type ErrLang = "en" | "ko" | string;
    type ErrMsg = Partial<Record<ErrLang, string>>;
    export class JsError extends Error {
        readonly msg: ErrMsg;
        constructor(message: string, ...msgs: ErrMsg[]);
        getMsg(lang: ErrLang): string;
    }
    export {};
}
export default jsPure;

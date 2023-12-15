declare namespace jsPure {
    export const fnEnv: {
        string: (key: string, ...defaultValue: string[]) => string;
        boolean: (key: string, ...defaults: boolean[]) => boolean;
        readFile: (...str: string[]) => Promise<void>;
    };
    export const fnParam: {
        string: (v: string[]) => string;
        boolean: (v: boolean[]) => boolean;
        strComma: (keys: string[], suffix: string) => string;
        commaToArray: (str: String) => string[];
        arrayToComma: (ls: string[]) => string;
    };
    export const fnPath: {
        fitOS: (fp: string) => string;
    };
    type Language = "en" | "ko" | string;
    type ErrMsg = Partial<Record<Language, string>>;
    export class JsError extends Error {
        readonly msg: ErrMsg;
        constructor(message: string, ...msgs: ErrMsg[]);
        getMsg(lang: Language): string;
    }
    export {};
}
export default jsPure;
//# sourceMappingURL=index.d.ts.map
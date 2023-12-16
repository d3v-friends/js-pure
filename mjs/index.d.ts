import JsErrorClass from "./jsError";
export declare const fnEnv: {
    string: (key: string, ...defaultValue: string[]) => string;
    boolean: (key: string, ...defaults: boolean[]) => boolean;
    readFile: (...str: string[]) => Promise<void>;
};
export declare const fnParam: {
    string: (v: string[]) => string;
    boolean: (v: boolean[]) => boolean;
    strComma: (keys: string[], suffix: string) => string;
    commaToArray: (str: String) => string[];
    arrayToComma: (ls: string[]) => string;
};
export declare const fnPath: {
    fitOS: (fp: string) => string;
};
export declare class JsError extends JsErrorClass {
}

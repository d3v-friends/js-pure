import { JsError } from "./fnError";
declare const jsPure: {
    fnEnv: {
        string: (key: string, ...defaultValue: string[]) => string;
        boolean: (key: string, ...defaults: boolean[]) => boolean;
        readFile: (...str: string[]) => Promise<void>;
    };
    JsError: typeof JsError;
    fnParam: {
        string: (v: string[]) => string;
        boolean: (v: boolean[]) => boolean;
        strComma: (keys: string[], suffix: string) => string;
        commaToArray: (str: String) => string[];
        arrayToComma: (ls: string[]) => string;
    };
    fnPath: {
        fitOS: (fp: string) => string;
    };
};
export default jsPure;

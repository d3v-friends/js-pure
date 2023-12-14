declare const fnParam: {
    string: (v: string[]) => string;
    boolean: (v: boolean[]) => boolean;
    strComma: (keys: string[], suffix: string) => string;
    commaToArray: (str: String) => string[];
    arrayToComma: (ls: string[]) => string;
};
export default fnParam;

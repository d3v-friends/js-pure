declare function string(key: string, ...defaultValue: string[]): string;
declare function boolean(key: string, ...defaults: boolean[]): boolean;
declare function readFile(...str: string[]): Promise<void>;
declare const fnEnv: {
    string: typeof string;
    boolean: typeof boolean;
    readFile: typeof readFile;
};
export default fnEnv;
//# sourceMappingURL=index.d.ts.map
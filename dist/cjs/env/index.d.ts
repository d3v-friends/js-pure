export declare const fnEnv: {
    string: (key: string, ...defaultValue: string[]) => string;
    read: (...str: string[]) => Promise<void>;
    boolean: (key: string, ...defaults: boolean[]) => boolean;
    array: (key: string, ...defaults: string[][]) => string[];
};

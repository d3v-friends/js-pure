export declare module "jsPure" {
    export interface fnEnv {
        boolean: (key: string, ...defaults: boolean[]) => boolean;
        array: (key: string, ...defaults: string[]) => string[];
        read: (...str: string[]) => Promise<void>;
        string: (key: string, ...defaultValue: string[]) => string;
    }
}

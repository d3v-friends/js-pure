type ErrLang = "en" | "ko" | string;
type ErrMsg = Partial<Record<ErrLang, string>>;
export declare class JsError extends Error {
    readonly msg: ErrMsg;
    constructor(message: string, args?: object, msg?: ErrMsg);
    getMsg(lang: ErrLang): string;
}
export {};

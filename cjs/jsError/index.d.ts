type ErrLang = "en" | "ko" | string;
type ErrMsg = Partial<Record<ErrLang, string>>;
declare class JsError extends Error {
    readonly msg: ErrMsg;
    constructor(message: string, ...msgs: ErrMsg[]);
    getMsg(lang: ErrLang): string;
}
export default JsError;

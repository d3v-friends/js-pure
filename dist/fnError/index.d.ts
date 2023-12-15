type Language = "en" | "ko" | string;
type Value = Partial<Record<Language, string>>;
declare class JsError extends Error {
    readonly msg: Value;
    constructor(message: string, ...msgs: Value[]);
    getMsg(lang: Language): string;
}
export default JsError;

type ErrLang = "en" | "ko" | string;
type ErrMsg = Partial<Record<ErrLang, string>>;
export default class extends Error {
    readonly msg: ErrMsg;
    constructor(message: string, ...msgs: ErrMsg[]);
    getMsg(lang: ErrLang): string;
}
export {};

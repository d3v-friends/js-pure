type ErrLang = "en" | "ko" | string;
type ErrMsg = Partial<Record<ErrLang, string>>;

export class JsError extends Error {
    public readonly msg: ErrMsg;

    constructor(message: string, args?: object, msg?: ErrMsg) {
        message = `${message}: ${JSON.stringify(args || {})}`;
        super(message);

        if (!msg) {
            this.msg = {
                en: message,
            };
            return;
        }

        this.msg = {
            en: message,
            ...msg,
        };
    }

    public getMsg(lang: ErrLang): string {
        if (this.msg.hasOwnProperty(lang)) return (this.msg as any)[lang];
        if (this.msg.hasOwnProperty("en")) return (this.msg as any)["en"];
        return "not found error msg";
    }
}

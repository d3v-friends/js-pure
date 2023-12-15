type Language = "en" | "ko" | string;
type Value = Partial<Record<Language, string>>;

class JsError extends Error {
    public readonly msg: Value;

    constructor(message: string, ...msgs: Value[]) {
        super(message);
        if (msgs.length == 0) {
            this.msg = {
                en: message,
            };
        }

        this.msg = msgs[0];
        if (!this.msg.en) this.msg.en = message;
    }

    public getMsg(lang: Language): string {
        if (this.msg.hasOwnProperty(lang)) return (this.msg as any)[lang];
        if (this.msg.hasOwnProperty("en")) return (this.msg as any)["en"];
        return "not found error msg";
    }
}

export default JsError;

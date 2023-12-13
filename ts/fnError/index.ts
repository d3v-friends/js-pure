type Language = "en" | "ko";
type Value = Partial<Record<Language, string>>;

export default class JsError extends Error {
    constructor(
        public readonly message: string,
        public readonly msg: Value,
    ) {
        super(message);
        msg.en = message;
    }

    public getMsg(lang: Language): string {
        if (this.msg.hasOwnProperty(lang)) return (this.msg as any)[lang];
        if (this.msg.hasOwnProperty("en")) return (this.msg as any)["en"];
        return "not found error msg";
    }
}

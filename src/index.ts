import env from "./fnEnv";
import param from "./fnParam";
import path from "./fnPath";

export namespace jsPure {
    export const fnEnv = env;
    export const fnParam = param;
    export const fnPath = path;

    type Language = "en" | "ko" | string;
    type ErrMsg = Partial<Record<Language, string>>;

    export class JsError extends Error {
        public readonly msg: ErrMsg;

        constructor(message: string, ...msgs: ErrMsg[]) {
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
}

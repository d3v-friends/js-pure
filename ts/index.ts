import fnEnv from "@src/env";
import fnParam from "@src/param";
import fnPath from "@src/path";

namespace jsPure {
    export const env = fnEnv;
    export const param = fnParam;
    export const path = fnPath;

    type ErrLang = "en" | "ko" | string;
    type ErrMsg = Partial<Record<ErrLang, string>>;

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

        public getMsg(lang: ErrLang): string {
            if (this.msg.hasOwnProperty(lang)) return (this.msg as any)[lang];
            if (this.msg.hasOwnProperty("en")) return (this.msg as any)["en"];
            return "not found error msg";
        }
    }
}

export default jsPure;

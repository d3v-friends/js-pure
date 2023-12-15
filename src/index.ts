import env from "./fnEnv";
import param from "./fnParam";
import path from "./fnPath";
import Error from "./fnError";

export namespace jsPure {
    export const fnEnv = env;
    export const fnParam = param;
    export const fnPath = path;

    export class JsError extends Error {
    }
}


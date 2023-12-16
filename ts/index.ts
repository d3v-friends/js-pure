import env from "@src/env";
import param from "@src/param";
import path from "@src/path";
import JsErrorClass from "@src/jsError";

export const fnEnv = env;
export const fnParam = param;
export const fnPath = path;

export class JsError extends JsErrorClass {}

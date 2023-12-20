// Generated by dts-bundle-generator v9.0.0

export declare class JsError extends Error {
	readonly msg: ErrMsg;
	constructor(message: string, args?: object, msg?: ErrMsg);
	getMsg(lang: ErrLang): string;
}
export declare namespace fnCsv {
	function strToCsv(ls: string[]): string;
	function csvToStr(str: string): string[];
}
export declare namespace fnEnv {
	function string(key: string, ...defaultValue: string[]): string;
	function read(...str: string[]): Promise<void>;
	function boolean(key: string, ...defaults: boolean[]): boolean;
	function array(key: string, ...defaults: string[][]): string[];
}
export declare namespace fnParam {
	function bool(v: boolean[], ...defaults: boolean[]): boolean;
	function string(v: string[], ...defaults: string[]): string;
}
export type ErrLang = "en" | "ko" | string;
export type ErrMsg = Partial<Record<ErrLang, string>>;

export {};
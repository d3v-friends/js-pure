import { fnEnv, fnParam, fnErr } from "@src/index";

fnEnv.string("");
fnParam.string([]);

const err = new fnErr.Error(fnErr.msg("", {}), { ko: "" });

import fnEnv from "@src/env";
import fnErr from "@src/err";
import fnParam from "@src/param";
import fnPath from "@src/path";

export type Nullable<T> = T | null | undefined;

export default {
    fnEnv,
    fnPath,
    fnErr,
    fnParam,
};

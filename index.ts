// type
export { Nullable } from "@type/index";

// fnErr
import Error from "@err/jsError";
import getMsg from "@err/getMsg";

export const fnErr = {
    Error,
    getMsg,
};

// env
import fnEnvString from "@env/string";
import fnEnvArray from "@env/array";
import fnEnvRead from "@env/read";
import fnEnvBoolean from "@env/boolean";

export const fnEnv = {
    string: fnEnvString,
    array: fnEnvArray,
    read: fnEnvRead,
    boolean: fnEnvBoolean,
};

// fnParam
import fnParamString from "@param/string";
import fnParamBoolean from "@param/boolean";

export const fnParam = {
    string: fnParamString,
    boolean: fnParamBoolean,
};

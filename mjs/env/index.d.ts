import boolean from "./boolean";
import read from "./read";
import string from "./string";
import array from "./array";
declare const fnEnv: {
    string: typeof string;
    boolean: typeof boolean;
    read: typeof read;
    array: typeof array;
};
export default fnEnv;

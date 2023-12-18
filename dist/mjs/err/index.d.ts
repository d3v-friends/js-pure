import Error from "./jsError";
import msg from "./message";
declare const fnErr: {
    Error: typeof Error;
    msg: typeof msg;
};
export default fnErr;

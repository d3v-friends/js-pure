import Error from "dist/cjs/err/jsError";
import msg from "dist/cjs/err/message";
declare const fnErr: {
    Error: typeof Error;
    msg: typeof msg;
};
export default fnErr;

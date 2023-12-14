import { JsError } from "fnError/index";

type Key = "notImpl";
const jsErrorMap: Record<Key, JsError> = {
    notImpl: new JsError("not impl"),
};

export default jsErrorMap;

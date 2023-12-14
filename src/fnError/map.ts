import { JsError } from "@js-pure/fnError";

type Key = "notImpl";
const jsErrorMap: Record<Key, JsError> = {
    notImpl: new JsError("not impl"),
};

export default jsErrorMap;

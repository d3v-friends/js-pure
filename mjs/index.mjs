var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import env from "./env";
import param from "./param";
import path from "./path";
import JsErrorClass from "./jsError";
export var fnEnv = env;
export var fnParam = param;
export var fnPath = path;
var JsError = (function (_super) {
    __extends(JsError, _super);
    function JsError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JsError;
}(JsErrorClass));
export { JsError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUM7QUFDM0IsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLFlBQVksTUFBTSxjQUFjLENBQUM7QUFFeEMsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN6QixNQUFNLENBQUMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFFM0I7SUFBNkIsMkJBQVk7SUFBekM7O0lBQTJDLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUE1QyxDQUE2QixZQUFZLEdBQUcifQ==
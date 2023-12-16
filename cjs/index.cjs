"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsError = exports.fnPath = exports.fnParam = exports.fnEnv = void 0;
var env_1 = __importDefault(require("./env"));
var param_1 = __importDefault(require("./param"));
var path_1 = __importDefault(require("./path"));
var jsError_1 = __importDefault(require("./jsError"));
exports.fnEnv = env_1.default;
exports.fnParam = param_1.default;
exports.fnPath = path_1.default;
var JsError = (function (_super) {
    __extends(JsError, _super);
    function JsError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JsError;
}(jsError_1.default));
exports.JsError = JsError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBMkI7QUFDM0IscURBQStCO0FBQy9CLG1EQUE2QjtBQUM3Qix5REFBd0M7QUFFM0IsUUFBQSxLQUFLLEdBQUcsYUFBRyxDQUFDO0FBQ1osUUFBQSxPQUFPLEdBQUcsZUFBSyxDQUFDO0FBQ2hCLFFBQUEsTUFBTSxHQUFHLGNBQUksQ0FBQztBQUUzQjtJQUE2QiwyQkFBWTtJQUF6Qzs7SUFBMkMsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBQTVDLENBQTZCLGlCQUFZLEdBQUc7QUFBL0IsMEJBQU8ifQ==
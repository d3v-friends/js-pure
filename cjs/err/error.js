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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsError = void 0;
var JsError = (function (_super) {
    __extends(JsError, _super);
    function JsError(message, args, msg) {
        var _this = this;
        message = "".concat(message, ": ").concat(JSON.stringify(args || {}));
        _this = _super.call(this, message) || this;
        if (!msg) {
            _this.msg = {
                en: message,
            };
            return _this;
        }
        _this.msg = __assign({ en: message }, msg);
        return _this;
    }
    JsError.prototype.getMsg = function (lang) {
        if (this.msg.hasOwnProperty(lang))
            return this.msg[lang];
        if (this.msg.hasOwnProperty("en"))
            return this.msg["en"];
        return "not found error msg";
    };
    return JsError;
}(Error));
exports.JsError = JsError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9lcnIvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUE2QiwyQkFBSztJQUc5QixpQkFBWSxPQUFlLEVBQUUsSUFBYSxFQUFFLEdBQVk7UUFBeEQsaUJBZUM7UUFkRyxPQUFPLEdBQUcsVUFBRyxPQUFPLGVBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztRQUN0RCxRQUFBLE1BQUssWUFBQyxPQUFPLENBQUMsU0FBQztRQUVmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNQLEtBQUksQ0FBQyxHQUFHLEdBQUc7Z0JBQ1AsRUFBRSxFQUFFLE9BQU87YUFDZCxDQUFDOztRQUVOLENBQUM7UUFFRCxLQUFJLENBQUMsR0FBRyxjQUNKLEVBQUUsRUFBRSxPQUFPLElBQ1IsR0FBRyxDQUNULENBQUM7O0lBQ04sQ0FBQztJQUVNLHdCQUFNLEdBQWIsVUFBYyxJQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBekJELENBQTZCLEtBQUssR0F5QmpDO0FBekJZLDBCQUFPIn0=
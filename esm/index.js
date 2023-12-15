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
import env from "./fnEnv";
import param from "./fnParam";
import path from "./fnPath";
var jsPure;
(function (jsPure) {
    jsPure.fnEnv = env;
    jsPure.fnParam = param;
    jsPure.fnPath = path;
    var JsError = /** @class */ (function (_super) {
        __extends(JsError, _super);
        function JsError(message) {
            var msgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                msgs[_i - 1] = arguments[_i];
            }
            var _this = _super.call(this, message) || this;
            if (msgs.length == 0) {
                _this.msg = {
                    en: message,
                };
            }
            _this.msg = msgs[0];
            if (!_this.msg.en)
                _this.msg.en = message;
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
    jsPure.JsError = JsError;
})(jsPure || (jsPure = {}));
export default jsPure;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBQzFCLE9BQU8sS0FBSyxNQUFNLFdBQVcsQ0FBQztBQUM5QixPQUFPLElBQUksTUFBTSxVQUFVLENBQUM7QUFFNUIsSUFBVSxNQUFNLENBNkJmO0FBN0JELFdBQVUsTUFBTTtJQUNDLFlBQUssR0FBRyxHQUFHLENBQUM7SUFDWixjQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ2hCLGFBQU0sR0FBRyxJQUFJLENBQUM7SUFLM0I7UUFBNkIsMkJBQUs7UUFHOUIsaUJBQVksT0FBZTtZQUFFLGNBQWlCO2lCQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7Z0JBQWpCLDZCQUFpQjs7WUFDMUMsWUFBQSxNQUFLLFlBQUMsT0FBTyxDQUFDLFNBQUM7WUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxHQUFHLEdBQUc7b0JBQ1AsRUFBRSxFQUFFLE9BQU87aUJBQ2QsQ0FBQztZQUNOLENBQUM7WUFFRCxLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQzs7UUFDNUMsQ0FBQztRQUVNLHdCQUFNLEdBQWIsVUFBYyxJQUFjO1lBQ3hCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQVEsSUFBSSxDQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFBRSxPQUFRLElBQUksQ0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEUsT0FBTyxxQkFBcUIsQ0FBQztRQUNqQyxDQUFDO1FBQ0wsY0FBQztJQUFELENBQUMsQUFwQkQsQ0FBNkIsS0FBSyxHQW9CakM7SUFwQlksY0FBTyxVQW9CbkIsQ0FBQTtBQUNMLENBQUMsRUE3QlMsTUFBTSxLQUFOLE1BQU0sUUE2QmY7QUFFRCxlQUFlLE1BQU0sQ0FBQyJ9
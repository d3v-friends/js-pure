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
import fnEnv from "./env";
import fnParam from "./param";
import fnPath from "./path";
var jsPure;
(function (jsPure) {
    jsPure.env = fnEnv;
    jsPure.param = fnParam;
    jsPure.path = fnPath;
    var JsError = (function (_super) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixJQUFVLE1BQU0sQ0E2QmY7QUE3QkQsV0FBVSxNQUFNO0lBQ0MsVUFBRyxHQUFHLEtBQUssQ0FBQztJQUNaLFlBQUssR0FBRyxPQUFPLENBQUM7SUFDaEIsV0FBSSxHQUFHLE1BQU0sQ0FBQztJQUszQjtRQUE2QiwyQkFBSztRQUc5QixpQkFBWSxPQUFlO1lBQUUsY0FBaUI7aUJBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtnQkFBakIsNkJBQWlCOztZQUMxQyxZQUFBLE1BQUssWUFBQyxPQUFPLENBQUMsU0FBQztZQUNmLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLEdBQUcsR0FBRztvQkFDUCxFQUFFLEVBQUUsT0FBTztpQkFDZCxDQUFDO1lBQ04sQ0FBQztZQUVELEtBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDOztRQUM1QyxDQUFDO1FBRU0sd0JBQU0sR0FBYixVQUFjLElBQWE7WUFDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQVEsSUFBSSxDQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxPQUFPLHFCQUFxQixDQUFDO1FBQ2pDLENBQUM7UUFDTCxjQUFDO0lBQUQsQ0FBQyxBQXBCRCxDQUE2QixLQUFLLEdBb0JqQztJQXBCWSxjQUFPLFVBb0JuQixDQUFBO0FBQ0wsQ0FBQyxFQTdCUyxNQUFNLEtBQU4sTUFBTSxRQTZCZjtBQUVELGVBQWUsTUFBTSxDQUFDIn0=
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
var env_1 = __importDefault(require("./env"));
var param_1 = __importDefault(require("./param"));
var path_1 = __importDefault(require("./path"));
var jsPure;
(function (jsPure) {
    jsPure.env = env_1.default;
    jsPure.param = param_1.default;
    jsPure.path = path_1.default;
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
exports.default = jsPure;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE2QjtBQUM3QixxREFBaUM7QUFDakMsbURBQStCO0FBRS9CLElBQVUsTUFBTSxDQTZCZjtBQTdCRCxXQUFVLE1BQU07SUFDQyxVQUFHLEdBQUcsYUFBSyxDQUFDO0lBQ1osWUFBSyxHQUFHLGVBQU8sQ0FBQztJQUNoQixXQUFJLEdBQUcsY0FBTSxDQUFDO0lBSzNCO1FBQTZCLDJCQUFLO1FBRzlCLGlCQUFZLE9BQWU7WUFBRSxjQUFpQjtpQkFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO2dCQUFqQiw2QkFBaUI7O1lBQzFDLFlBQUEsTUFBSyxZQUFDLE9BQU8sQ0FBQyxTQUFDO1lBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNuQixLQUFJLENBQUMsR0FBRyxHQUFHO29CQUNQLEVBQUUsRUFBRSxPQUFPO2lCQUNkLENBQUM7WUFDTixDQUFDO1lBRUQsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7O1FBQzVDLENBQUM7UUFFTSx3QkFBTSxHQUFiLFVBQWMsSUFBYTtZQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFBRSxPQUFRLElBQUksQ0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xFLE9BQU8scUJBQXFCLENBQUM7UUFDakMsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBcEJELENBQTZCLEtBQUssR0FvQmpDO0lBcEJZLGNBQU8sVUFvQm5CLENBQUE7QUFDTCxDQUFDLEVBN0JTLE1BQU0sS0FBTixNQUFNLFFBNkJmO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=
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
export { JsError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm5FcnJvci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUE2QiwyQkFBSztJQUc5QixpQkFBWSxPQUFlO1FBQUUsY0FBZ0I7YUFBaEIsVUFBZ0IsRUFBaEIscUJBQWdCLEVBQWhCLElBQWdCO1lBQWhCLDZCQUFnQjs7UUFDekMsWUFBQSxNQUFLLFlBQUMsT0FBTyxDQUFDLFNBQUM7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLEdBQUcsR0FBRztnQkFDUCxFQUFFLEVBQUUsT0FBTzthQUNkLENBQUM7UUFDTixDQUFDO1FBRUQsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQzs7SUFDNUMsQ0FBQztJQUVNLHdCQUFNLEdBQWIsVUFBYyxJQUFjO1FBQ3hCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBcEJELENBQTZCLEtBQUssR0FvQmpDIn0=
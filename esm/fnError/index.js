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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9mbkVycm9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQTZCLDJCQUFLO0lBRzlCLGlCQUFZLE9BQWU7UUFBRSxjQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsNkJBQWdCOztRQUN6QyxZQUFBLE1BQUssWUFBQyxPQUFPLENBQUMsU0FBQztRQUNmLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsR0FBRyxHQUFHO2dCQUNQLEVBQUUsRUFBRSxPQUFPO2FBQ2QsQ0FBQztRQUNOLENBQUM7UUFFRCxLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDOztJQUM1QyxDQUFDO0lBRU0sd0JBQU0sR0FBYixVQUFjLElBQWM7UUFDeEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFRLElBQUksQ0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFRLElBQUksQ0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFwQkQsQ0FBNkIsS0FBSyxHQW9CakMifQ==
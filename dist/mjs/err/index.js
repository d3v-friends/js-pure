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
var JsError = /** @class */ (function (_super) {
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
export { JsError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBNkIsMkJBQUs7SUFHOUIsaUJBQVksT0FBZSxFQUFFLElBQWEsRUFBRSxHQUFZO1FBQXhELGlCQWVDO1FBZEcsT0FBTyxHQUFHLFVBQUcsT0FBTyxlQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7UUFDdEQsUUFBQSxNQUFLLFlBQUMsT0FBTyxDQUFDLFNBQUM7UUFFZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDUCxLQUFJLENBQUMsR0FBRyxHQUFHO2dCQUNQLEVBQUUsRUFBRSxPQUFPO2FBQ2QsQ0FBQzs7UUFFTixDQUFDO1FBRUQsS0FBSSxDQUFDLEdBQUcsY0FDSixFQUFFLEVBQUUsT0FBTyxJQUNSLEdBQUcsQ0FDVCxDQUFDOztJQUNOLENBQUM7SUFFTSx3QkFBTSxHQUFiLFVBQWMsSUFBYTtRQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQVEsSUFBSSxDQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQVEsSUFBSSxDQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUE2QixLQUFLLEdBeUJqQyJ9
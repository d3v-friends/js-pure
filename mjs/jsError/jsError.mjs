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
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1(message) {
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
    default_1.prototype.getMsg = function (lang) {
        if (this.msg.hasOwnProperty(lang))
            return this.msg[lang];
        if (this.msg.hasOwnProperty("en"))
            return this.msg["en"];
        return "not found error msg";
    };
    return default_1;
}(Error));
export default default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL2pzRXJyb3IvanNFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUE2Qiw2QkFBSztJQUc5QixtQkFBWSxPQUFlO1FBQUUsY0FBaUI7YUFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1lBQWpCLDZCQUFpQjs7UUFDMUMsWUFBQSxNQUFLLFlBQUMsT0FBTyxDQUFDLFNBQUM7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLEdBQUcsR0FBRztnQkFDUCxFQUFFLEVBQUUsT0FBTzthQUNkLENBQUM7UUFDTixDQUFDO1FBRUQsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQzs7SUFDNUMsQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxJQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUE2QixLQUFLLEdBb0JqQyJ9
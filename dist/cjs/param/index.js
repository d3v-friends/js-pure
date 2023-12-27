"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fnParam = void 0;
exports.fnParam = {
    bool: function (v) {
        var defaults = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defaults[_i - 1] = arguments[_i];
        }
        if (v.length === 0) {
            if (defaults.length === 0)
                return false;
            return defaults[0];
        }
        return v[0];
    },
    string: function (v) {
        var defaults = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defaults[_i - 1] = arguments[_i];
        }
        if (v.length === 0) {
            if (defaults.length === 0)
                return "";
            return defaults[0];
        }
        return v[0];
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFyYW0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxPQUFPLEdBQUc7SUFDbkIsSUFBSSxFQUFFLFVBQUMsQ0FBWTtRQUFFLGtCQUFzQjthQUF0QixVQUFzQixFQUF0QixxQkFBc0IsRUFBdEIsSUFBc0I7WUFBdEIsaUNBQXNCOztRQUN2QyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDakIsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDeEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxNQUFNLEVBQUUsVUFBQyxDQUFXO1FBQUUsa0JBQXFCO2FBQXJCLFVBQXFCLEVBQXJCLHFCQUFxQixFQUFyQixJQUFxQjtZQUFyQixpQ0FBcUI7O1FBQ3ZDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNqQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPLEVBQUUsQ0FBQztZQUNyQyxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztDQUNKLENBQUMifQ==
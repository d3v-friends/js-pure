"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getString = exports.getBool = void 0;
function getBool(v) {
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
}
exports.getBool = getBool;
function getString(v) {
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
}
exports.getString = getString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9wYXJhbS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixPQUFPLENBQUMsQ0FBWTtJQUFFLGtCQUFzQjtTQUF0QixVQUFzQixFQUF0QixxQkFBc0IsRUFBdEIsSUFBc0I7UUFBdEIsaUNBQXNCOztJQUN4RCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN4QyxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQztBQU5ELDBCQU1DO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLENBQVc7SUFBRSxrQkFBcUI7U0FBckIsVUFBcUIsRUFBckIscUJBQXFCLEVBQXJCLElBQXFCO1FBQXJCLGlDQUFxQjs7SUFDeEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDckMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLENBQUM7QUFORCw4QkFNQyJ9
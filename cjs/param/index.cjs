"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boolean = function (v) {
    if (v.length === 0)
        return false;
    return v[0];
};
var string = function (v) {
    if (v.length === 0)
        return "";
    return v[0];
};
var strComma = function (keys, suffix) {
    var parent = string(keys);
    if (parent === "") {
        return suffix;
    }
    return "".concat(parent, ".").concat(suffix);
};
var commaToArray = function (str) {
    return str
        .replace(/ /g, "")
        .split(",")
        .filter(function (v) { return v !== ""; })
        .map(function (v) { return v.trim(); });
};
var arrayToComma = function (ls) {
    var res = "";
    for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
        var elem = ls_1[_i];
        if (elem === "")
            continue;
        res += "".concat(elem, ",");
    }
    return res.slice(0, res.length - 1);
};
exports.default = {
    string: string,
    boolean: boolean,
    strComma: strComma,
    commaToArray: commaToArray,
    arrayToComma: arrayToComma,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9wYXJhbS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sT0FBTyxHQUFHLFVBQUMsQ0FBWTtJQUN6QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUNGLElBQU0sTUFBTSxHQUFHLFVBQUMsQ0FBVztJQUN2QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHLFVBQUMsSUFBYyxFQUFFLE1BQWM7SUFDNUMsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLElBQUksTUFBTSxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxPQUFPLFVBQUcsTUFBTSxjQUFJLE1BQU0sQ0FBRSxDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFHLFVBQUMsR0FBVztJQUM3QixPQUFPLEdBQUc7U0FDTCxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEVBQUUsRUFBUixDQUFRLENBQUM7U0FDckIsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFHLFVBQUMsRUFBWTtJQUM5QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixLQUFpQixVQUFFLEVBQUYsU0FBRSxFQUFGLGdCQUFFLEVBQUYsSUFBRSxFQUFFLENBQUM7UUFBakIsSUFBSSxJQUFJLFdBQUE7UUFDVCxJQUFJLElBQUksS0FBSyxFQUFFO1lBQUUsU0FBUztRQUMxQixHQUFHLElBQUksVUFBRyxJQUFJLE1BQUcsQ0FBQztJQUN0QixDQUFDO0lBQ0QsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQUVGLGtCQUFlO0lBQ1gsTUFBTSxRQUFBO0lBQ04sT0FBTyxTQUFBO0lBQ1AsUUFBUSxVQUFBO0lBQ1IsWUFBWSxjQUFBO0lBQ1osWUFBWSxjQUFBO0NBQ2YsQ0FBQyJ9
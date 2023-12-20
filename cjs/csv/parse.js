"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvToString = exports.stringToCsv = void 0;
function stringToCsv(ls) {
    var res = "";
    for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
        var elem = ls_1[_i];
        res += "".concat(elem, ",");
    }
    return res.slice(0, res.length - 1);
}
exports.stringToCsv = stringToCsv;
function csvToString(str) {
    return str
        .replace(/ /g, "")
        .split(",")
        .filter(function (v) { return v !== ""; })
        .map(function (v) { return v.trim(); });
}
exports.csvToString = csvToString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jc3YvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsV0FBVyxDQUFDLEVBQVk7SUFDcEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBaUIsVUFBRSxFQUFGLFNBQUUsRUFBRixnQkFBRSxFQUFGLElBQUUsRUFBRSxDQUFDO1FBQWpCLElBQUksSUFBSSxXQUFBO1FBQ1QsR0FBRyxJQUFJLFVBQUcsSUFBSSxNQUFHLENBQUM7SUFDdEIsQ0FBQztJQUNELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBTkQsa0NBTUM7QUFFRCxTQUFnQixXQUFXLENBQUMsR0FBVztJQUNuQyxPQUFPLEdBQUc7U0FDTCxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEVBQUUsRUFBUixDQUFRLENBQUM7U0FDckIsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFORCxrQ0FNQyJ9
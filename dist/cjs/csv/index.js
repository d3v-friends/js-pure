"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fnCsv = void 0;
exports.fnCsv = {
    strToCsv: function (ls) {
        var res = "";
        for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
            var elem = ls_1[_i];
            res += "".concat(elem, ",");
        }
        return res.slice(0, res.length - 1);
    },
    csvToStr: function (str) {
        return str
            .replace(/ /g, "")
            .split(",")
            .filter(function (v) { return v !== ""; })
            .map(function (v) { return v.trim(); });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3N2L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsS0FBSyxHQUFHO0lBQ2pCLFFBQVEsRUFBRSxVQUFDLEVBQVk7UUFDbkIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBaUIsVUFBRSxFQUFGLFNBQUUsRUFBRixnQkFBRSxFQUFGLElBQUUsRUFBRSxDQUFDO1lBQWpCLElBQUksSUFBSSxXQUFBO1lBQ1QsR0FBRyxJQUFJLFVBQUcsSUFBSSxNQUFHLENBQUM7UUFDdEIsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsUUFBUSxFQUFFLFVBQUMsR0FBVztRQUNsQixPQUFPLEdBQUc7YUFDTCxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzthQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEVBQUUsRUFBUixDQUFRLENBQUM7YUFDckIsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFDIn0=
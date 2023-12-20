export function stringToCsv(ls) {
    var res = "";
    for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
        var elem = ls_1[_i];
        res += "".concat(elem, ",");
    }
    return res.slice(0, res.length - 1);
}
export function csvToString(str) {
    return str
        .replace(/ /g, "")
        .split(",")
        .filter(function (v) { return v !== ""; })
        .map(function (v) { return v.trim(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jc3YvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFdBQVcsQ0FBQyxFQUFZO0lBQ3BDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQWlCLFVBQUUsRUFBRixTQUFFLEVBQUYsZ0JBQUUsRUFBRixJQUFFLEVBQUUsQ0FBQztRQUFqQixJQUFJLElBQUksV0FBQTtRQUNULEdBQUcsSUFBSSxVQUFHLElBQUksTUFBRyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBVztJQUNuQyxPQUFPLEdBQUc7U0FDTCxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEVBQUUsRUFBUixDQUFRLENBQUM7U0FDckIsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBQzVCLENBQUMifQ==
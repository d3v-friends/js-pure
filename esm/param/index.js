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
export default {
    string: string,
    boolean: boolean,
    strComma: strComma,
    commaToArray: commaToArray,
    arrayToComma: arrayToComma,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFyYW0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxPQUFPLEdBQUcsVUFBQyxDQUFZO0lBQ3pCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBQ0YsSUFBTSxNQUFNLEdBQUcsVUFBQyxDQUFXO0lBQ3ZCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsVUFBQyxJQUFjLEVBQUUsTUFBYztJQUM1QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsSUFBSSxNQUFNLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDaEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELE9BQU8sVUFBRyxNQUFNLGNBQUksTUFBTSxDQUFFLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQUcsVUFBQyxHQUFXO0lBQzdCLE9BQU8sR0FBRztTQUNMLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1NBQ2pCLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssRUFBRSxFQUFSLENBQVEsQ0FBQztTQUNyQixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQUcsVUFBQyxFQUFZO0lBQzlCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQWlCLFVBQUUsRUFBRixTQUFFLEVBQUYsZ0JBQUUsRUFBRixJQUFFLEVBQUUsQ0FBQztRQUFqQixJQUFJLElBQUksV0FBQTtRQUNULElBQUksSUFBSSxLQUFLLEVBQUU7WUFBRSxTQUFTO1FBQzFCLEdBQUcsSUFBSSxVQUFHLElBQUksTUFBRyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsZUFBZTtJQUNYLE1BQU0sUUFBQTtJQUNOLE9BQU8sU0FBQTtJQUNQLFFBQVEsVUFBQTtJQUNSLFlBQVksY0FBQTtJQUNaLFlBQVksY0FBQTtDQUNmLENBQUMifQ==
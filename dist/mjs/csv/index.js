export var fnCsv = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3N2L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRztJQUNqQixRQUFRLEVBQUUsVUFBQyxFQUFZO1FBQ25CLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQWlCLFVBQUUsRUFBRixTQUFFLEVBQUYsZ0JBQUUsRUFBRixJQUFFLEVBQUUsQ0FBQztZQUFqQixJQUFJLElBQUksV0FBQTtZQUNULEdBQUcsSUFBSSxVQUFHLElBQUksTUFBRyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELFFBQVEsRUFBRSxVQUFDLEdBQVc7UUFDbEIsT0FBTyxHQUFHO2FBQ0wsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7YUFDakIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxFQUFFLEVBQVIsQ0FBUSxDQUFDO2FBQ3JCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQyJ9
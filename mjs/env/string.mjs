import fnParam from "../param";
export default function (key) {
    var defaultValue = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaultValue[_i - 1] = arguments[_i];
    }
    var value = process.env[key] || fnParam.string(defaultValue);
    if (value == "") {
        console.log("not found env: key=".concat(key));
        process.exit(1);
    }
    return value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvZW52L3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSxZQUFZLENBQUM7QUFFakMsTUFBTSxDQUFDLE9BQU8sV0FBVyxHQUFXO0lBQUUsc0JBQXlCO1NBQXpCLFVBQXlCLEVBQXpCLHFCQUF5QixFQUF6QixJQUF5QjtRQUF6QixxQ0FBeUI7O0lBQzNELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvRCxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQXNCLEdBQUcsQ0FBRSxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyJ9
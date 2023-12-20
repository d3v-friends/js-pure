export function getBool(v) {
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
export function getString(v) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9wYXJhbS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsT0FBTyxDQUFDLENBQVk7SUFBRSxrQkFBc0I7U0FBdEIsVUFBc0IsRUFBdEIscUJBQXNCLEVBQXRCLElBQXNCO1FBQXRCLGlDQUFzQjs7SUFDeEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDeEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLENBQVc7SUFBRSxrQkFBcUI7U0FBckIsVUFBcUIsRUFBckIscUJBQXFCLEVBQXJCLElBQXFCO1FBQXJCLGlDQUFxQjs7SUFDeEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDckMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLENBQUMifQ==
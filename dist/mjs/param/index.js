export var fnParam = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFyYW0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQU0sT0FBTyxHQUFHO0lBQ25CLElBQUksRUFBRSxVQUFDLENBQVk7UUFBRSxrQkFBc0I7YUFBdEIsVUFBc0IsRUFBdEIscUJBQXNCLEVBQXRCLElBQXNCO1lBQXRCLGlDQUFzQjs7UUFDdkMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2pCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ3hDLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsTUFBTSxFQUFFLFVBQUMsQ0FBVztRQUFFLGtCQUFxQjthQUFyQixVQUFxQixFQUFyQixxQkFBcUIsRUFBckIsSUFBcUI7WUFBckIsaUNBQXFCOztRQUN2QyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDakIsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFDckMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FDSixDQUFDIn0=
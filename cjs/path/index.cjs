"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("../env"));
function fitOS(fp) {
    const slash = getSlash();
    return fp.replace(slash.from, slash.to);
}
function getSlash() {
    const os = env_1.default.string("OS", "linux");
    const slash = {
        from: /\\/g,
        to: "/",
    };
    if (os === "Windows_NT") {
        slash.from = /\//g;
        slash.to = "\\";
    }
    return slash;
}
exports.default = {
    fitOS,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGF0aC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlEQUEyQjtBQUUzQixTQUFTLEtBQUssQ0FBQyxFQUFVO0lBQ3JCLE1BQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyxRQUFRO0lBQ2IsTUFBTSxFQUFFLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsTUFBTSxLQUFLLEdBQUc7UUFDVixJQUFJLEVBQUUsS0FBSztRQUNYLEVBQUUsRUFBRSxHQUFHO0tBQ1YsQ0FBQztJQUVGLElBQUksRUFBRSxLQUFLLFlBQVksRUFBRSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsa0JBQWU7SUFDWCxLQUFLO0NBQ1IsQ0FBQyJ9
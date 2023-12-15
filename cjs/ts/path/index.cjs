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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90cy9wYXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaURBQTJCO0FBRTNCLFNBQVMsS0FBSyxDQUFDLEVBQVU7SUFDckIsTUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFRCxTQUFTLFFBQVE7SUFDYixNQUFNLEVBQUUsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxNQUFNLEtBQUssR0FBRztRQUNWLElBQUksRUFBRSxLQUFLO1FBQ1gsRUFBRSxFQUFFLEdBQUc7S0FDVixDQUFDO0lBRUYsSUFBSSxFQUFFLEtBQUssWUFBWSxFQUFFLENBQUM7UUFDdEIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxrQkFBZTtJQUNYLEtBQUs7Q0FDUixDQUFDIn0=
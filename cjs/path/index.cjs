"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = __importDefault(require("../env"));
function fitOS(fp) {
    var slash = getSlash();
    return fp.replace(slash.from, slash.to);
}
function getSlash() {
    var os = env_1.default.string("OS", "linux");
    var slash = {
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
    fitOS: fitOS,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9wYXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQTJCO0FBRTNCLFNBQVMsS0FBSyxDQUFDLEVBQVU7SUFDckIsSUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFRCxTQUFTLFFBQVE7SUFDYixJQUFNLEVBQUUsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxJQUFNLEtBQUssR0FBRztRQUNWLElBQUksRUFBRSxLQUFLO1FBQ1gsRUFBRSxFQUFFLEdBQUc7S0FDVixDQUFDO0lBRUYsSUFBSSxFQUFFLEtBQUssWUFBWSxFQUFFLENBQUM7UUFDdEIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxrQkFBZTtJQUNYLEtBQUssT0FBQTtDQUNSLENBQUMifQ==
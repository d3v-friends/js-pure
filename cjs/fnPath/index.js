"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fnEnv_1 = __importDefault(require("../fnEnv"));
function fitOS(fp) {
    var slash = getSlash();
    return fp.replace(slash.from, slash.to);
}
function getSlash() {
    var os = fnEnv_1.default.string("OS", "linux");
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
var fnPath = {
    fitOS: fitOS,
};
exports.default = fnPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9mblBhdGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBNkI7QUFFN0IsU0FBUyxLQUFLLENBQUMsRUFBVTtJQUNyQixJQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUN6QixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVELFNBQVMsUUFBUTtJQUNiLElBQU0sRUFBRSxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLElBQU0sS0FBSyxHQUFHO1FBQ1YsSUFBSSxFQUFFLEtBQUs7UUFDWCxFQUFFLEVBQUUsR0FBRztLQUNWLENBQUM7SUFFRixJQUFJLEVBQUUsS0FBSyxZQUFZLEVBQUUsQ0FBQztRQUN0QixLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELElBQU0sTUFBTSxHQUFHO0lBQ1gsS0FBSyxPQUFBO0NBQ1IsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyJ9
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fnEnv = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var readline_1 = __importDefault(require("readline"));
var err_1 = require("../err");
var param_1 = require("../param");
exports.fnEnv = {
    string: function (key) {
        var defaultValue = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defaultValue[_i - 1] = arguments[_i];
        }
        var value = process.env[key] || param_1.fnParam.string(defaultValue);
        if (value == "") {
            console.log("not found env: key=".concat(key));
            process.exit(1);
        }
        return value;
    },
    read: function () {
        var str = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            str[_i] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () {
            var fp, rl, _a, rl_1, rl_1_1, line, env, ls, e_1_1;
            var _b, e_1, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        fp = path_1.default.resolve.apply(path_1.default, str);
                        if (!fs_1.default.existsSync(fp)) {
                            throw new err_1.JsError("not found env file", { fp: fp }, { ko: "\uD658\uACBD\uBCC0\uC218 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD558\uC600\uC2B5\uB2C8\uB2E4." });
                        }
                        rl = readline_1.default.createInterface({
                            input: fs_1.default.createReadStream(fp),
                            crlfDelay: Infinity,
                        });
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 12]);
                        _a = true, rl_1 = __asyncValues(rl);
                        _e.label = 2;
                    case 2: return [4 /*yield*/, rl_1.next()];
                    case 3:
                        if (!(rl_1_1 = _e.sent(), _b = rl_1_1.done, !_b)) return [3 /*break*/, 5];
                        _d = rl_1_1.value;
                        _a = false;
                        line = _d;
                        env = line.replace(/ /g, "");
                        ls = env.split("=");
                        if (ls.length != 2)
                            return [3 /*break*/, 4];
                        process.env[ls[0]] = ls[1];
                        console.log("env: ".concat(ls[0], "=").concat(ls[1]));
                        _e.label = 4;
                    case 4:
                        _a = true;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _e.trys.push([7, , 10, 11]);
                        if (!(!_a && !_b && (_c = rl_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _c.call(rl_1)];
                    case 8:
                        _e.sent();
                        _e.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    },
    boolean: function (key) {
        var defaults = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defaults[_i - 1] = arguments[_i];
        }
        var value = process.env[key] || "";
        if (value === "") {
            if (defaults.length === 0) {
                console.log("not found env: key=".concat(key));
                process.exit(1);
            }
            else {
                return defaults[0];
            }
        }
        return value === "true";
    },
    array: function (key) {
        var defaults = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defaults[_i - 1] = arguments[_i];
        }
        var str = process.env[key] || "";
        if (!str) {
            if (defaults.length === 0)
                return [];
            return defaults[0];
        }
        for (var i = 0; i < str.lastIndexOf(" "); i++) {
            str = str.replace(" ", "");
        }
        if (!str.startsWith("["))
            return [];
        if (!str.endsWith("]"))
            return [];
        str = str.slice(1, str.length - 1);
        return str.split(",");
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW52L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBb0I7QUFDcEIsOENBQXdCO0FBQ3hCLHNEQUFnQztBQUNoQyxnQ0FBbUM7QUFDbkMsb0NBQXFDO0FBRXhCLFFBQUEsS0FBSyxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxVQUFDLEdBQVc7UUFBRSxzQkFBeUI7YUFBekIsVUFBeUIsRUFBekIscUJBQXlCLEVBQXpCLElBQXlCO1lBQXpCLHFDQUF5Qjs7UUFDM0MsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxlQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9ELElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBc0IsR0FBRyxDQUFFLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQU8sYUFBZ0I7YUFBaEIsVUFBZ0IsRUFBaEIscUJBQWdCLEVBQWhCLElBQWdCO1lBQWhCLHdCQUFnQjs7Ozs7Ozs7d0JBQ25CLEVBQUUsR0FBRyxjQUFJLENBQUMsT0FBTyxPQUFaLGNBQUksRUFBWSxHQUFHLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDckIsTUFBTSxJQUFJLGFBQU8sQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsSUFBQSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0dBQXFCLEVBQUUsQ0FBQyxDQUFDO3dC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
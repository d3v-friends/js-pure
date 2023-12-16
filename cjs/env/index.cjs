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
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var readline_1 = __importDefault(require("readline"));
var index_1 = __importDefault(require("../index"));
var param_1 = __importDefault(require("../param"));
function string(key) {
    var defaultValue = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaultValue[_i - 1] = arguments[_i];
    }
    var value = process.env[key] || param_1.default.string(defaultValue);
    if (value == "") {
        console.log("not found env: key=".concat(key));
        process.exit(1);
    }
    return value;
}
function boolean(key) {
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
}
function readFile() {
    var _a, e_1, _b, _c;
    var str = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        str[_i] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var fp, rl, _d, rl_1, rl_1_1, line, env, ls, e_1_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    fp = path_1.default.resolve.apply(path_1.default, str);
                    if (!fs_1.default.existsSync(fp)) {
                        throw new index_1.default.JsError("not found env file: path=".concat(fp));
                    }
                    rl = readline_1.default.createInterface({
                        input: fs_1.default.createReadStream(fp),
                        crlfDelay: Infinity,
                    });
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 12]);
                    _d = true, rl_1 = __asyncValues(rl);
                    _e.label = 2;
                case 2: return [4, rl_1.next()];
                case 3:
                    if (!(rl_1_1 = _e.sent(), _a = rl_1_1.done, !_a)) return [3, 5];
                    _c = rl_1_1.value;
                    _d = false;
                    line = _c;
                    env = line.replace(/ /g, "");
                    ls = env.split("=");
                    if (ls.length != 2)
                        return [3, 4];
                    process.env[ls[0]] = ls[1];
                    console.log("env: ".concat(ls[0], "=").concat(ls[1]));
                    _e.label = 4;
                case 4:
                    _d = true;
                    return [3, 2];
                case 5: return [3, 12];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 12];
                case 7:
                    _e.trys.push([7, , 10, 11]);
                    if (!(!_d && !_a && (_b = rl_1.return))) return [3, 9];
                    return [4, _b.call(rl_1)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [3, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7];
                case 11: return [7];
                case 12: return [2];
            }
        });
    });
}
var fnEnv = {
    string: string,
    boolean: boolean,
    readFile: readFile,
};
exports.default = fnEnv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9lbnYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQW9CO0FBQ3BCLDhDQUF3QjtBQUN4QixzREFBZ0M7QUFDaEMsbURBQThCO0FBQzlCLG1EQUErQjtBQUUvQixTQUFTLE1BQU0sQ0FBQyxHQUFXO0lBQUUsc0JBQXlCO1NBQXpCLFVBQXlCLEVBQXpCLHFCQUF5QixFQUF6QixJQUF5QjtRQUF6QixxQ0FBeUI7O0lBQ2xELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksZUFBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvRCxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQXNCLEdBQUcsQ0FBRSxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEdBQVc7SUFBRSxrQkFBc0I7U0FBdEIsVUFBc0IsRUFBdEIscUJBQXNCLEVBQXRCLElBQXNCO1FBQXRCLGlDQUFzQjs7SUFDaEQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDZixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBc0IsR0FBRyxDQUFFLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7YUFBTSxDQUFDO1lBQ0osT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEtBQUssS0FBSyxNQUFNLENBQUM7QUFDNUIsQ0FBQztBQUVELFNBQWUsUUFBUTs7SUFBQyxhQUFnQjtTQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7UUFBaEIsd0JBQWdCOzs7Ozs7O29CQUM5QixFQUFFLEdBQUcsY0FBSSxDQUFDLE9BQU8sT0FBWixjQUFJLEVBQVksR0FBRyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxZQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ3JCLE1BQU0sSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLG1DQUE0QixFQUFFLENBQUUsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO29CQUVLLEVBQUUsR0FBRyxrQkFBUSxDQUFDLGVBQWUsQ0FBQzt3QkFDaEMsS0FBSyxFQUFFLFlBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7d0JBQzlCLFNBQVMsRUFBRSxRQUFRO3FCQUN0QixDQUFDLENBQUM7Ozs7K0JBRXNCLE9BQUEsY0FBQSxFQUFFLENBQUE7Ozs7O29CQUFGLGtCQUFFO29CQUFGLFdBQUU7b0JBQVYsSUFBSSxLQUFBLENBQUE7b0JBQ1gsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM3QixFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsY0FBUztvQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFN0M7QUFFRCxJQUFNLEtBQUssR0FBRztJQUNWLE1BQU0sUUFBQTtJQUNOLE9BQU8sU0FBQTtJQUNQLFFBQVEsVUFBQTtDQUNYLENBQUM7QUFFRixrQkFBZSxLQUFLLENBQUMifQ==
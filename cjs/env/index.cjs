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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readline_1 = __importDefault(require("readline"));
const param_1 = __importDefault(require("../param"));
function string(key, ...defaultValue) {
    const value = process.env[key] || param_1.default.string(defaultValue);
    if (value == "") {
        console.log(`not found env: key=${key}`);
        process.exit(1);
    }
    return value;
}
function boolean(key, ...defaults) {
    const value = process.env[key] || "";
    if (value === "") {
        if (defaults.length === 0) {
            console.log(`not found env: key=${key}`);
            process.exit(1);
        }
        else {
            return defaults[0];
        }
    }
    return value === "true";
}
function readFile(...str) {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const fp = path_1.default.join(...str);
        const rl = readline_1.default.createInterface({
            input: fs_1.default.createReadStream(fp),
            crlfDelay: Infinity,
        });
        try {
            for (var _d = true, rl_1 = __asyncValues(rl), rl_1_1; rl_1_1 = yield rl_1.next(), _a = rl_1_1.done, !_a; _d = true) {
                _c = rl_1_1.value;
                _d = false;
                const line = _c;
                const env = line.replace(/ /g, "");
                const ls = env.split("=");
                if (ls.length != 2)
                    continue;
                process.env[ls[0]] = ls[1];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = rl_1.return)) yield _b.call(rl_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
const fnEnv = {
    string,
    boolean,
    readFile,
};
exports.default = fnEnv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW52L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFvQjtBQUNwQixnREFBd0I7QUFDeEIsd0RBQWdDO0FBQ2hDLHFEQUErQjtBQUUvQixTQUFTLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxZQUFzQjtJQUNsRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLGVBQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0QsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxRQUFtQjtJQUNoRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNmLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQzthQUFNLENBQUM7WUFDSixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sS0FBSyxLQUFLLE1BQU0sQ0FBQztBQUM1QixDQUFDO0FBRUQsU0FBZSxRQUFRLENBQUMsR0FBRyxHQUFhOzs7UUFDcEMsTUFBTSxFQUFFLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sRUFBRSxHQUFHLGtCQUFRLENBQUMsZUFBZSxDQUFDO1lBQ2hDLEtBQUssRUFBRSxZQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO1lBQzlCLFNBQVMsRUFBRSxRQUFRO1NBQ3RCLENBQUMsQ0FBQzs7WUFDSCxLQUF5QixlQUFBLE9BQUEsY0FBQSxFQUFFLENBQUEsUUFBQSxnRUFBRSxDQUFDO2dCQUFMLGtCQUFFO2dCQUFGLFdBQUU7Z0JBQWhCLE1BQU0sSUFBSSxLQUFBLENBQUE7Z0JBQ2pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQztvQkFBRSxTQUFTO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDOzs7Ozs7Ozs7O0NBQ0o7QUFFRCxNQUFNLEtBQUssR0FBRztJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtDQUNYLENBQUE7QUFFRCxrQkFBZSxLQUFLLENBQUMifQ==
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
import fs from "fs";
import path from "path";
import readline from "readline";
import jsPure from "../index";
import fnParam from "../param";
function string(key, ...defaultValue) {
    const value = process.env[key] || fnParam.string(defaultValue);
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
        const fp = path.resolve(...str);
        if (!fs.existsSync(fp)) {
            throw new jsPure.JsError(`not found env file: path=${fp}`);
        }
        const rl = readline.createInterface({
            input: fs.createReadStream(fp),
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
                console.log(`env: ${ls[0]}=${ls[1]}`);
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
export default fnEnv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9lbnYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUNwQixPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFFL0IsU0FBUyxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsWUFBc0I7SUFDbEQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9ELElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsUUFBbUI7SUFDaEQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDZixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7YUFBTSxDQUFDO1lBQ0osT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEtBQUssS0FBSyxNQUFNLENBQUM7QUFDNUIsQ0FBQztBQUVELFNBQWUsUUFBUSxDQUFDLEdBQUcsR0FBYTs7O1FBQ3BDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3JCLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFFRCxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1lBQ2hDLEtBQUssRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO1lBQzlCLFNBQVMsRUFBRSxRQUFRO1NBQ3RCLENBQUMsQ0FBQzs7WUFFSCxLQUF5QixlQUFBLE9BQUEsY0FBQSxFQUFFLENBQUEsUUFBQSxnRUFBRSxDQUFDO2dCQUFMLGtCQUFFO2dCQUFGLFdBQUU7Z0JBQWhCLE1BQU0sSUFBSSxLQUFBLENBQUE7Z0JBQ2pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQztvQkFBRSxTQUFTO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLENBQUM7Ozs7Ozs7Ozs7Q0FDSjtBQUVELE1BQU0sS0FBSyxHQUFHO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0NBQ1gsQ0FBQztBQUVGLGVBQWUsS0FBSyxDQUFDIn0=
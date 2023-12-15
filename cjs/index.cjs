"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
const param_1 = __importDefault(require("./param"));
const path_1 = __importDefault(require("./path"));
var jsPure;
(function (jsPure) {
    jsPure.env = env_1.default;
    jsPure.param = param_1.default;
    jsPure.path = path_1.default;
    class JsError extends Error {
        constructor(message, ...msgs) {
            super(message);
            if (msgs.length == 0) {
                this.msg = {
                    en: message,
                };
            }
            this.msg = msgs[0];
            if (!this.msg.en)
                this.msg.en = message;
        }
        getMsg(lang) {
            if (this.msg.hasOwnProperty(lang))
                return this.msg[lang];
            if (this.msg.hasOwnProperty("en"))
                return this.msg["en"];
            return "not found error msg";
        }
    }
    jsPure.JsError = JsError;
})(jsPure || (jsPure = {}));
exports.default = jsPure;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsb0RBQThCO0FBQzlCLGtEQUE0QjtBQUU1QixJQUFVLE1BQU0sQ0E2QmY7QUE3QkQsV0FBVSxNQUFNO0lBQ0MsVUFBRyxHQUFHLGFBQUssQ0FBQztJQUNaLFlBQUssR0FBRyxlQUFPLENBQUM7SUFDaEIsV0FBSSxHQUFHLGNBQU0sQ0FBQztJQUszQixNQUFhLE9BQVEsU0FBUSxLQUFLO1FBRzlCLFlBQVksT0FBZSxFQUFFLEdBQUcsSUFBYztZQUMxQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUc7b0JBQ1AsRUFBRSxFQUFFLE9BQU87aUJBQ2QsQ0FBQztZQUNOLENBQUM7WUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM1QyxDQUFDO1FBRU0sTUFBTSxDQUFDLElBQWE7WUFDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQVEsSUFBSSxDQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxPQUFPLHFCQUFxQixDQUFDO1FBQ2pDLENBQUM7S0FDSjtJQXBCWSxjQUFPLFVBb0JuQixDQUFBO0FBQ0wsQ0FBQyxFQTdCUyxNQUFNLEtBQU4sTUFBTSxRQTZCZjtBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9
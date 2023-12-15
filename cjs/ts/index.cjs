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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUEwQjtBQUMxQixvREFBOEI7QUFDOUIsa0RBQTRCO0FBRTVCLElBQVUsTUFBTSxDQTZCZjtBQTdCRCxXQUFVLE1BQU07SUFDQyxVQUFHLEdBQUcsYUFBSyxDQUFDO0lBQ1osWUFBSyxHQUFHLGVBQU8sQ0FBQztJQUNoQixXQUFJLEdBQUcsY0FBTSxDQUFDO0lBSzNCLE1BQWEsT0FBUSxTQUFRLEtBQUs7UUFHOUIsWUFBWSxPQUFlLEVBQUUsR0FBRyxJQUFjO1lBQzFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNmLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRztvQkFDUCxFQUFFLEVBQUUsT0FBTztpQkFDZCxDQUFDO1lBQ04sQ0FBQztZQUVELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzVDLENBQUM7UUFFTSxNQUFNLENBQUMsSUFBYTtZQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFBRSxPQUFRLElBQUksQ0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xFLE9BQU8scUJBQXFCLENBQUM7UUFDakMsQ0FBQztLQUNKO0lBcEJZLGNBQU8sVUFvQm5CLENBQUE7QUFDTCxDQUFDLEVBN0JTLE1BQU0sS0FBTixNQUFNLFFBNkJmO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=
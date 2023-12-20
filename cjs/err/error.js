"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsError = void 0;
class JsError extends Error {
    constructor(message, args, msg) {
        message = `${message}: ${JSON.stringify(args || {})}`;
        super(message);
        if (!msg) {
            this.msg = {
                en: message,
            };
            return;
        }
        this.msg = Object.assign({ en: message }, msg);
    }
    getMsg(lang) {
        if (this.msg.hasOwnProperty(lang))
            return this.msg[lang];
        if (this.msg.hasOwnProperty("en"))
            return this.msg["en"];
        return "not found error msg";
    }
}
exports.JsError = JsError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9lcnIvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsTUFBYSxPQUFRLFNBQVEsS0FBSztJQUc5QixZQUFZLE9BQWUsRUFBRSxJQUFhLEVBQUUsR0FBWTtRQUNwRCxPQUFPLEdBQUcsR0FBRyxPQUFPLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDUCxJQUFJLENBQUMsR0FBRyxHQUFHO2dCQUNQLEVBQUUsRUFBRSxPQUFPO2FBQ2QsQ0FBQztZQUNGLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLEdBQUcsbUJBQ0osRUFBRSxFQUFFLE9BQU8sSUFDUixHQUFHLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBYTtRQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQVEsSUFBSSxDQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQVEsSUFBSSxDQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7Q0FDSjtBQXpCRCwwQkF5QkMifQ==
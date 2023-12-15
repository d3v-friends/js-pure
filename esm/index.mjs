import fnEnv from "./env";
import fnParam from "./param";
import fnPath from "./path";
var jsPure;
(function (jsPure) {
    jsPure.env = fnEnv;
    jsPure.param = fnParam;
    jsPure.path = fnPath;
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
export default jsPure;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixJQUFVLE1BQU0sQ0E2QmY7QUE3QkQsV0FBVSxNQUFNO0lBQ0MsVUFBRyxHQUFHLEtBQUssQ0FBQztJQUNaLFlBQUssR0FBRyxPQUFPLENBQUM7SUFDaEIsV0FBSSxHQUFHLE1BQU0sQ0FBQztJQUszQixNQUFhLE9BQVEsU0FBUSxLQUFLO1FBRzlCLFlBQVksT0FBZSxFQUFFLEdBQUcsSUFBYztZQUMxQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUc7b0JBQ1AsRUFBRSxFQUFFLE9BQU87aUJBQ2QsQ0FBQztZQUNOLENBQUM7WUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM1QyxDQUFDO1FBRU0sTUFBTSxDQUFDLElBQWE7WUFDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQVEsSUFBSSxDQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxPQUFPLHFCQUFxQixDQUFDO1FBQ2pDLENBQUM7S0FDSjtJQXBCWSxjQUFPLFVBb0JuQixDQUFBO0FBQ0wsQ0FBQyxFQTdCUyxNQUFNLEtBQU4sTUFBTSxRQTZCZjtBQUVELGVBQWUsTUFBTSxDQUFDIn0=
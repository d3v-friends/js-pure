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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFNUIsSUFBVSxNQUFNLENBNkJmO0FBN0JELFdBQVUsTUFBTTtJQUNDLFVBQUcsR0FBRyxLQUFLLENBQUM7SUFDWixZQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ2hCLFdBQUksR0FBRyxNQUFNLENBQUM7SUFLM0IsTUFBYSxPQUFRLFNBQVEsS0FBSztRQUc5QixZQUFZLE9BQWUsRUFBRSxHQUFHLElBQWM7WUFDMUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHO29CQUNQLEVBQUUsRUFBRSxPQUFPO2lCQUNkLENBQUM7WUFDTixDQUFDO1lBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDNUMsQ0FBQztRQUVNLE1BQU0sQ0FBQyxJQUFhO1lBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQVEsSUFBSSxDQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFBRSxPQUFRLElBQUksQ0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEUsT0FBTyxxQkFBcUIsQ0FBQztRQUNqQyxDQUFDO0tBQ0o7SUFwQlksY0FBTyxVQW9CbkIsQ0FBQTtBQUNMLENBQUMsRUE3QlMsTUFBTSxLQUFOLE1BQU0sUUE2QmY7QUFFRCxlQUFlLE1BQU0sQ0FBQyJ9
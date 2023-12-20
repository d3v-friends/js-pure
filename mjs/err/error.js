export class JsError extends Error {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9lcnIvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLE9BQVEsU0FBUSxLQUFLO0lBRzlCLFlBQVksT0FBZSxFQUFFLElBQWEsRUFBRSxHQUFZO1FBQ3BELE9BQU8sR0FBRyxHQUFHLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3RELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNQLElBQUksQ0FBQyxHQUFHLEdBQUc7Z0JBQ1AsRUFBRSxFQUFFLE9BQU87YUFDZCxDQUFDO1lBQ0YsT0FBTztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsR0FBRyxtQkFDSixFQUFFLEVBQUUsT0FBTyxJQUNSLEdBQUcsQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBUSxJQUFJLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztDQUNKIn0=
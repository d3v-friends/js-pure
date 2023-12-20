export namespace fnCsv {
    export function strToCsv(ls: string[]): string {
        let res = "";
        for (let elem of ls) {
            res += `${elem},`;
        }
        return res.slice(0, res.length - 1);
    }

    export function csvToStr(str: string): string[] {
        return str
            .replace(/ /g, "")
            .split(",")
            .filter(v => v !== "")
            .map(v => v.trim());
    }
}

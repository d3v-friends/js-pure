export const fnCsv = {
    strToCsv: (ls: string[]): string => {
        let res = "";
        for (let elem of ls) {
            res += `${elem},`;
        }
        return res.slice(0, res.length - 1);
    },
    csvToStr: (str: string): string[] => {
        return str
            .replace(/ /g, "")
            .split(",")
            .filter(v => v !== "")
            .map(v => v.trim());
    },
};

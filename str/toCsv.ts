export default function (ls: string[]): string {
    let res = "";
    for (let elem of ls) {
        res += `${elem},`;
    }
    return res.slice(0, res.length - 1);
}

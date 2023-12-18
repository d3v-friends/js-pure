export default function (msg: string, ...params: object[]): string {
    if (params.length === 0) {
        return msg;
    }
    return `${msg}: ${JSON.stringify(params[0])}`;
}

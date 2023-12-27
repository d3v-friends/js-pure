export const fnParam = {
    bool: (v: boolean[], ...defaults: boolean[]): boolean => {
        if (v.length === 0) {
            if (defaults.length === 0) return false;
            return defaults[0];
        }
        return v[0];
    },
    string: (v: string[], ...defaults: string[]): string => {
        if (v.length === 0) {
            if (defaults.length === 0) return "";
            return defaults[0];
        }
        return v[0];
    },
};

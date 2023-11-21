export const MPT_REGXS = [
    /^092[0,1,2,3,4,5,6]\d{6,8}$/,
    /^094[0,1,2,3,4,5,6,7,8,9]\d{7,8}$/,
    /^095[0,1,2,3,4,5,6]\d{6}$/,
    /^097[3,0,1]\d{5,7}$/,
    /^098[1,3,4,5,6,7,8,9]\d{6,8}$/,
    /^099[1]\d{7}$/
];
export const OOREDOO_REGXS = [
    /^099[4,5,6,7,8]\d{8}$/
];
export const ATOM_REGXS = [
    /^097[4,5,6,7,8,9]\d{8}$/
];
export const MEC_TEL_REGXS = [
    /^093[0,1,2,3,4,5,6,7,8,9]\d{7,8}$/
];
export const MYTEL_REGXS = [
    /^096[6,7,8,9]\d{8}$/
];
export var Operator;
(function (Operator) {
    Operator[Operator["MPT"] = 0] = "MPT";
    Operator[Operator["ATOM"] = 1] = "ATOM";
    Operator[Operator["OOREDOO"] = 2] = "OOREDOO";
    Operator[Operator["MECTEL"] = 3] = "MECTEL";
    Operator[Operator["MYTEL"] = 4] = "MYTEL";
    Operator[Operator["INVALID"] = 5] = "INVALID";
})(Operator || (Operator = {}));

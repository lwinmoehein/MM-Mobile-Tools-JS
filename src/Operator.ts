export const MPT_REGXS: RegExp[] = [
        /^092[0,1,2,3,4,5,6]\d{6,8}$/,
        /^094[0,1,2,3,4,5,6,7,8,9]\d{7,8}$/,
        /^095[0,1,2,3,4,5,6]\d{6}$/,
        /^097[3,0,1]\d{5,7}$/,
        /^098[1,3,4,5,6,7,8,9]\d{6,8}$/,
        /^099[1]\d{7}$/
];

export const OOREDOO_REGXS: RegExp[] = [
        /^099[4,5,6,7,8]\d{8}$/
];

export const ATOM_REGXS: RegExp[] = [
        /^097[4,5,6,7,8,9]\d{8}$/
];

export const MEC_TEL_REGXS: RegExp[] = [
        /^093[0,1,2,3,4,5,6,7,8,9]\d{7,8}$/
];

export const MYTEL_REGXS: RegExp[] = [
        /^096[6,7,8,9]\d{8}$/
];


export enum Operator {
	MPT,
	ATOM,
	OOREDOO,
	MECTEL,
	MYTEL,
	INVALID
}

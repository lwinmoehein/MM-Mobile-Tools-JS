import {MMOperator,INVALID,MPT,OOREDOO,ATOM,MECTEL,MYTEL} from './MMOperator.js'
import {MPT_REGXS,OOREDOO_REGXS,ATOM_REGXS,MYTEL_REGXS,MEC_TEL_REGXS} from './MMOperatorRegs.js'


function doesStringMatchAnyRegex(inputString: string, regexArray: RegExp[]): boolean {
	for (const regex of regexArray) {
		if (regex.test(inputString)) {
			return true;
		}
	}
	return false;
}

export const getOperator= (number: string): MMOperator => {

        if (doesStringMatchAnyRegex(number, MPT_REGXS)) return MPT

        if (doesStringMatchAnyRegex(number, OOREDOO_REGXS)) return OOREDOO

        if (doesStringMatchAnyRegex(number, ATOM_REGXS)) return ATOM 

        if (doesStringMatchAnyRegex(number, MEC_TEL_REGXS)) return MECTEL

        if (doesStringMatchAnyRegex(number, MYTEL_REGXS)) return MYTEL

        return INVALID
}

export const isValidPhone = (number:string):boolean => {
	return getOperator(number)!==INVALID
}

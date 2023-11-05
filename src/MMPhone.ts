import { type Operator,INVALID,MPT,OOREDOO,ATOM,MECTEL,MYTEL } from './Operator.js';
import { MPT_REGXS,OOREDOO_REGXS,ATOM_REGXS,MYTEL_REGXS,MEC_TEL_REGXS } from './Operator.js';


function doesStringMatchAnyRegex(inputString: string, regexArray: RegExp[]): boolean {
	for (const regex of regexArray) {
		if (regex.test(inputString)) {
			return true;
		}
	}
	return false;
}

export default class MMPhone {

	isValidPhone(phoneNumber:string):boolean{
		return this.getOperator(phoneNumber)!==INVALID;
	}

	getOperator(phoneNumber:string):Operator{
		if (doesStringMatchAnyRegex(phoneNumber, MPT_REGXS)) return MPT;

       		if (doesStringMatchAnyRegex(phoneNumber, OOREDOO_REGXS)) return OOREDOO;

        	if (doesStringMatchAnyRegex(phoneNumber, ATOM_REGXS)) return ATOM; 

        	if (doesStringMatchAnyRegex(phoneNumber, MEC_TEL_REGXS)) return MECTEL;

        	if (doesStringMatchAnyRegex(phoneNumber, MYTEL_REGXS)) return MYTEL;

        	return INVALID;
	}
}



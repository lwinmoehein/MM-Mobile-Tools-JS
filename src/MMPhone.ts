import { Operator } from './Operator.js';
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

	isValid(phoneNumber:string):boolean{
		return this.getOperator(phoneNumber)!==Operator.INVALID;
	}

	getOperator(phoneNumber:string):Operator{
		if (doesStringMatchAnyRegex(phoneNumber, MPT_REGXS)) return Operator.MPT;

       		if (doesStringMatchAnyRegex(phoneNumber, OOREDOO_REGXS)) return Operator.OOREDOO;

        	if (doesStringMatchAnyRegex(phoneNumber, ATOM_REGXS)) return Operator.ATOM; 

        	if (doesStringMatchAnyRegex(phoneNumber, MEC_TEL_REGXS)) return Operator.MECTEL;

        	if (doesStringMatchAnyRegex(phoneNumber, MYTEL_REGXS)) return Operator.MYTEL;

        	return Operator.INVALID;
	}
}



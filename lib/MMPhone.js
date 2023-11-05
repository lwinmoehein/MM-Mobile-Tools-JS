import { Operator } from './Operator.js';
import { MPT_REGXS, OOREDOO_REGXS, ATOM_REGXS, MYTEL_REGXS, MEC_TEL_REGXS } from './Operator.js';
function doesStringMatchAnyRegex(inputString, regexArray) {
    for (const regex of regexArray) {
        if (regex.test(inputString)) {
            return true;
        }
    }
    return false;
}
export default class MMPhone {
    isValidPhone(phoneNumber) {
        return this.getOperator(phoneNumber) !== Operator.INVALID;
    }
    getOperator(phoneNumber) {
        if (doesStringMatchAnyRegex(phoneNumber, MPT_REGXS))
            return Operator.MPT;
        if (doesStringMatchAnyRegex(phoneNumber, OOREDOO_REGXS))
            return Operator.OOREDOO;
        if (doesStringMatchAnyRegex(phoneNumber, ATOM_REGXS))
            return Operator.ATOM;
        if (doesStringMatchAnyRegex(phoneNumber, MEC_TEL_REGXS))
            return Operator.MECTEL;
        if (doesStringMatchAnyRegex(phoneNumber, MYTEL_REGXS))
            return Operator.MYTEL;
        return Operator.INVALID;
    }
}

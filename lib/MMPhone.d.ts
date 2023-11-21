import { Operator } from './Operator.js';
export default class MMPhone {
    isValid(phoneNumber: string): boolean;
    getOperator(phoneNumber: string): Operator;
}

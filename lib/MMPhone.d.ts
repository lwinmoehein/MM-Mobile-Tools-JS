import { type Operator } from './Operator.js';
export default class MMPhone {
    isValidPhone(phoneNumber: string): boolean;
    getOperator(phoneNumber: string): Operator;
}

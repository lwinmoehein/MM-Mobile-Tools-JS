import mmphone from '../src/index';
import { Operator } from '../src/Operator';

describe('Phone Number validation checks', () => {
	test('Should return true for valid MPT phone number', () => {
		expect(mmphone.getOperator("09440813588")).toBe(Operator.MPT);
	});
	test('Should return true for valid ATOM phone number', () => {
		expect(mmphone.getOperator("097411739911")).toBe(Operator.ATOM);
	});
	test('Should return true for valid Ooredoo phone number', () => {
		expect(mmphone.getOperator("099411739911")).toBe(Operator.OOREDOO);
	});
	test('Should return true for valid Mytel phone number', () => {
		expect(mmphone.getOperator("096611739911")).toBe(Operator.MYTEL);
	});
	test('Should return true for valid MECTel phone number', () => {
		expect(mmphone.getOperator("09301173991")).toBe(Operator.MECTEL);
	});
	test('Should return true  for invalid phone number', () => {
		expect(mmphone.getOperator("0911223344881")).toBe(Operator.INVALID);
	});

});

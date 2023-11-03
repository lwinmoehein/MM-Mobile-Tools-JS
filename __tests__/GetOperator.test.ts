import { getOperator } from '../src/MMPhoneValidator';
import { MPT,ATOM,OOREDOO,MYTEL,MECTEL } from '../src/MMOperator';

describe('Phone Number validation checks', () => {
	test('Should return true for valid MPT phone number', () => {
		expect(getOperator("09440813588")).toBe(MPT);
	});
	test('Should return true for valid ATOM phone number', () => {
		expect(getOperator("09741173991")).toBe(ATOM);
	});
	test('Should return true for valid Ooredoo phone number', () => {
		expect(getOperator("09941173991")).toBe(OOREDOO);
	});
	test('Should return true for valid Mytel phone number', () => {
		expect(getOperator("09661173991")).toBe(MYTEL);
	});
	test('Should return true for valid MECTel phone number', () => {
		expect(getOperator("09301173991")).toBe(MECTEL);
	});
});

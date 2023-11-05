import mmphone from '../src/index';
import { MPT,ATOM,OOREDOO,MYTEL,MECTEL } from '../src/Operator';

describe('Phone Number validation checks', () => {
	test('Should return true for valid MPT phone number', () => {
		expect(mmphone.getOperator("09440813588")).toBe(MPT);
	});
	test('Should return true for valid ATOM phone number', () => {
		expect(mmphone.getOperator("09741173991")).toBe(ATOM);
	});
	test('Should return true for valid Ooredoo phone number', () => {
		expect(mmphone.getOperator("09941173991")).toBe(OOREDOO);
	});
	test('Should return true for valid Mytel phone number', () => {
		expect(mmphone.getOperator("09661173991")).toBe(MYTEL);
	});
	test('Should return true for valid MECTel phone number', () => {
		expect(mmphone.getOperator("09301173991")).toBe(MECTEL);
	});
});

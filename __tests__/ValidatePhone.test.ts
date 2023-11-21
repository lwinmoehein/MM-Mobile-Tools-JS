import mmphone from '../src/index';

describe('Phone Number validation checks', () => {
	test('Should return true for valid MPT phone number', () => {
		expect(mmphone.isValid("09440813588")).toBe(true);
	});
	test('Should return true for valid ATOM phone number', () => {
		expect(mmphone.isValid("097411739911")).toBe(true);
	});
	test('Should return true for valid Ooredoo phone number', () => {
		expect(mmphone.isValid("099411739911")).toBe(true);
	});
	test('Should return true for valid Mytel phone number', () => {
		expect(mmphone.isValid("096611739911")).toBe(true);
	});
	test('Should return true for valid MECTel phone number', () => {
		expect(mmphone.isValid("09301173991")).toBe(true);
	});
});


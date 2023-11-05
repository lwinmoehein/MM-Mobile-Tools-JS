import mmphone from '../src/index';

describe('Phone Number validation checks', () => {
	test('Should return true for valid MPT phone number', () => {
		expect(mmphone.isValidPhone("09440813588")).toBe(true);
	});
	test('Should return true for valid ATOM phone number', () => {
		expect(mmphone.isValidPhone("09741173991")).toBe(true);
	});
	test('Should return true for valid Ooredoo phone number', () => {
		expect(mmphone.isValidPhone("09941173991")).toBe(true);
	});
	test('Should return true for valid Mytel phone number', () => {
		expect(mmphone.isValidPhone("09661173991")).toBe(true);
	});
	test('Should return true for valid MECTel phone number', () => {
		expect(mmphone.isValidPhone("09301173991")).toBe(true);
	});
});


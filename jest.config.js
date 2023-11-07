export default {
	testEnvironment: 'node',
	preset:"ts-jest",
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleDirectories: [
		"node_modules","src"
	],
	extensionsToTreatAsEsm: ['.ts'],
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.ts"], // Adjust this to match your source files.
	coverageDirectory: "coverage",
	coverageReporters: ["lcov", "text"]
};

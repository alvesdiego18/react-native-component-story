const config = {
  preset: "react-native",
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["./setup-jest.js"],
  moduleDirectories: ["node_modules", "<rootDir>/src/"],
  transformIgnorePatterns: ["node_modules/?!(@gol-smiles)"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    ".*/src/.*\\.d\\.ts",
    "node_modules",
    "types.ts",
    "src/hooks/*",
    "src/utils/*",
    "src/assets/*",
    "src/tests/assets/*",
  ],
  testResultsProcessor: "jest-sonar-reporter",
  collectCoverage: true,
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "/node_modules", "/dist"],
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{ts,tsx}",
    "!/*/.d.ts",
    "!<rootDir>/src/index.ts",
  ],
  verbose: true,
  moduleNameMapper: {
    "@/tests/(.*)": "<rootDir>/src/tests/$1",
    "@/(.*)": "<rootDir>/src/$1",
  },
};

module.exports = config;

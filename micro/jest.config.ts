import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
    preset: "ts-jest",
    rootDir: "./",
    testEnvironment: "node",
    verbose: true,
    automock: false,
    testMatch: ["**/*.test.ts", "**/*.spec.ts"],
    coverageDirectory: "./coverage",
    coverageReporters: ["text", "html", "json"],
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
};

export default jestConfig;

const { makeJestConfig, testMatchDefault } = require('../index');

describe('Main config', () => {
  it('Runs with defaults', () => {
    expect(makeJestConfig()).toMatchInlineSnapshot(`
      Object {
        "clearMocks": true,
        "collectCoverage": true,
        "collectCoverageFrom": Array [
          "./src/**.js",
          "!**/__tests__",
          "!/node_modules",
        ],
        "coverageDirectory": "coverage",
        "coverageReporters": Array [
          "json",
          "text",
          "html",
        ],
        "coverageThreshold": undefined,
        "moduleNameMapper": Object {
          "\\\\.(css|less|scss)$": "identity-obj-proxy",
        },
        "testMatch": Array [
          "**/__tests__/*.(test|spec|jest).js",
        ],
        "testPathIgnorePatterns": Array [
          "__tests__/(setup|testUtils).js",
        ],
        "verbose": true,
      }
    `);
  });

  it('collectCoverage = false does not include any coverage properties', () => {
    expect(makeJestConfig({ collectCoverage: false })).toMatchInlineSnapshot(`
      Object {
        "clearMocks": true,
        "moduleNameMapper": Object {
          "\\\\.(css|less|scss)$": "identity-obj-proxy",
        },
        "testMatch": Array [
          "**/__tests__/*.(test|spec|jest).js",
        ],
        "testPathIgnorePatterns": Array [
          "__tests__/(setup|testUtils).js",
        ],
        "verbose": true,
      }
    `);
  });

  it('can replace array fields', () => {
    const testMatch = ['some regex'];
    expect(makeJestConfig({ testMatch }).testMatch).toEqual(testMatch);
  });

  it('can merge array fields', () => {
    const myTestMatch = ['some regex'];
    const testMatch = [...testMatchDefault, ...myTestMatch];
    expect(makeJestConfig({ testMatch }).testMatch).toEqual(testMatch);
  });
});

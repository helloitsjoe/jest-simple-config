# jest-simple-config

Generates a Jest config with simple defaults and extendable options.

## Installation

Install as a dev dependency:

```
npm i -D jest-simple-config
```

## Basic Usage

Create a new file `jest.config.js` at the root of your project:

```js
// jest.config.js
const { makeJestConfig } = require('jest-simple-config');
module.exports = makeJestConfig();
```

That's it!

This will give you a basic Jest config, equivalent to the following:

```js
const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**.js', '!**/__tests__', '!/node_modules'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'text', 'html'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['**/__tests__/*.(test|spec|jest).js'],
  testPathIgnorePatterns: ['__tests__/(setup|testUtils).js'],
  verbose: true,
};
```

`collectCoverage` is true by default. If you don't want a coverage report, setting that option to false will remove the other coverage fields:

```js
const config = makeJestConfig({ collectCoverage: false });
```

will give you the following config:

```js
{
  clearMocks: true,
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['**/__tests__/*.(test|spec|jest).js'],
  testPathIgnorePatterns: ['__tests__/(setup|testUtils).js'],
  verbose: true,
};
```

// TODO: finish this

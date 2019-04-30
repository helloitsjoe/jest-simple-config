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
// webpack.config.js
const { makeJestConfig } = require('jest-simple-config');
module.exports = makeJestConfig();
```

That's it!

This will give you a basic Jest config, equivalent to the following:

```js
const config = {
  clearMocks: true,
  // TODO: Finish this
};
```

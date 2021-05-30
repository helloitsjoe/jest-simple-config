const { makeJestConfig } = require('./index');

// Undefined default testEnvironment uses jest defaults
module.exports = makeJestConfig({ testEnvironment: 'jsdom' });

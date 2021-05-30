const { makeJestConfig, defaultCollectCoverageFrom } = require('./index');

module.exports = makeJestConfig({ collectCoverageFrom: ['./index.js'] });

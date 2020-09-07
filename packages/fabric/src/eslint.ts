const reactRules = require('./rules/react')
const importRules = require('./rules/import')
const jsxRules = require('./rules/jsx')
const unicornRules = require('./rules/unicorn')
const esRules = require('./rules/es')

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: [
    'eslint-comments',
    'jest',
    'unicorn',
    'react-hooks',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    ...importRules,
    ...unicornRules,
    ...esRules,
    ...reactRules,
    ...jsxRules,
  },
};

export {};

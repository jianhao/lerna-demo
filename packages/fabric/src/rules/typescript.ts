const esRules = require('./es')

/**
 * π https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 * π https://github.com/iamturns/eslint-config-airbnb-typescript
 */
module.exports = {
  '@typescript-eslint/member-delimiter-style': [2, {
    multiline: {
      delimiter: 'none',
      requireLast: false
    },
    singleline: {
      delimiter: 'semi',
      requireLast: false
    },
  }],
  '@typescript-eslint/no-non-null-assertion': 2,

  // εΊδΊ es
  'semi': 0,
  '@typescript-eslint/semi': esRules.semi,
  'space-before-function-paren': 0,
  '@typescript-eslint/space-before-function-paren': esRules['space-before-function-paren'],
}

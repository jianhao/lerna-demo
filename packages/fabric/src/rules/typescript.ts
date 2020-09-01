const esRules = require('./es')

/**
 * 🚀 https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 * 🚀 https://github.com/iamturns/eslint-config-airbnb-typescript
 */
module.exports = {
  // 接口名称首字母 I
  '@typescript-eslint/interface-name-prefix': [0, {
    prefixWithI: 'always'
  }],
  '@typescript-eslint/member-delimiter-style': [0, {
    delimiter: 'none'
  }],
  '@typescript-eslint/no-non-null-assertion': 2,

  // 基于 es
  'semi': 0,
  '@typescript-eslint/semi': esRules.semi,
  'space-before-function-paren': 0,
  '@typescript-eslint/space-before-function-paren': esRules['space-before-function-paren'],
  'no-extra-semi': 0,
  '@typescript-eslint/no-extra-semi': esRules['no-extra-semi'],
}

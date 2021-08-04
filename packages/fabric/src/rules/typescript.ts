const esRules = require('./es')

/**
 * 🚀 https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 * 🚀 https://github.com/iamturns/eslint-config-airbnb-typescript
 */
module.exports = {
  // 接口名称首字母 I
  '@typescript-eslint/interface-name-prefix': [2, {
    prefixWithI: 'always'
  }],
  '@typescript-eslint/member-delimiter-style': [2, {
    multiline: {
      delimiter: 'none',
      requireLast: false
    },
    singleline: {
      delimiter: 'semi',
      requireLast: true
    },
  }],
  '@typescript-eslint/no-non-null-assertion': 2,
}

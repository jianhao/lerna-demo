/**
 * 🚀 https://github.com/benmosher/eslint-plugin-import
 */
module.exports = {
  // 禁止循环引用
  'import/no-cycle': 2,
  // 对一些特殊路径解析
  'import/no-unresolved': [
    2,
    {
      ignore: ['^@/', '^@@/'],
      caseSensitive: true,
      commonjs: true,
    },
  ],
  // 顺序的 import
  'import/order': 2,
  // 优先export default => off
  'import/prefer-default-export': 0,
}

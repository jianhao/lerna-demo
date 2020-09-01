module.exports = {
  extends: [require.resolve('../lib/ts-eslint')],
  parserOptions: {
    tsconfigRootDir: '.',
    project: './tsconfig.eslint.json',
    createDefaultProgram: true,
  },
  rules: {},
}

# @mhc/fabric

lint 配置集合，方便快速配置项目的 lint 。

Why fabric？
lint + lint + lint = fabric

## 开发记录

- [x] eslint 配置
- [ ] stylelint 配置
- [ ] prettier 配置
- [ ] fix hooks lint (possible) bug

## 使用

**下载**

```shell
yarn add @mhc/fabric -D
```

**在项目中使用**

**`.eslintrc.js`**

`parserOptions.project` 配置是必须的，可以指向你项目中的 `tsconfig.json` 或者 `jsconfig.json` , 或者如下，再创建一个 `tsconfig.eslint.json` 。

更多的配置可以参考 [typescript-eslint-parser 文档](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration) 中的 `parserOptions`

不过请注意 `parserOptions.createDefaultProgram` 配置，设置为 `true` 将会带来巨大的性能消耗，不推荐开启。（本项目也是为了更流畅的开发体验，不得不让用户手动配置 `parserOptions.project`）

```javascript
module.exports = {
  extends: [require.resolve('@mhc/fabric/lib/eslint')],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    // custom rules
  },
}
```

**`tsconfig.eslint.json`**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "allowJs": true,
    "jsx": "react",
    "resolveJsonModule": true
  },
  "include": [
    "**/*.js",
    "**/*.ts",
    "**/*.jsx",
    "**/*.d.ts",
    "**/*.tsx"
  ],
}
```


## 推荐配置

建议搭配 `husky` `lint-staged` 食用更佳

```shell
yarn add husky lint-staged -D
```

`package.json`

```json
{
  // ...
  "scripts": {
    "lint": "eslint --ext .js,.ts,jsx,tsx ./src",
    "lint:fix": "eslint --fix --ext .js,.ts,jsx,tsx ./src",
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{.js,.ts,jsx,tsx}": [
      "eslint --fix"
    ]
  }
}
```

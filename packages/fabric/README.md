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

```javascript
module.exports = {
  extends: [require.resolve('@mhc/fabric/lib/eslint')],
  rules: {
    // custom rules
  },
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
      "eslint"
    ]
  }
}
```

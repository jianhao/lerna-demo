# myfabric

lint 配置集合，方便快速配置项目的 lint 。

Why fabric？
lint + lint + lint = fabric

## 开发记录

- [x] eslint 配置
- [x] stylelint 配置
- [x] prettier 配置 ❌ 根据团队投票，决定不再使用。所以也不再支持 prettier，配置仍然保留
- [x] 部分项目安装依赖冲突，导致下载了旧版本的 eslint-pulgin-xxx , 见下方[解决方案](#问题及解决方案)

## 使用

**下载**

```shell
yarn add myfabric -D
```

**在项目中使用**

```
|- .eslintrc.js
|- .stylelintrc.js
|- package.json
|- tsconfig.eslint.json (如果需要的话)
```

### `.eslintrc.js`

为了方便 js 项目的配置，继承的 eslintrc 文件分成了两个。`eslint` 和 `ts-eslint`。分别对应 js 项目和 ts 项目的配置



js 项目的配置，适用于绝大部分项目

```javascript
module.exports = {
  extends: [require.resolve('myfabric/lib/eslint')],
  rules: {
    // custom rules
  },
}
```

ts 项目的配置，也兼容项目中 js、jsx 文件的校验，适用于所有项目

```javascript
module.exports = {
  extends: [require.resolve('myfabric/lib/ts-eslint')],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    // custom rules
  },
}
```

`parserOptions.project` 配置是必须的，指向你项目中的 `tsconfig.json`, 或者如下，再创建一个 `tsconfig.eslint.json` 。一般更建议再创建一个，他们 include 的内容可能不同。

```json
// 也可以 "extends": "./tsconfig.json"
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

`parserOptions` 的配置可以参考 [typescript-eslint-parser 文档](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration)

不过请注意 `parserOptions.createDefaultProgram` 配置，设置为 `true` 将会带来巨大的性能消耗，不推荐开启。（本项目也是为了更流畅的开发体验，不得不让用户手动配置 `parserOptions.project`）


### `.stylelintrc.js`

```javascript
module.exports = {
  extends: [require.resolve('myfabric/lib/stylelint')],
  rules: {
  },
};
```

## 推荐配置

### 搭配 `husky` `lint-staged` 食用

```shell
yarn add husky lint-staged -D
```

**`package.json`**

```json
{
  // ...
  "scripts": {
    "lint": "yarn lint:js && yarn lint:style",
    "lint:js": "eslint --ext .js,.ts,jsx,tsx --format=pretty ./src",
    "lint:style": "stylelint \"src/**/*.less\" --syntax less",
    "lint:fix": "eslint --fix --ext .js,.ts,jsx,tsx --format=pretty ./src && stylelint --fix \"src/**/*.less\" --syntax less"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*.{js,ts,jsx,tsx}": [
      "eslint --fix --format=pretty"
    ],
    "**/*.less": [
      "stylelint --syntax less --fix"
    ]
  }
}
```

### 搭配 VSCode 插件食用

安装 `eslint` `stylelint` `EditorConfig for VS Code` 插件


**vscode `config.json`**

```json
// 必备，保存文件时自动格式化文件
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true,
},
```

**在项目中加入配置 `.editorconfig`**

```
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

## ps

机灵一点，所有的配置方式都不是固定的，根据项目灵活调整

## 问题及解决方案

### 项目安装依赖的实际版本不 fabric 的依赖不一致（过时）

**使用 yarn 提供的 resolutions 解决**
强制指定版本

```json
# package.json
"resolutions": {
  "eslint-config-airbnb": "18.2.0",
  "eslint-config-airbnb-base": "14.2.0",
  "eslint-plugin-react-hooks": "4.0.8"
},
```

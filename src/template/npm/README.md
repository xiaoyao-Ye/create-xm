# Base

## Git 提交规范

- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改
- revert: 恢复上一次提交
- ci: 持续集成相关文件修改
- chore: 其他修改

在提交信息中，还有其他信息应该包含在内，例如修改的作用域和简短的描述。建议使用中文描述问题，以便更清楚地了解提交的内容。提交信息的格式应该如下：

```
<type>(<scope>): <subject>
<body>
<footer>
```

其中，type 是提交的类型，scope 是修改的作用域，subject 是提交目的的简短描述。提交信息的主题内容应该描述修改的原因、修改的内容以及开发的思路等信息，页脚注释可以放 Breaking Changes 或 Closed Issues。规范的提交信息能够帮助程序员更好地追溯提交历史，了解发生了什么情况。

## Git

```bash
# 初始化 git
git init
# 更改当前分支名称为 main
git branch -m main
```

创建 `.gitignore` git 忽略项文件

```.gitignore
node_modules
dist
lib
```

## git-cz

> 可选, 看团队接受情况, 自己规范能够提交可不使用这个工具
> 作用: git-cz 是一个 Git 提交注释的格式化工具，能够规范化提交日志，因此在多人协作的项目中，可以根据规范的提交说明快速生成开发日志，方便开发者或用户追踪项目的开发信息和功能特性。使用 git cz 命令代替 git commit 进行提交说明，可以根据预设的选项快速选择提交类型，如 feat，fix，docs 等，同时也可以自定义提交类型。全局安装 git-cz 后，在每次执行提交命令时，可以选择需要提交的类型，以规范化提交日志。

安装

```bash
pnpm i git-cz -D
```

- [ ] TODO: 可设置配置文件跟 @commitlint/cli @commitlint/config-conventional 一起使用等. https://commitlint.js.org/

## commitlint

- [ ] TODO: commitlint https://commitlint.js.org/

## simple-git-hooks

> 作用: 设置 hooks 可以在 git commit 的前后进行代码规范检查格式化等操作.

安装

```bash
pnpm i simple-git-hooks -D
```

## lint-staged

> 作用: 与 git hooks 一起使用, 在提交前 运行 `lint-staged` 只检查和格式化当前提交的文件, 而不是项目内所有文件

```bash
pnpm i lint-staged -D
```

lint-staged.config.cjs

```js
module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": ["prettier --write--parser json"],
  "*.vue": ["eslint --fix", "prettier --write", "stylelint --fix"],
  "*.{scss,less,styl,html}": ["stylelint --fix", "prettier --write"],
  "package.json": ["prettier --write"],
  "*.md": ["prettier --write"],
};
```

## prettier

> 作用: 格式化代码

```bash
pnpm i prettier -D
```

创建 `.prettierrc.json` | `.prettierrc.yml` | `.prettierrc.js` | `.prettier.config.cjs` 配置文件:

```js
// .prettierrc.js
module.exports = {
  // 指定箭头函数参数是否需要用括号括起来，可选值有 `always` 和 `avoid`。 (avoid：省略括号，always：不省略括号)
  arrowParens: "avoid",
  // 指定在对象字面量中括号之间是否需要留有空格，可选值有 `true` 和 `false`。
  bracketSpacing: true,
  // 指定换行符的样式，可选值有 `auto`、`lf`、`crlf` 和 `cr`。
  endOfLine: "auto",
  // 指定 HTML 文件中空格的敏感度，可选值有 `css`、`strict` 和 `ignore`。"css" - 遵守 CSS 显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
  htmlWhitespaceSensitivity: "ignore",
  // 将 > 多行元素放在最后一行的末尾，而不是单独放在下一行 (true：放末尾，false：单独一行)
  bracketSameLine: true,
  // 指定 JSX 元素的 `>` 是否需要与前一个元素放在同一行，可选值有 `true` 和 `false`。
  jsxBracketSameLine: true,
  // 指定 JSX 属性是否使用单引号，可选值有 `true` 和 `false`。
  jsxSingleQuote: false,
  // 指定每行代码的长度，超出长度的代码会被换行。默认值为 `80`。
  printWidth: 130,
  // 指定是否在 Markdown 文件中对每个段落进行换行，可选值有 `always`、`never` 和 `preserve`。
  proseWrap: "preserve",
  // 指定对象字面量中属性名是否需要用引号括起来，可选值有 `as-needed`、`consistent` 和 `preserve`。
  quoteProps: "as-needed",
  // 指定代码中是否需要加上分号，可选值有 `true` 和 `false`。
  semi: true,
  // 指定代码中是否需要使用单引号，可选值有 `true` 和 `false`。
  singleQuote: false,
  // 指定一个制表符的宽度，默认值为 `2`。
  tabWidth: 2,
  // 指定是否在对象和数组字面量中的最后一项后面加上逗号，可选值有 `es5`、`none` 和 `all`。
  trailingComma: "all",
  // 指定是否使用制表符而非空格缩进，默认值为 `false`。
  useTabs: false,

  // 下面一般用不上

  // 指定要使用的解析器，不需要写文件开头的 @prettier
  requirePragma: false,
  // 控制在 Vue 单文件组件中 <script> 和 <style> 标签内的代码缩进方式
  vueIndentScriptAndStyle: false,
  // 可以在文件顶部插入一个特殊标记，指定该文件已使用 Prettier 格式化
  insertPragma: false,
  // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码 (rangeStart：开始，rangeEnd：结束)
  rangeStart: 0,
  rangeEnd: Infinity,
};
```

可配置忽略格式化文件

```.prettierignore
node_modules
package-lock.json
dist
```

## stylelint

> 在一个项目要有统一的规范，需要使用 Eslint+Stylelint+Prettier 来对我们代码质量做检测和修复，需要使用 husky 来做 commit 拦截，需要使用 commitlint。虽然 Prettier 也可以格式化 CSS，但是 Stylelint 可以检查一些 Prettier 无法检查的 CSS 规范问题，因此在一个项目中需要使用 Stylelint 和 Prettier。

```bash
# 公共
pnpm i stylelint stylelint-config-standard stylelint-config-prettier stylelint-config-recess-order stylelint-config-standard-scss -D
# stylelint // 核心
# stylelint-config-standard // 配置stylelint拓展插件
# stylelint-config-prettier // 配置stylelint和prettier兼容
# stylelint-config-recess-order // 配置stylelint css属性书写顺序插件
# stylelint-config-standard-scss // stylelint-config-standard-scss是stylelint-config-standard的一个scss拓展版本，它的作用是配置Stylelint以检查scss文件的代码风格，使得scss文件更加易读易维护。
# vue 项目
pnpm i stylelint-config-html  stylelint-config-recommended-scss stylelint-config-recommended-vue
# "stylelint-config-html": "^1.1.0",
# "stylelint-config-recommended-scss": "^9.0.1",
# "stylelint-config-recommended-vue": "^1.4.0",
```

vue 项目配置

```js
// .stylelintrc.cjs
// @see: https://stylelint.io

module.exports = {
  root: true,
  // 继承某些已有的规则
  extends: [
    "stylelint-config-standard", // 配置 stylelint 拓展插件
    "stylelint-config-standard-scss", // 配置 stylelint scss 插件
    "stylelint-config-recess-order" // 配置 stylelint css 属性书写顺序插件,
    "stylelint-config-html/vue", // 配置 vue 中 template 样式格式化
    "stylelint-config-recommended-vue/scss", // 配置 vue 中 scss 样式格式化
  ],
  overrides: [
    // 扫描 .vue/html 文件中的 <style> 标签内的样式
    {
      files: ["**/*.{vue,html}"],
      customSyntax: "postcss-html"
    }
  ],
  rules: {
    "function-url-quotes": "always", // URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    "color-hex-length": "long", // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    "rule-empty-line-before": "never", // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行)"
    "font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
    "scss/at-import-partial-extension": null, // 解决不能使用 @import 引入 scss 文件
    "property-no-unknown": null, // 禁止未知的属性
    "no-empty-source": null, // 禁止空源码
    "selector-class-pattern": null, // 强制选择器类名的格式
    "value-no-vendor-prefix": null, // 关闭 vendor-prefix (为了解决多行省略 -webkit-box)
    "no-descending-specificity": null, // 不允许较低特异性的选择器出现在覆盖较高特异性的选择器
    "value-keyword-case": null, // 解决在 scss 中使用 v-bind 大写单词报错
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"]
      }
    ]
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"]
};
```

react 项目配置

```js
// @see: https://stylelint.io

module.exports = {
  extends: [
    "stylelint-config-standard", // 配置stylelint拓展插件
    "stylelint-config-prettier", // 配置stylelint和prettier兼容
    "stylelint-config-recess-order", // 配置stylelint css属性书写顺序插件,
  ],
  plugins: ["stylelint-less"], // 配置stylelint less拓展插件
  rules: {
    indentation: null, // 指定缩进空格
    "no-descending-specificity": null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    "function-url-quotes": "always", // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    "string-quotes": "double", // 指定字符串使用单引号或双引号
    "unit-case": null, // 指定单位的大小写 "lower(全小写)"|"upper(全大写)"
    "color-hex-case": "lower", // 指定 16 进制颜色的大小写 "lower(全小写)"|"upper(全大写)"
    "color-hex-length": "long", // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    "rule-empty-line-before": "never", // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行。)"
    "font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
    "block-opening-brace-space-before": "always", // 要求在块的开大括号之前必须有一个空格或不能有空白符 "always(大括号前必须始终有一个空格)"|"never(左大括号之前绝不能有空格)"|"always-single-line(在单行块中的左大括号之前必须始终有一个空格)"|"never-single-line(在单行块中的左大括号之前绝不能有空格)"|"always-multi-line(在多行块中，左大括号之前必须始终有一个空格)"|"never-multi-line(多行块中的左大括号之前绝不能有空格)"
    "property-no-unknown": null, // 禁止未知的属性(true 为不允许)
    "no-empty-source": null, // 禁止空源码
    "declaration-block-trailing-semicolon": null, // 要求或不允许在声明块中使用尾随分号 string："always(必须始终有一个尾随分号)"|"never(不得有尾随分号)"
    "selector-class-pattern": null, // 强制选择器类名的格式
    "value-no-vendor-prefix": null, // 关闭 vendor-prefix(为了解决多行省略 -webkit-box)
    "at-rule-no-unknown": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"],
      },
    ],
  },
};
```

```.stylelintignore
/dist/*
/public/*
public/*
stats.html
```

## eslint

> 作用: 代码检查工具，用来检查你的代码是否符合指定的规范

```bash
# 公共
pnpm i eslint eslint-config-prettier eslint-plugin-prettier -D

# Typescript
pnpm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D

# vue
pnpm i eslint-plugin-prettier eslint-plugin-vue -D

# react
pnpm i eslint-plugin-react eslint-plugin-react-hooks -D

# vite
pnpm i vite-plugin-eslint -D
```

```js
// vue
// @see: http://eslint.cn

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 指定如何解析语法
  parser: "vue-eslint-parser",
  // 优先级低于 parse 的语法解析配置
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 继承某些已有的规则
  extends: ["plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  /**
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
    "prefer-const": "off", // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    "no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
    "no-irregular-whitespace": "off", // 禁止不规则的空白

    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
    "@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
    "@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
    "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
    "@typescript-eslint/ban-types": "off", // 禁止使用特定类型
    "@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    "@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
    "@typescript-eslint/no-empty-function": "off", // 禁止空函数
    "@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
    "@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    "@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
    "@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型

    // vue (https://eslint.vuejs.org/rules)
    "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效。
    "vue/v-slot-style": "error", // 强制执行 v-slot 指令样式
    "vue/no-mutating-props": "off", // 不允许组件 prop的改变
    "vue/no-v-html": "off", // 禁止使用 v-html
    "vue/custom-event-name-casing": "off", // 为自定义事件名称强制使用特定大小写
    "vue/attributes-order": "off", // vue api使用顺序，强制执行属性顺序
    "vue/one-component-per-file": "off", // 强制每个组件都应该在自己的文件中
    "vue/html-closing-bracket-newline": "off", // 在标签的右括号之前要求或禁止换行
    "vue/max-attributes-per-line": "off", // 强制每行的最大属性数
    "vue/multiline-html-element-content-newline": "off", // 在多行元素的内容之前和之后需要换行符
    "vue/singleline-html-element-content-newline": "off", // 在单行元素的内容之前和之后需要换行符
    "vue/attribute-hyphenation": "off", // 对模板中的自定义组件强制执行属性命名样式
    "vue/require-default-prop": "off", // 此规则要求为每个 prop 为必填时，必须提供默认值
    "vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
  },
};
```

```js
// react
// @see: http://eslint.cn

module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  /* 指定如何解析语法 */
  parser: "@typescript-eslint/parser",
  /* 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  /* 继承某些已有的规则 */
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
    "no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
    "prefer-const": "off", // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    "no-irregular-whitespace": "off", // 禁止不规则的空白

    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
    "@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
    "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
    "@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
    "@typescript-eslint/ban-types": "off", // 禁止使用特定类型
    "@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    "@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
    "@typescript-eslint/no-empty-function": "off", // 禁止空函数
    "@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
    "@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    "@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
    "@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型

    // react (https://github.com/jsx-eslint/eslint-plugin-react)
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};
```

忽略文件

```.eslintignore
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
/src/mock/*
stats.html
```

## package.json

```json
  "scripts": {
    // 初始化: package.json 文件配置如下 scripts, 当 install 的时候会初始化 `simple-git-hooks`
    "postinstall": "simple-git-hooks",
    "lint-staged": "lint-staged",
    // 本地提交, 需要自己 git add 指定文件 后运行命令
    "commit": "git-cz",
    // 远程提交, 一次将当前所有更改 commit 并 push 到远程
    "commit:origin": "git pull && git add . && git-cz && git push",
    // 这几个lint命令 react 项目只需将 vue 相关的删除即可
    "lint:eslint": "eslint --fix --ext .js,.ts,.tsx,.vue ./src",
    "lint:prettier": "prettier --write \"src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}\"",
    "lint:stylelint": "stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
    // 检查代码规范, 格式化代码等等..
    "lint": "npm run lint:eslint && npm run lint:prettier && npm run lint:stylelint"
  },
  // 配置项: https://github.com/toplenboren/simple-git-hooks
  "simple-git-hooks": {
    // git commit 之前执行 lint-staged
    "pre-commit": "npm run lint-staged",
    // git commit 的时候执行
    "commit-msg": "commitlint -E"
  },
  // 执行 lint-staged 的时候配置eslint检查和prettier格式化代码, 也可配置在 lint-staged.config.cjs 文件中
  "lint-staged": {
    "*": [
      "prettier --write --ignore-unknown"
    ]
    //  "*.js": [
    //   "prettier --write"
    // ],
    // "*.ts": [
    //   "prettier --parser=typescript --write"
    // ]
  }
```

## .editorconfig

```.editorconfig
# @see: http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
end_of_line = lf # 控制换行类型(lf | cr | crlf)
insert_final_newline = true # 始终在文件末尾插入一个新行
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
max_line_length = 130 # 最大行长度

[*.md] # 表示仅对 md 文件适用以下规则
max_line_length = off # 关闭最大行长度限制
trim_trailing_whitespace = false # 关闭末尾空格修剪
```

## Other

- 保存代码时自动格式化: VSCode 的设置中找到 `Format On Save` 设置为 true
- [ ] TODO: 当前项目工具都已经集成了, 但是具体的配置项可能需要根据不同框架的项目进行调整!

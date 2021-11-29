# moxuan-vue3

> 写这个库的目的：**练习开发复杂组件的能力，并不是为了发布到 npm 上获取 start 等**

## 技术栈

[vue3 中文官网](https://v3.cn.vuejs.org/)

[vite 官网](https://vitejs.dev/)

[vitepress 官网](https://vitepress.vuejs.org/)

[参考文章](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/)

**vite** + **vue3** + **typescript** + **sass** + **代码检查工具**

代码检查工具包括 eslint、prettier、stylelint、husky、lint-staged 等

## 目录结构

```bash
.husky # husky目录
docs # 文档目录
src # 源文件目录
  - components # 组件包目录
  - main.ts # 项目入口文件
prettierrc.json # prettier配置文件
stylelint.json # stylelint配置文件
eslintrc.js # eslint配置文件
tsconfig.json # ts配置文件
vite.config.ts # vite配置文件
```

## 规范

### 命名规范

**组件命名**

1. 组件文件夹和组件文件都以`multi-word.vue`的形式进行命名，**除单个单词的组件外**`index.vue`

**常量命名**

1.

## 遇到的问题

1. 在安装`stylelint`时需要降低一个版本，否则在解析`vue`文件时会报错

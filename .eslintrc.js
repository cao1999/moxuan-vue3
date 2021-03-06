module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser", // 重要
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },
  rules: {
    // 关闭组件命名限制，但是除单个单次以外的组件，最好还是以multi-word的形式命名
    "vue/multi-word-component-names": 0,
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
  },
};

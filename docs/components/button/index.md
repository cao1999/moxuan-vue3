# Button

## type

<script setup>
  import Button from "../../../src/components/button/index.ts"

const foo = function (e) {
  console.log(e, 'button')
}

</script>

<section class="component-button">
<Button @click="foo" type="default">button</Button>
<Button type="primary">button</Button>
<Button type="danger">button</Button></section>

<style lang="scss">
.component-button {
  button {
    margin-right: 10px;
  }
}
</style>

```vue
<template>
  <section class="component-button">
    <Button @click="foo" type="default">button</Button>
    <Button type="primary">button</Button>
    <Button type="danger">button</Button>
  </section>
</template>

<script setup lang="ts">
import Button from "../../../src/components/button/index.ts";

const foo = function (e) {
  console.log(e, "button");
};
</script>

<style lang="scss">
.component-button {
  button {
    margin-right: 10px;
  }
}
</style>
```

## size

<section class="component-button">
<Button type="default" size="small">button</Button>

<Button type="primary" size="middle">button</Button>

<Button type="danger" size="large">button</Button></section>

```vue
<template>
  <section class="component-button">
    <Button type="default" size="small">button</Button>
    <Button type="primary" size="middle">button</Button>
    <Button type="danger" size="large">button</Button>
  </section>
</template>
```

## disabled

<section class="component-button">
<Button 
:disabled="true" type="default">button</Button>

<Button :disabled="true" type="primary">button</Button>

<Button 
:disabled="true" type="danger">button</Button></section>

```vue
<template>
  <section class="component-button">
    <Button :disabled="true" type="default">button</Button>
    <Button :disabled="true" type="primary">button</Button>
    <Button :disabled="true" type="danger">button</Button>
  </section>
</template>
```

# 属性

| 属性名   | 描述                                                     | 类型    | 默认值  |
| -------- | -------------------------------------------------------- | ------- | ------- |
| type     | 设置按钮类型可以是`primary`、`default`、`danger`、`text` | string  | default |
| size     | 设置按钮大小                                             | string  | middle  |
| disabled | 禁用按钮                                                 | boolean | false   |

# 方法

| 方法名 | 描述             | 类型            | 默认值 |
| ------ | ---------------- | --------------- | ------ |
| click  | 添加按钮点击事件 | `(event) => {}` | -      |

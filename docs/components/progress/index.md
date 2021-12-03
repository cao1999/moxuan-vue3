# Progress

## percent

<script setup>
  import Progress from "../../../src/components/progress/index.ts"
</script>

<section class="component-progress">
  <div class="component-progress-item">
  <Progress :percent="50" /></div>
  <div class="component-progress-item">
  <Progress :percent="10" /></div>
</section>

<style lang="scss">
  .component-progress {
    &-item {
      margin-bottom: 10px;
    }
  }
</style>

```vue
<template>
  <section class="component-progress">
    <div class="component-progress-item">
      <Progress :percent="50" />
    </div>
    <div class="component-progress-item">
      <Progress :percent="10" />
    </div>
  </section>
</template>

<script setup>
import Progress from "../../../src/components/progress/index.ts";
</script>

<style lang="scss">
.component-progress {
  &-item {
    margin-bottom: 10px;
  }
}
</style>
```

## lineColor

<section class="component-progress">
  <div class="component-progress-item">
  <Progress :percent="60" lineColor="primary" /></div>
  <div class="component-progress-item">
  <Progress :percent="70" lineColor="danger" /></div>
  <div class="component-progress-item">
  <Progress :percent="80" lineColor="success" /></div>
    <div class="component-progress-item">
  <Progress :percent="90" lineColor="#B983FF" /></div>
</section>

```vue
<template>
  <section class="component-progress">
    <div class="component-progress-item">
      <Progress :percent="70" lineColor="primary" />
    </div>
    <div class="component-progress-item">
      <Progress :percent="80" lineColor="danger" />
    </div>
    <div class="component-progress-item">
      <Progress :percent="90" lineColor="success" />
    </div>
    <div class="component-progress-item">
      <Progress :percent="90" lineColor="#B983FF" />
    </div>
  </section>
</template>
```

## unFilledColor

<section class="component-progress">
  <div class="component-progress-item">
  <Progress :percent="10" /></div>
  <div class="component-progress-item">
  <Progress :percent="50" unFilledColor="#ccc" /></div>
</section>

```vue
<template>
  <section class="component-progress">
    <div class="component-progress-item">
      <Progress :percent="10" />
    </div>
    <div class="component-progress-item">
      <Progress :percent="50" unFilledColor="#ccc" />
    </div>
  </section>
</template>
```

## showInfo

<section class="component-progress">
  <div class="component-progress-item">
  <Progress :percent="70" /></div>
  <div class="component-progress-item">
  <Progress :percent="80" :showInfo="false" /></div>
</section>

```vue
<template>
  <section class="component-progress">
    <div class="component-progress-item">
      <Progress :percent="70" />
    </div>
    <div class="component-progress-item">
      <Progress :percent="80" :showInfo="false" />
    </div>
  </section>
</template>
```

## barHeight

<section class="component-progress">
  <div class="component-progress-item">
  <Progress :percent="10" :barHeight="12" /></div>
  <div class="component-progress-item">
  <Progress :percent="50" barHeight="14px" /></div>
</section>

```vue
<template>
  <section class="component-progress">
    <div class="component-progress-item">
      <Progress :percent="10" :barHeight="12" />
    </div>
    <div class="component-progress-item">
      <Progress :percent="50" barHeight="14px" />
    </div>
  </section>
</template>
```

## 属性

| 属性名        | 描述                   | 类型               | 可选值                          | 默认值 |
| ------------- | ---------------------- | ------------------ | ------------------------------- | ------ |
| percent       | 进度条百分比           | number             | number                          | 0      |
| lineColor     | 进度条激活部分的颜色   | string             | `primary`、`danger`、 `success` | -      |
| unFilledColor | 进度条为填充部分的颜色 | string             | string                          | -      |
| barHeight     | 进度条的高度           | `string`、`number` | -                               | -      |
| showInfo      | 是否显示进度信息       | boolean            | boolean                         | true   |

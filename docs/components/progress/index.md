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

## ??????

| ?????????        | ??????                   | ??????               | ?????????                          | ????????? |
| ------------- | ---------------------- | ------------------ | ------------------------------- | ------ |
| percent       | ??????????????????           | number             | number                          | 0      |
| lineColor     | ??????????????????????????????   | string             | `primary`???`danger`??? `success` | -      |
| unFilledColor | ????????????????????????????????? | string             | string                          | -      |
| barHeight     | ??????????????????           | `string`???`number` | -                               | -      |
| showInfo      | ????????????????????????       | boolean            | boolean                         | true   |

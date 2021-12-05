# Switch

<script setup>
import {ref} from "vue"
import MxSwitch from "../../../src/components/switch/index.ts"

const isChecked = ref(true)

const handleClick = () => {
  alert("点击了开关")
}

const handleChange = (status) => {
  alert(`开关状态${status ? '开': '关'}`)
}

const handleBtnClick = () => {
  isChecked.value = !isChecked.value
}

</script>

<style lang="scss">

  .component-switch {
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &-label {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
</style>

## size

<section class="component-switch">
<div class="component-switch-item">
<span class="component-switch-item-label">small:</span>
<mx-switch size="small" :defaultChecked="true"/>
</div>
<div class="component-switch-item">
<span class="component-switch-item-label">middle:</span>
<mx-switch :defaultChecked="true"/>
</div>
<div class="component-switch-item">
<span class="component-switch-item-label">large:</span>
<mx-switch size="large" :defaultChecked="true"/>
</div>
</section>

```vue
<template>
  <section>
    <mx-switch size="small" :defaultChecked="true" />
    <mx-switch :defaultChecked="true" />
    <mx-switch size="large" :defaultChecked="true" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import MxSwitch from "../../../src/components/switch/index.ts";

const isChecked = ref(true);

const handleClick = () => {
  alert("点击了开关");
};

const handleChange = (status) => {
  alert(`开关状态${status ? "开" : "关"}`);
};

const handleBtnClick = () => {
  isChecked.value = !isChecked.value;
};
</script>

<style lang="scss">
.component-switch {
  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &-label {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
</style>
```

## disabled

<section class="component-switch">
<div class="component-switch-item">
<span class="component-switch-item-label">small:</span>
<mx-switch :disabled="true" size="small" :defaultChecked="true"/>
</div>
<div class="component-switch-item">
<span class="component-switch-item-label">middle:</span>
<mx-switch :disabled="true"  :defaultChecked="true"/>
</div>
<div class="component-switch-item">
<span class="component-switch-item-label">large:</span>
<mx-switch :disabled="true"  size="large" :defaultChecked="true"/>
</div>
</section>

```vue
<template>
  <section>
    <mx-switch :disabled="true" size="small" :defaultChecked="true" />
    <mx-switch :disabled="true" :defaultChecked="true" />
    <mx-switch :disabled="true" size="large" :defaultChecked="true" />
  </section>
</template>

<script>
import MxSwitch from "../../../src/components/switch/index.ts";
</script>
```

## defaultChecked

该属性用来设置开关的默认状态，不支持动态设置

<section class="component-switch">
<div class="component-switch-item">
<button @click="handleBtnClick" class="component-switch-item-label">{{isChecked ? '关掉' : '开启'}}</button>
<mx-switch :defaultChecked="isChecked"/>
</div>
</section>

```vue
<template>
  <mx-switch :defaultChecked="true" />
</template>

<script setup>
import { ref } from "vue";
import MxSwitch from "../../../src/components/switch/index.ts";

const isChecked = ref(true);

const handleBtnClick = () => {
  isChecked.value = !isChecked.value;
};
</script>
```

## checked

该属性用来设置开关的默认状态，支持动态设置

<section class="component-switch">
<div class="component-switch-item">
<button @click="handleBtnClick" class="component-switch-item-label">{{isChecked ? '关掉' : '开启'}}</button>
<mx-switch :checked="isChecked"/>
</div>
</section>

```vue
<template>
  <section class="component-switch">
    <div class="component-switch-item">
      <button @click="handleBtnClick" class="component-switch-item-label">
        {{ isChecked ? "关掉" : "开启" }}
      </button>
      <mx-switch :checked="isChecked" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import MxSwitch from "../../../src/components/switch/index.ts";

const isChecked = ref(true);

const handleBtnClick = () => {
  isChecked.value = !isChecked.value;
};
</script>
```

## click 方法

<mx-switch @click="handleClick" :defaultChecked="true"/>

```vue
<template>
  <mx-switch @click="handleClick" :defaultChecked="true" />
</template>

<script setup>
import MxSwitch from "../../../src/components/switch/index.ts";

const handleClick = () => {
  console.log("点击了开关");
};
</script>
```

## change 方法

<mx-switch @change="handleChange" :defaultChecked="true" />

```vue
<template>
  <mx-switch @change="handleChange" :defaultChecked="true" />
</template>

<script setup>
import MxSwitch from "../../../src/components/switch/index.ts";

const handleChange = (status) => {
  alert(`开关状态${status ? "开" : "关"}`);
};
</script>
```

## 属性

| 属性名         | 描述         | 类型    | 可选值                     | 默认值 |
| -------------- | ------------ | ------- | -------------------------- | ------ |
| size           | 设置按钮大小 | string  | `small`、`middle`、`large` | middle |
| defaultChecked | 是否默认选中 | boolean | boolean                    | false  |
| checked        | 是否选中     | boolean | boolean                    | false  |
| disabled       | 是否禁用     | boolean | boolean                    | false  |

## 方法

| 方法名 | 描述             | 类型             |
| ------ | ---------------- | ---------------- |
| click  | 点击时的回调函数 | `(e) => {}`      |
| change | 状态变化时的回调 | `(status) => {}` |

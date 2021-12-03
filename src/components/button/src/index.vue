<template>
  <button type="button" :class="classComputed" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, computed } from "vue";
import { createClass } from "../../_utils";
import { BTN_TYPE, BTN_SIZE_MAP } from "./index";

// 创建局部类名前缀
const baseClass = createClass("btn");

// 目前只能在当前vue文件创建interface，如果引入外部的interface，defineProps会报literal错
interface ButtonProps {
  type?: string;
  size?: string;
  disabled?: boolean;
}

// 定义props
const props = withDefaults(defineProps<ButtonProps>(), {
  type: "default",
  size: "middle",
  disabled: false,
});

const emit = defineEmits(["click"]);

console.log(emit, "emit");

// 监听属性变化，动态修改class
const classComputed = computed(() => {
  let className = baseClass();
  let typeClass = BTN_TYPE.includes(props.type) ? props.type : "";
  let sizeClass = BTN_SIZE_MAP[props.size] || "";

  typeClass && (typeClass = baseClass(typeClass));
  sizeClass && (sizeClass = baseClass(sizeClass));
  className = className + typeClass + sizeClass;

  return className;
});
</script>

<style lang="scss">
@import "../style/index.scss";
</style>

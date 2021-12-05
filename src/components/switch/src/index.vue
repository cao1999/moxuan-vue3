<template>
  <button :disabled="disabled" :class="btnClass" @click="handleClick">
    <div :class="baseClass('handle')"></div>
  </button>
</template>

<script setup lang="ts">
import {
  defineProps,
  withDefaults,
  defineEmits,
  ref,
  computed,
  onMounted,
  watch,
} from "vue";
import { createClass, isType, throttle } from "../../_utils/index";
import { SIZE_MAP } from "./switch";

interface SwitchProps {
  size?: string;
  defaultChecked?: boolean | undefined;
  checked?: boolean | undefined;
  disabled?: boolean;
}

const baseClass = createClass("switch");

const props = withDefaults(defineProps<SwitchProps>(), {
  size: "middle",
  defaultChecked: undefined,
  checked: undefined,
  disabled: false,
});

const isChecked = ref(false);

// defaultChecked不支持动态修改，因此只在mount后进行一次赋值
onMounted(() => {
  if (!isType(props.defaultChecked, "undefined")) {
    isChecked.value = props.defaultChecked;
  }
});

// 放到后面是因为如果defaultChecked和checked同时存在，以checked为准
watch(
  () => props.checked,
  (newVal: boolean) => {
    if (!isType(newVal, "undefined")) {
      isChecked.value = newVal;
      emits("change", newVal);
    }
  },
  { immediate: true }
);

const btnClass = computed(() => {
  let className = baseClass();

  if (isChecked.value) {
    className += baseClass("checked");
  }

  if (props.disabled) {
    className += baseClass("disabled");
  }

  className += (SIZE_MAP[props.size] && baseClass(SIZE_MAP[props.size])) || "";

  return className;
});

const emits = defineEmits(["change", "click"]);

const handleClick = throttle(function (e: MouseEvent) {
  // 如果checked不存在，defaultChecked存在，则通过组件内部变量控制开关状态
  // 如果checked存在，则通过checked控制开关状态
  if (
    isType(props.checked, "undefined") &&
    !isType(props.defaultChecked, "undefined")
  ) {
    const newStatus = !isChecked.value;
    emits("change", newStatus);
    isChecked.value = newStatus;
  }

  emits("click", e);
}, 200);
</script>

<style lang="scss">
@import "../style/switch.scss";
</style>

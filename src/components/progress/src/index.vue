<template>
  <div :class="baseClass()">
    <div :style="outerBarStyle" :class="baseClass('outer')">
      <div :class="baseClass('inner')" :style="innerBarStyle"></div>
    </div>
    <div :class="baseClass('info')" v-if="showInfo">
      <span :title="percentValue" :class="baseClass('info-text')">{{
        percentValue
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from "vue";
import { createClass, isType } from "../../_utils";
import { INNER_BAR_COLOR } from "./progress";

const baseClass = createClass("progress");

interface ProgressProps {
  percent?: number;
  lineColor?: string;
  unFilledColor?: string;
  barHeight?: number | string;
  showInfo?: boolean;
}

const props = withDefaults(defineProps<ProgressProps>(), {
  percent: 0,
  lineColor: "",
  unFilledColor: "",
  barHeight: "",
  showInfo: true,
});

// 计算进度条当前位置和背景色
const innerBarStyle = computed(() => {
  const percent = Math.min(props.percent, 100);
  return {
    width: `${percent}%`,
    backgroundColor: INNER_BAR_COLOR[props.lineColor] || props.lineColor,
  };
});

const outerBarStyle = computed(() => {
  let height = props.barHeight;
  isType(height, "number") && (height = `${height}px`);

  return {
    height,
    backgroundColor: props.unFilledColor,
  };
});

const percentValue = computed(() => {
  return `${props.percent}%`;
});
</script>

<style lang="scss">
@import "../style/progress.scss";
</style>

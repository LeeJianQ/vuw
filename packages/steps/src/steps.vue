<template>
  <div class="vw-steps">
    <div class="vw-steps-list">
      <vw-step-item
        v-for="(item, key) in steps"
        :key="key"
        class="vw-steps-item"
        :class="[item.status || (item.highlight && 'highlight')]"
      >
        {{ item.value }}
      </vw-step-item>
    </div>
    <div class="vw-steps-line">
      <div class="vw-steps-schedule-line" :style="scheduleLineStyle"></div>
    </div>
  </div>
</template>

<script>
import VwStepItem from "../../step-item";
export default {
  name: "VwSteps",
  components: {
    VwStepItem,
  },
  props: {
    steps: Array,
    scheduleLineColor: {
      default: "green",
      type: String,
    },
  },
  computed: {
    scheduleLineStyle() {
      let style = {};
      let width =
        (this.steps.filter((item) => item.status === "finish").length /
          (this.steps.length - 1)) *
          100 +
        "%";
      style["width"] = width;
      style["backgroundColor"] = this.scheduleLineColor;
      return style;
    },
  },
};
</script>

<style lang="scss">
$bg-color: #999999;

.vw-steps {
  position: relative;
  .vw-steps-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .vw-steps-line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background-color: $bg-color;
  }
  .vw-steps-schedule-line {
    height: 1px;
    z-index: 2;
  }
}
</style>
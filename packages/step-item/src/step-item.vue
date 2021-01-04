<template>
  <div class="vw-steps-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VwStepItem",
  props: {},
};
</script>

<style lang="scss">
$hight-color: #fc9f2e;
$active-color: green;
$finish-color: #fff;
$finish-bg-color: green;

@mixin color($color) {
  color: $color;
  border-color: $color;
}

.vw-steps-item {
  width: 62px;
  height: 62px;
  line-height: 62px;
  text-align: center;
  background: #fff;
  border: 1px solid #999999;
  border-radius: 50%;
  z-index: 3;
}
.highlight {
  @include color($hight-color);
}
.active {
  @include color($active-color);
}
.finish {
  @include color($finish-color);
  background-color: $finish-bg-color;
}
</style>
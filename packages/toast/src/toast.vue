<template>
  <div v-show="show" class="vw-toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VwToast",
  props: {
    isShow: {
      default: false,
      type: Boolean,
    },
    time: {
      default: 3000,
      type: Number,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    isShow(value) {
      if (value) {
        this.show = value;
        setTimeout(() => {
          this.show = false;
          this.$emit("on-hide", false);
        }, this.time);
      }
    },
  },
};
</script>

<style lang="scss">
.vw-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(29 27 27 / 62%);
  border-radius: 20px;
  z-index: 1000;
}
</style>
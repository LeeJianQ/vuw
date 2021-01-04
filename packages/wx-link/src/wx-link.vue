<template>
  <div class="vw-wx-link">
    <script type="text/wxtag-template">
      <wx-open-launch-weapp
        id="launch-btn"
        :username="username"
        :path="toPath"
      >
        <template>
          <style>{{btnStyle}}</style>
          <button class="btn">打开小程序</button>
        </template>
      </wx-open-launch-weapp>
    </script>
  </div>
</template>

<script>
  export default {
    name: 'VwWxLink',
    props: {
      username: String,
      toPath: String,
      width: {
        type: String,
        default: '300px'
      },
      height: {
        type: String,
        default: '200px'
      },
      opacity: {
        type: String,
        default: 0
      }
    },
    computed: {
      btnStyle () {
        return `.btn {
          width: ${this.width};
          height: ${tthis.height};
          opacity: ${tthis.opacity};
        }`
      }
    }
  }
</script>

<style lang="scss">
.vw-wx-link{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}
</style>
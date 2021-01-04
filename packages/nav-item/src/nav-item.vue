<template>
  <div class="vw-nav-item" @click="clickItem" :style="itemStyle">
    <img :src="img">
  </div>
</template>

<script>
  export default {
    name: 'VwNavItem',
    props: {
      img: {
        type: String,
        default: 'http://f1.baiee.cn/ssds/tab_icons/sn2020xuanzkec.png'
      },
      url: {
        type: String,
        default: 'https://h5.baiyibao.cn'
      },
      size: {
        type: String,
        default: '75px'
      },
      borderRadius: {
        type: String,
        default: '50%'
      }
    },
    computed: {
      itemStyle () {
        return {
          width: this.size,
          height: this.size,
          borderRadius: this.borderRadius
        }
      }
    },
    methods: {
      clickItem () {
        window.location.href = this.url
      }
    }
  }
</script>

<style lang="scss">
.vw-nav-item{
  overflow: hidden;
  img{
    max-width: 100%;
  }
}
</style>
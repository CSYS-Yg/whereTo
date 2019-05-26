<template>
  <div class="conntainer" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item,key) in imgs"
          :key="key"
        >
          <img
            class="gallary-img"
            :src="item"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // 可以传递配置项
      swiperOption: {
        // 切换页面提示
        pagination: '.swiper-pagination',
        // 设置轮播插件支持循环
        loop: true,
        // 设置分页模式
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .conntainer >>> .swiper-container
    overflow inherit
  .conntainer
    display flex
    z-index 99
    flex-direction column
    justify-content center
    position fixed
    right 0
    left 0
    top 0
    bottom 0
    background #000

    .wrapper
      height 0
      width 100%
      padding-bottom 100%

      .gallary-img
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -1rem
</style>

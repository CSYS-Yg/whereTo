<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  // es6语法 data:function(){}=data () {}
  props: {
    list: Array
  },
  data () {
    return {
      // 可以传递配置项
      swiperOption: {
        // 切换页面提示
        pagination: '.swiper-pagination',
        // 设置轮播插件支持循环
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden;
    width 100%
    height 0
    padding-bottom 31.2%
    background #eeeeee

    .swiper-img
      width 100%
</style>

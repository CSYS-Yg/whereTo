<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscrooll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // vuex dispatch 派发事件
      // this.$store.dispatch('changeCity', city)
      // 当数据改变方式简单，也非批量操作可以通过 commit 直接派发 mutations
      // this.$store.commit('changeCity', city)
      // 优化写法
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      // 这里获取的是一个数组，需加下标才能获取到Dom元素
      const element = this.$refs[this.letter][0]
      // better-scroll组件方法，跳转到指定位置，必须传递dom元素或dom选择器
      this.scroll.scrollToElement(element)
    }
  },
  mounted () {
    this.scroll = new Bscrooll(this.$refs.wrapper, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .boeder-topbottom
    &:before
      border-color #ccc

    &:after
      border-color #ccc

  .boeder-bottom
    &:before
      border-color #ccc

  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0

    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem

    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem

      .button-wrapper
        float left
        width 33.33%

        .button
          margin .1rem
          padding .1rem
          text-align center
          border .02rem solid #ccc
          border-radius .06rem

    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>

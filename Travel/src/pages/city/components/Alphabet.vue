<template>
  <ul class="list">
    <!-- touchstart 手指触摸屏幕时触发 -->
    <!-- touchmove 手指触摸滑动屏幕时触发 -->
    <!-- touchend 手指离开屏幕后触发 -->
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        // 获取Json指定键值        console.log(this.cities[i][0].name)
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated: function () {
    // offsetTop 表示A顶部到当前组件顶端的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 表示timer存在
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 获取当前位置到手机显示顶端的高度
          const touchy = e.touches[0].clientY - 79
          // Math.floor() 向下取整
          const index = Math.floor((touchy - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }

}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem

  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>

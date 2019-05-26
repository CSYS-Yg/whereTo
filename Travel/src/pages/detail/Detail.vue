<template>
  <div>
    <detail-banner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
    >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/detail.json?id=' + this.$route.params)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.categoryList = data.categoryList
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}

</script>

<style lang="stylus" scoped>
  .content
    height 15rem
</style>

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City.vue')
    }, {
    /* /detail/:id 表示 前面地址/detail/固定，而 :id 表示其他页面可带传递动态参数，且页面接收参数命名为id */
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

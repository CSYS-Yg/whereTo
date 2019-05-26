import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 使用 new Vuex.Store({ }) 来创建vuex仓库
export default new Vuex.Store({
  // 建立仓库全局公用数据
  state,
  // 当数据改变方式简单，也非批量操作可以直接派发mutations
  // actions: {
  //   // 默认带有上下文参数 ctx
  //   changeCity (ctx, city) {
  //     // actions调用mutations通过ctx.commit调用
  //     ctx.commit('changeCity', city)
  //   }
  // },
  /* vuex通过 异步actions 调用 mutations内定义的方法改变仓库数据 */
  mutations
  // getters 有点类似于组件中的计算属性
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})

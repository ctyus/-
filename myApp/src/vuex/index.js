import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    nav_li: 0
  },
  mutations: {
    nav_li: function (state, val) {
      state.nav_li = val
    }
  }
})

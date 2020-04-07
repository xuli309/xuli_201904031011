import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 每当有数据需要全局共享的时候用
export default new Vuex.Store({
  state: {
    token:""
  },
  mutations: {
    settoken(state,token){
      state.token = token;
    }
  },
  actions: {
  },
  modules: {
  }
})

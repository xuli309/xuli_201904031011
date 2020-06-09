import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import app from './module/app'
import permission from './module/permission'
import getters from './getters.js'

Vue.use(Vuex)

const store  = new Vuex.Store({
  modules:{
    user,
    app,
    permission
  },
  getters
})

export default store

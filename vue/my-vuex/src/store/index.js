import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment (state) {
      state.count++
    },
    decrease(state){
      state.count--
    }
  },
  actions:{
    increment (context) {
        setTimeout(function(){
            context.commit("increment");
        })
      
    },
    decrease(context){
        setTimeout(function(){
            context.commit("decrease");
        })
      
    }
  },
  getters:{
    getStateCount(state){
      return state.count > 0 ? state.count : 0
    }
  }
})

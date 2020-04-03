import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    strict:true,
    state:{
        count:0
    },
    getters: {
        money: state => `￥${state.count*10000}`
    },
    // mutations修改数据而存在 同步的
    mutations:{
        increment(state){
            state.count++;
        }
    }
})

export default store;

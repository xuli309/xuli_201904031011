import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    strict:true,//不能在程序里改
    state:{
        count:0
    },
    getters: {
        money: state => `￥${state.count*10000}`
    },
    // mutations修改数据而存在 同步的
    mutations:{
        increment(state,args){
            state.count += args.num || 1;
        }
    },
    // action就是异步的mutations
    actions: {
        incrementAsync(store,args) {//{commit}
            setTimeout(() => {
                store.commit('increment',args);
            }, 2000);
        }
    }
})

export default store;

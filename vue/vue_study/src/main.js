import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.prototype.$bus = new Bus()

new Vue({
  render: h => h(App),
}).$mount('#app')

// 总线关系
// class Bus{
//   constructor(){
//     // {
//     //   eventName1:[fn1,fn2],
//     //   eventName2:[fn3,fn4],
//     // }
//     this.callbacks={}
//   }
//   $on(name,fn){
//     this.callbacks = this.callbacks[name] || []
//     this.callbacks.push(fn)
//   }

//   $emit(name,args){
//     if(this.callbacks[name]){
//       this.callbacks[name].foreach(cb=>cb(args))
//     }
//   }
// }

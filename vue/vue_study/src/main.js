import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 总线模式 没有实例只做订阅发布功能
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// Vue.prototype.$bus = new Bus()
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

Vue.prototype.$dispatch = function(eventName,data){
  let parent = this.$parent;
  //查找父元素
  while(parent){
    //父元素$emit触发
    parent.$emit(eventName, data);
    //递归查找父元素
    parent = parent.$parent;
  }
}

Vue.prototype.$boardcast = function(eventName,data){
  boardcast.call(this,eventName,data);
};

function boardcast(eventName,data){
  this.$children.forEach(child => {
    // 子元素触发$emit
    child.$emit(eventName,data);
    if(child.$children.length){
      // 递归调用，通过call this 指向 child
      boardcast.call(child,eventName,data);
    }
  });
}
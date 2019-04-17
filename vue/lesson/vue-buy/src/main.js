import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

//总线模式 只做订阅发布逻辑
Vue.prototype.$bus = new Vue();

Vue.prototype.$axios = axios;


new Vue({
  render: h => h(App),
}).$mount('#app')

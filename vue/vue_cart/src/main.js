import Vue from 'vue'
import App from './App.vue'
// import element from './plugins/element'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // element,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

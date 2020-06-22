import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import '@/assets/css/index.scss'
import dynamics from 'dynamics.js';

Vue.prototype.$axios = axios
Vue.prototype.$dynamics = dynamics
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

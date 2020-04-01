// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'

// 引入自己的组件
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)

// 全局组件
import NavBar from '@/components/Common/NavBar'
Vue.component(NavBar.name,NavBar)

// 配置时间控件 
//  {{ 'xxx' |  convertTime('yyyy-mm-dd')}}
//  {{ 'xxx' |  convertTime('yyyy年mm月dd日')}}
import Moment from 'moment'
Vue.filter('convertTime',function(data, formatStr){
  return Moment(data).format(formatStr)
})

// 配置axios
import Axios from 'axios'
// 配置公共URL
Axios.defaults.bestURL = 'http://rap2api.taobao.org/app/mock/166270/'
Vue.prototype.$axios = Axios

// 配置MintUI
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

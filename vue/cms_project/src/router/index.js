import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'

import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'

import PhotoList from '@/components/photo/PhotoList'
import PhotoDetail from '@/components/photo/PhotoDetail'

Vue.use(Router)
// 注册全局组件 router-view router-link
// 挂载Vue.prototype.$router||$route
// 未来所有的组件中的this对象，就具备该属性，所有的this 其实就是Vue 的子类对象

export default new Router({
  routes: [
    { path: '/', redirect: {name: 'home'} },
    { path: '/home', name: 'home', component: Home },
    { path: '/member', name: 'member', component: Member },
    { path: '/search', name: 'search', component: Search },
    { path: '/shopcart', name: 'shopcart', component: Shopcart },
    { name: 'news.list', path: '/news/list', component:NewsList},
    { name: 'news.detail', path: '/news/detail', component:NewsDetail},
    { name: 'photo.list', path: '/photo/list/:categoryId', component:PhotoList},
    { name: 'photo.detail', path: '/photo/detail', component:PhotoDetail}
  ]
})

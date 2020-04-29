import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BigWheel1 from '../views/BigWheel.vue'
import BigWheel2 from '../views/BigWheel2.vue'
import RedPackage from '../views/RedPackage.vue';
import RedPackRain from '../views/RedPackRain.vue';
import Grid from '../views/Grid';
import Tree from '../views/Tree';
import SvgDemo from '../views/SvgDemo';
import MarkDown from '../views/MarkDown';
import GithubSubmit from '../views/GithubSubmit';
import Dialog from '../views/Dialog';
import FlexComponent from '../views/FlexComponent';
import SelectComponent from '../views/SelectComponent';


Vue.use(VueRouter)

  const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/bigWheel1', name: 'BigWheel1', component: BigWheel1 },
  { path: '/bigWheel2', name: 'BigWheel2', component: BigWheel2 },
  { path: '/redPackage', name: 'redPackage', component: RedPackage },
  { path: '/redPackRain', name: 'redPackRain', component: RedPackRain },
  { path: '/about', name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path:'/grid', name:'grid', component:Grid },
  { path:'/tree', name:'tree', component:Tree },
  { path:'/svg', name:'svg', component:SvgDemo },
  { path:'/markdown', name:'markdown', component:MarkDown },
  { path:'/gitSubmit', name:'gitSubmit', component:GithubSubmit },
  { path:'/dialog', name:'dialog', component:Dialog },
  { path:'/flexcom', name:'flexcom', component:FlexComponent },
  { path:'/select2', name:'select2', component:SelectComponent }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

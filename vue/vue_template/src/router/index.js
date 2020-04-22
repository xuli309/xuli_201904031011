import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BigWheel1 from '../views/BigWheel.vue'
import BigWheel2 from '../views/BigWheel2.vue'
import RedPackage from '../views/RedPackage.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bigWheel1',
    name: 'BigWheel1',
    component: BigWheel1
  },
  {
    path: '/bigWheel2',
    name: 'BigWheel2',
    component: BigWheel2
  },
  {
    path: '/redPackage',
    name: 'redPackage',
    component: RedPackage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

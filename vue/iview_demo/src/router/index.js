import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Privilege from '../views/system/Privilege.vue'
import Role from '../views/system/Role.vue'
import Admin from '../views/system/Admin.vue'



Vue.use(VueRouter)

  const routes = [
  {path: '/', name: 'Home',component: Home},
  {path: '/system/privilege', name:'privilege',component:Privilege},
  {path: '/system/role', name:'role',component:Role},
  {path: '/system/admin', name:'admin',component:Admin},
  {
    path: '/about', name: 'About',
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Shortcodes from '../views/Shortcodes.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/services',
  //   name: 'Services',
  //   component: Services
  // },
  // {
  //   path: '/shortcodes',
  //   name: 'Shortcodes',
  //   component: Shortcodes
  // },
  // {
  //   path: '/gallery',
  //   name: 'Gallery',
  //   component: Gallery
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact
  // },
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import List from '../views/List';
import Detail from '../views/Detail';
import Cart from '../views/Cart';
import store from '../store';
import Grid from '../views/Grid';
import Tree from '../views/Tree';


// 解决vuex vue-router.esm.js?8c4f:2089 Uncaught (in promise)
// const routerPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children:[
      {path:'',component:List, name: 'list',},
      {path:'/detail/:id',name:'detail',component:Detail, props:true}
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path: '/about',
    name: 'About',
    meta:{requireLogin:true},
    beforeEnter(to, from, next){      
      // 判断是否登录
      if(!store.state.isLogin)
        next('/login?redirect='+to.path);
      else
        next();
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {

//   console.log(to.meta.requireLogin);
  
//   if(to.path == '/about' && !window.isLogin){ 
//     next('/login?redirect='+to.path)
//   }else{
//     console.log(22222222222);
    
//     next();
//   }
 
//   // if(to.path != '/login'){
//   //     next();
//   // }else{
//   //   window.setTimeout(()=>{
//   //     next();
//   //   },20)
//   // }
// });

export default router

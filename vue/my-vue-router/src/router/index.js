import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Course from '@/components/Course'
import Master from '@/components/Master'
import Java from '@/components/course/Java'
import Web from '@/components/course/Web'
import HelloSwiper from '@/components/HelloSwiper'
import LazyloadDemo from '@/components/LazyloadDemo'
import HelloRem from '@/components/HelloRem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
      redirect:'/course/java',
      children:[
        {path:'java',name:'java',component:Java},
        {path:'web',name:'web',component:Web},
      ]
    },{
      path:'/master',
      name:'master',
      component: Master
    },{
      path:'/helloSwiper',
      name:'helloSwiper',
      component: HelloSwiper
    },{
      path:'/lazyloadDemo',
      name:'lazyloadDemo',
      component: LazyloadDemo
    },{
      path:'/helloRem',
      name:'HelloRem',
      component: HelloRem
      
    }
  ]
})

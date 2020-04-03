import Vue from 'vue';
import Router from 'vue-router';

import Page1 from '@/components/page/navPage/Page1'
import Page2 from '@/components/page/navPage/Page2'
import Page3 from '@/components/page/navPage/Page3'
import NavList from '@/components/page/NavList'
import Login from '@/components/page/Login'


Vue.use(Router)

let routes = new Router({
    // mode:'history',
    routes:[
        {path:'/',redirect:'/navList'},
        {path:'/login',name:'login',component:Login},
        {
            path:'/navList',
            name:'navList',
            component:NavList,
            redirect:'/navList/page1',
            children:[
                {path:'page1',name:'Page1',component:Page1},
                {path:'page2',name:'Page2',component:Page2},
                {path:'page3/:id',name:'Page3',props:true, component:Page3}
            ]
        },
       
    ]
})

routes.beforeEach((to,from,next)=>{

    // 使用场景
    // 1.判断用户有没有登录，是否要去登录页面
    // 2. 判断权限，你是不是管理员

    console.log('beforeEach',to);
    if(to.path !='/login'){
        next();    
    }else{
        window.setTimeout(()=>{
            next();
        },1000)
    }
    
})

routes.afterEach(()=>{
    console.log('afterEach');
})

export default routes;
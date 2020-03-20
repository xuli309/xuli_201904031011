import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexComponent from '../components/IndexComponent'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {path:'/',name:'index',compontent:IndexComponent},
        {path:'/helloworld',name:'helloworld',compontent:HelloWorld}
    ] 
})
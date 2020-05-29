import axios from 'axios';
import {Message,MessageBox} from 'element-ui';
import store from '../store';
import {getToken} from '@/utils/user';


const service  =  axios.create({
    baseURL: process.env.BASE_API, //api 的base_url
    timeout: 15000 //请求超时时间
})

// request 拦截器
service.interceptors.request.use(config => {

    if(store.getters.token){
        // 让每个请求携带自定义token
        config.headers['Authorization'] = getToken();
    }

    return config
},error=>{
    console.log(error);
    Promise.reject(error)
});

// response 拦截器
service.interceptors.response.use(response=>{ 
    const res  = response.data;    
    // status 为非200时抛出错误信息
    if(response.status !== 200){
        Message({
            message:response.message,
            type: 'error',
            duration: 3 * 1000
        })

        // 401：未登录；
        if(response.status === 401){
            MessageBox.confirm('您已经被登出，可以取消继续留在该页面或者重新登录', '确定登出',{
                confirmButtonText:'重新登录',
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
                store.dispatch('fedLoginOut').then(()=>{
                    location.reload();//重新实例化vue-router 
                })
            })

            return Promise.reject('error');
        }
    }else{        
        return res;
    }
},error=>{
    console.log('error',error);
    Message({
        message:error.message,
        type: 'error',
        duration: 3 * 1000
    })
    return Promise.reject(error);
})

export default service
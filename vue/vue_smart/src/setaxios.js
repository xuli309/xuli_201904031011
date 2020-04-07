import axios from 'axios'
import store from './store'
import router from './router'

// http 拦截
// token 要放在所有的http请求header之上
// const LOGINOUT = 'LOGINOUT'
export default function setAxios(){
    axios.interceptors.request.use(
        config=>{            
            if(store.state.token){
                config.headers.token = store.state.token;
            }
            return config;
        }
        
    )

    // 获取数据时 如果code是-1 认为登录过期了，需要重新登录
    // 每一次http有返回，都先触发拦截器
    axios.interceptors.response.use(
        response => {
            if(response.status == 200){
                const data = response.data
                if(data.code == -1){
                    // 过期了 
                    // 注销登录 清空 vuex 和 localstore
                    store.commit('settoken','');
                    // store.commit(LOGINOUT,'');
                    localStorage.removeItem('token');
                    // 跳转login
                    router.replace({
                        path: '/login'
                    })
                }
                return response;
            }
        }
    )
}


import {login, loginOut} from '@/api/login';
import {getToken,setToken,removeToken} from '@/utils/user';

const user = {
    state:{
        token: getToken(),
        name:'',
    },
    mutations: {
        SET_TOKEN:(state,token)=>{
            console.log(token);
            
            state.token = token
        },

        SET_NAME:(state,name)=>{
            state.name = name
        }
    },
    actions: {
        login({commit}, userInfo) {            
            const username = userInfo.username;
            
            return new Promise((resolve,reject)=>{
                login(username,userInfo.password).then(response => {                                                      
                    const tokenStr = response.token;                    
                    setToken(tokenStr);
                    commit('SET_TOKEN', tokenStr);
                    resolve();
                }).catch((err) => {
                    reject(err)
                });
            }) 
        },
        loginOut({commit,state}){
            return new Promise((resolve,reject)=>{
                loginOut(state.token).then(()=>{
                    commit('SET_TOKEN','')
                    removeToken()
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        fedLoginOut({commit,state}){
            return new Promise((resolve,reject)=>{
                commit('SET_TOKEN','')
                removeToken()
                resolve()
            })
        },
       
    }
}

export default user
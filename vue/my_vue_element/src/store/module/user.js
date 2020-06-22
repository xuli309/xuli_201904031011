
import {login, loginOut} from '@/api/login';
import {getToken,setToken,removeToken} from '@/utils/user';

const user = {
    state:{
        token: getToken(),
        name:'',
        avatar:'',
        roles:[]
    },
    mutations: {
        SET_TOKEN:(state,token)=>{
            console.log(token);
            
            state.token = token
        },

        SET_NAME:(state,name)=>{
            state.name = name
        },

        SET_AVATAR:(state,avatar)=>{
            state.avatar = avatar
        },

        SET_ROLES:(state,roles)=>{
            state.roles = roles
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
        getInfo({commit,state}){
            return new Promise((resolve, reject)=>{
                getInfo().then(response=>{
                    const  data =  response.data
                    if(data.roles && data.roles.length > 0){
                        commit('SET_ROLES', data.roles)
                    }else{
                        reject('getInfo: select is null')
                    }
                    commit('SET_NAME',data.username)
                    commit('SET_AVATAR',data.icon)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
       
    }
}

export default user
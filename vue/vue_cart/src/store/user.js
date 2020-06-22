const user = {
    state: {
        isLogin:false,
        list:[]
      },
      getters:{
        loginState(state){
          return state.isLogin ? "欢迎回来" : "游客"
        }
      },
      mutations: {
        login(state,args){
            state.isLogin = true
        }
      },
      actions: {//异步操作
        requestLogin({commit},args){
            // console.log(args);
            return new Promise(resolve=>{                
                setTimeout(() => {
                    // context.commit('login')
                    commit('login',args)
                    resolve(true);
                }, 1000);
            })
        }
      },

}

export default user
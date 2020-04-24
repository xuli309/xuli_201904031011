const cart = {
    namespaced: true,
    state:{
      list:JSON.parse(localStorage.getItem('cart'))|| []
    },
    mutations: {
      addCart(state,good){       
        const ret = state.list.find(v=>v.id===good.id);                     
        if(ret){
          ret.count += 1;                   
        }else{
          state.list.push({...good,count:1,active:true});
        }    
      }
    }
    
  }
  export default cart
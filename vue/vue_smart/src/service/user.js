import axios from 'axios';

export default {
    login(user){
        // console.log(user);
        
    // const rest = axios.get('/api/login',{params:user}).then(({data})=>data);
       const ret  = axios.get('/api/login',{params:user});
       console.log('ret',ret);
       return ret;
    }
};

import request from '@/utils/request';
export function login(username,password) {    
    return request({
        url:'/admin/login',
        method:'get',
        params:{
            username,
            password
        }
    })
}

export function loginOut() {
    return request({
        url: '/admin/logionOut',
        method:'post'
    })
}
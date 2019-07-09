import {call,put,takeEvery}  from 'redux-saga/effects'


const api = {
    login(){
        return new Promise((resove,reject) => {
            setTimeout(()=>{
                if(Math.random() > 0.5){
                    resove({id:1,name:'jerry'})
                }else{
                    reject('用户名或密码错误')
                }
            },1000)
        })
    }
}

// work saga
function* login(action){
    try{

        const result = yield call(api.login) // 后面可以传参数{name:'aaa',pass:'bbb'}
        yield put({type:'login',result})

    }catch(error){
        yield put({type:'login_failure',message:error.message})
    }
}

function* mySaga(){
    yield takeEvery('login_request', login)
}

export default mySaga
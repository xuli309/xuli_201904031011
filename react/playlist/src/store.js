import {createStore} from 'redux';

// reducer:具体状态修改的执行者
const conterReducer = (state=0, action) =>{
    switch (action.type) {
        case 'add':
            return state+1;    
        case 'minus':
            return state-1;    
        default:
            return state;
    }

}

export default createStore(conterReducer);
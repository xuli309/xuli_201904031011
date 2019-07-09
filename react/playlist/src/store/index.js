import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import counter from '../store/counter.redux';
import user from '../store/user.redux';
import createSagaMiddleware from 'redux-saga'
import mySaga from "./sagas";

// 2.创建中间件
const mid =  createSagaMiddleware();
// 3.应用中间件
const store = createStore(
    // reducer 模块化
    combineReducers({counter, user}),
    applyMiddleware(logger, mid)  // 第二个参数增强器
);

mid.run(mySaga);

export default  store;
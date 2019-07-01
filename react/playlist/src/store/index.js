import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import counter from '../store/counter.redux';
import user from '../store/user.redux';


export default createStore(
    // reducer 模块化
    combineReducers({counter, user}),
    applyMiddleware(logger, thunk)
);
import { createStore, applyMiddleware } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import productReducer from '../reducers/products'
import { getAllProducts } from '../actions'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}


let store = createStore(
    productReducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllProducts());

export default store
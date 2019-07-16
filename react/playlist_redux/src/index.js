import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers'

import App from './app'

let store = createStore(reducer);
// console.log(1,store.getState());
// store.dispatch({
//     type:'ADD',
//     title:'天路',
//     singer:'韩红'
// })
// console.log(2,store.getState());
// let id = store.getState().data[0].id;
// store.dispatch({
//     type:'DELETE',
//     id:id,
// })
// console.log(3,store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);



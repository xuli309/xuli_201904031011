import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Lifecycle from './Lifecycle';
import CartSample from './CartSample';
import CommentList from './components/CommentList';
import Composition from './components/Composition';

// ReactDOM.render(<h1>React真酷</h1>,document.querySelector('#root'))
// ReactDOM.render(<App />,document.querySelector('#root'))
// ReactDOM.render(<Lifecycle />, document.querySelector('#root'))
// ReactDOM.render(<CartSample title="aaa" />, document.querySelector('#root'))
// ReactDOM.render(<CommentList />, document.querySelector('#root'))

ReactDOM.render(<Composition />, document.querySelector('#root'))


// 动态渲染
// function tick(){
//     ReactDOM.render(<h2>{new Date().toLocaleTimeString()}</h2>,document.querySelector('#root'))
// }
// setInterval(tick,1000)

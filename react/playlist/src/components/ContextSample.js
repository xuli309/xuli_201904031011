import React, { Component } from 'react'

// 创建上下文
const Context = React.createContext();
const store ={
    name:'Tom',
    sayHi(){
        console.log(this.name);
    }
}

const withProvider = Comp => props=>(
    <Context.Provider value={store}>
        <Comp {...props}></Comp>
    </Context.Provider>
)

const withConsumer = Comp => props=>(
    <Context.Consumer>
        {value => <Comp {...props} value={value} />}
    </Context.Consumer>
)

@withConsumer
class Inner extends Component{
    render (){
        return (
            <div onClick={()=>this.props.value.sayHi()}>{this.props.value.name}</div>
        )
    }
}

@withProvider
class ContextSample extends Component {
    render() {
        return (
            <div>
                <Inner ></Inner>
            </div>
            
        )
    }
}

export default ContextSample;



// export default class ContextSample extends Component {
//     render() {
//         return (
//             <Context.Provider value={store}>
//                 <div>
//                     {/* 获取跨层级的组件 */}
//                     <Context.Consumer>
//                         {/* 必须内嵌一个函数 */}
//                         {value=><div onClick={()=>value.sayHi()}>{value.name}</div>}
//                     </Context.Consumer>
//                 </div>
//             </Context.Provider>
//         )
//     }
// }

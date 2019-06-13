import React, { Component } from 'react'

// // 高阶组件
// const withName = Comp =>{
//     // 假设通过某种特殊手段获取本节课的名字
//     return props => <Comp {...props} name="高阶组件试用介绍"></Comp>
// }

// 高阶组件
const withName = Comp =>{
    // 甚至可以重写生命周期
    class NewComponent extends Component{
        componentDidMount(){
            console.log('do something');
        }
        render(){
            return  <Comp {...this.props} name="高阶组件试用介绍"></Comp>
        }
    }
    // 假设通过某种特殊手段获取本节课的名字
    return NewComponent;
}

const withLog = Comp =>{
    console.log(Comp.name+'渲染了');
    return props => <Comp {...props}></Comp>
}

@withName
@withLog
class Kaikeba extends Component{
    render(){
        return( 
            <div>
                {this.props.stage} - {this.props.name}
            </div>
        )
    }
    
}

// export default withLog(withName(Kaikeba));

export default Kaikeba;

import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props){
        super(props);
        console.log("1.constructor-构造函数");
        this.state = {message:'来自属性传递：'+props.prop}
        
    }
    componentWillMount(){
        //此时可以访问属性和状态了，没法做dom操作
        console.log('2.componentWillMount-组件将要挂载');
    }

    componentDidMount(){
        //组件已挂载，可以进行状态更新操作
        console.log('3.componentDidMount-组件已挂载');
    }

    componentWillReceiveProps(){
        // 父组件传递的属性有变化，做响应的响应
        console.log('4.componentWillReceiveProps-组件的属性更新了');
    }

    shouldComponentUpdate(props,stat){
        // 组件是否需要更新，返回boolean值，优化点
        console.log('5.shouldComponentUpdate-组件是否更新呢？')
        return true;
    }
    componentWillUpdate(){
        console.log('6.componentWillUpdate-组件将要更新')
    }
    componentDidUpdate(){
        console.log('7.componentDidUpdate-组件已经更新了')
    }

    render() {
        console.log('组件渲染')
        return (
            <div>组件生命周期的探究</div>
        )
    }
}


export default class extends Component{

    constructor(prop){
        super(prop);

        this.state = {
            someProp:'some Prop'
        }

        setTimeout(() => {
            this.setState({
                someProp:'a new some Prop'
            })
        }, 2000);
    }

    render(){
        return <Lifecycle prop={this.state.someProp} />
    }
}

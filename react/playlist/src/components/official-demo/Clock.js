import React, { Component } from 'react'

function  FomateDate(props){
    return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

export default class Clock extends Component {

    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        };
    }

    // 方法会在组件已经被渲染到 DOM 中后运行
    componentDidMount(){
        this.timer = window.setInterval(()=>{this.tick()},1000);
    }

    // 一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，这样计时器就停止了
    componentWillMount(){
        clearInterval(this.timer)
    }

    tick(){
       this.setState({date:new Date()})
    }

    render() {
        return (
            <div>
                <h1>Hello,World!</h1>
                {/* <h2>It is {this.state.date.toLocaleTimeString()}</h2> */}
                <FomateDate date={this.state.date}></FomateDate>
            </div>
        )
    }
}

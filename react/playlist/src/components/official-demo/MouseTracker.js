import React, { Component,PureComponent } from 'react'

import img from './img/1.jpg'

class Mouse extends Component {

    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {/* ...但我们如何渲染 <p> 以外的东西? */}
                <p>当前鼠标位置：{this.state.x}-{this.state.y}</p>
            </div>
        )
    }
}


class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src={img} style={{ position: "absolute", width: '100px', height: '100px', left: mouse.x, top: mouse.y }} />
        )
    }
}

// class MouseWithCat extends Component  {
class MouseWithCat extends PureComponent  {

    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {/*
                我们可以在这里换掉 <p> 的 <Cat>   ......
                但是接着我们需要创建一个单独的 <MouseWithSomethingElse>
                每次我们需要使用它时，<MouseWithCat> 是不是真的可以重复使用.
                <Cat mouse={this.state} /> */}

                {this.props.render(this.state)}

            </div>
        )
    }
}

// 高阶组件
function withMouse(Component){
    return (
        class extends Component{
            render(){
                return <MouseWithCat render={mouse=>(
                    <Component {...this.props} mouse={mouse} />
                )} />
            }
        }
    )
}

const MouseFn = withMouse(Cat);

export default class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>移动鼠标</h1>
                {/* <Mouse></Mouse> */}
                {/* <MouseWithCat /> */}

                 <MouseWithCat render={mouse=>(
                    <Cat mouse={mouse}></Cat>
                )}></MouseWithCat> 

                {/* <MouseFn></MouseFn> */}

                
            </div>
        )

    }
}

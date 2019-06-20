import React, { Component } from 'react'


function ActionClick(){

    function handleClick(e){
        e.preventDefault();
        console.log('click me');
    }

    return <button onClick={handleClick}>点我</button>
}


export default class Toggle extends Component {

    constructor(props){
        super(props);
        this.state={isToggle:true};

        // 1.为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state=>({
            isToggle:!state.isToggle
        }))
    }

    // // 2.此语法确保 `handleClick` 内的 `this` 已被绑定。
    // // 注意: 这是 *实验性* 语法。
    // handleClick=()=>{
    //     this.setState(state=>({
    //         isToggle:!state.isToggle
    //     }))
    // }

    render() {
        return (
            <div>
                {/* <ActionClick></ActionClick> */}
                {/* <button onClick={this.handleClick}>
                    { this.state.isToggle ? 'ON' : 'OFF' }
                </button> */}
                <button onClick={(e) => this.handleClick(e)}>
                    { this.state.isToggle ? 'ON' : 'OFF' }
                </button>
                
            </div>
        )
    }
}

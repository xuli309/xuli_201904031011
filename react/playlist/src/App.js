import React, { Component } from 'react'
import logo from "./1.jpg"
import "./App.css"
import {Button} from 'antd'

//函数型组件 传递props
function Welcome1(props) {
    return (
        <div>
           Hello,{props.name} 
        </div>
    )
}


export default class App extends Component {

    //1.当需要更改状态时，需要构造函数
    constructor(props){
        super(props);
        //初始化状态
        this.state = {
            date:new Date(),
            count:0
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
             //3.更新状态
            this.setState({
                date:new Date()
            })
            // 注意1.不能直接改状态，2.setState()是异步的
        }, 1000);

        // 注意2.setState()是异步的
        // this.setState({
        //     count:this.state.count+1 //非常危险行为，不可取
        // },()=>{
        //     console.log(this.state.count);//1
        // })
        // console.log(this.state.count);//0

        this.setState((prevState,prevProps)=>({
            count: prevState.count+1,//如果一个值依赖于之前的函数或属性，就写成函数形式
        }),()=>{
            console.log(this.state.count);//1
        })
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    formatName(user){
        return user.firstName + ' ' + user.lastName;
    }

    render() {
        const name = 'jerry';
        //jsx 本身表达式
        const jsx = <p>hello,同学们</p>
        return (
            <div>
                {/* antd试用 */}
                <Button type="primary">button</Button>
              App组件
              {/* 表达式 */}
              <h1>{name}</h1>
              <p>{this.formatName({firstName:'tom',lastName:'Blus'})}</p>
              {/* 属性 */}
              <img src={logo} style={{width:100}} className="img" />
              {/* jsx也是表达式 */}
              {jsx}
              {/* 组件的属性传值 : 传入的属性是只读的 */}
              <Welcome1 name="tom"></Welcome1>
              {/* 2.使用状态 */}
              <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

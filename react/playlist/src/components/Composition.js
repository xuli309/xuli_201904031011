import React, { Component } from 'react'

function Dialog(props){
    return (
        <div style={{border:`4px solid ${props.color || 'blue'}`}}>

            {props.children}
            <div className="footer">{props.footer}</div>
        </div>
    )
}

// 模拟接口
const api = {
    getUser:()=>({name:'jerry', age:20})
}

function Fetcher(props){
    let user = api[props.name]();
    return props.children(user)
}

function FilterP(props){
    return (
        <div>
            {/* React.Children 提供了若干操作嵌套的帮助方法 -- 修改Children */}
            {React.Children.map(props.children, child=>{
                console.log(child);
                if(child.type != 'p'){
                    return;
                }
                return child;
            })}
        </div>
    )
}

function WelcomeDialog(){
    const confirmBtn = <button onClick={()=>alert('react 确实好')}>确定</button>
    return (
        <Dialog color="green" footer={confirmBtn}>
            <h1>欢迎光临</h1>
            <p>感谢试用react！！！</p>
        </Dialog>
    )
}

function Radio(){
    return (
        <label>
            <input type="radio" name="" id="" />
        </label>
    )
}

export default class Composition extends Component {
    render() {
        return (
            <div>
                <WelcomeDialog></WelcomeDialog>
                 {/* children 内容可以是任意表达式 */}
                <Fetcher name="getUser">
                    {({name,age})=>(<p>{name}-{age}</p>)}
                </Fetcher>
                {/* 操作 child */}
                <FilterP>
                    <h3>React</h3>
                    <p>react很不错</p>
                    <h3>Vue</h3>
                    <p>Vue很不错</p>
                </FilterP>
                {/* 编辑Children */}
                <RadioGroup name="mvvm">
                    <Radio value="vue">vue</Radio>
                    <Radio value="react">react</Radio>
                    <Radio value="angular">angular</Radio>
                </RadioGroup>
            </div>
        )
    }
}

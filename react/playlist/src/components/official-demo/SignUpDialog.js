import React, { Component } from 'react'
import "./css/SignUpDialog.css"

function FancyBorder(props){
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    )
}

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
        </FancyBorder>
    )
}

function WelcomeDialog(){
    return (
        <Dialog title="welcome" message="Thank you for visiting our spacecraft!"></Dialog>
    )
}

function SplitPane(props){
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

function Contacts(){
    return <h1 className="Dialog-title">welcome</h1>
}

function Chat(){
    return <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    
}

function App(){
    return (
        <SplitPane left={<Contacts />} right={<Chat />}></SplitPane>
    )
}


export default class SignUpDialog extends Component {

    constructor(props){
        super(props);
        this.state={login:''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChange(e){
        this.setState({login:e.target.value})
    }

    handleSignUp(){
        console.log(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return (
            <div>
                {/* <WelcomeDialog></WelcomeDialog>
                <App></App> */}
                <Dialog title="Mars Exploration Program" message="How should we refer to you?"></Dialog>
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>click sign up!</button>
            </div>
        )
    }
}

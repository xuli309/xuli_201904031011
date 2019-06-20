import React, { Component } from 'react'


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLogin = props.isLogin;
    if (isLogin) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LoginOutButton(props) {
    return (
        <button onClick={props.onClick}>LoginOut</button>
    )
}

export default class LoginControl extends Component {

    constructor(props) {
        super(props);
        this.state = { isLogin: false };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLoginOutClick = this.handleLoginOutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({
            isLogin: true
        })
    }

    handleLoginOutClick() {
        this.setState({
            isLogin: false
        })
    }

    render() {

        const isLogin = this.state.isLogin;
        // let button;
        // if (isLogin) {
        //     button = <LoginOutButton onClick={this.handleLoginOutClick}></LoginOutButton>
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
        // }

        return (
            <div>
                <Greeting isLogin={this.state.isLogin}></Greeting>
                {
                    isLogin?<LoginOutButton onClick={this.handleLoginOutClick}></LoginOutButton>:<LoginButton onClick={this.handleLoginClick}></LoginButton>
                }
            </div>
        )
    }
}

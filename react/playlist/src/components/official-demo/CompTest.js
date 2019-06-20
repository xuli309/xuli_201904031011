import React, { Component } from 'react'

function welcome(props){
    return <h1>{props.name}</h1>
}
// 等效于上面的welcome函数
class Welcome extends Component{
    render(){
        return <h1>{this.props.name}</h1>
    }
}

function App(){
    return (
        <div>
            <Welcome name="Tom"></Welcome>
            <Welcome name="Jerry"></Welcome>
            <Welcome name="April"></Welcome>
        </div>
    )
}

function Avatar(props){
    return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
}

function UserInfo(props){
    return (
        <div className="UserInfo">
          <Avatar user={props.author}></Avatar>
          <div className="UserInfo-name">{props.user.name}</div>
        </div>
    )
}

function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author}></UserInfo>

        <div className="Comment-text">{props.text}</div>

        {/* <div className="Comment-date">{formatDate(props.date)}</div> */}

      </div>
    );
}

export default class CompTest extends Component {
    render() {
        return (
            <div>
               {/* {welcome({name:'tom'})} */}
               {/* <Welcome name='Tom'></Welcome> */}
               <App></App>
            </div>
        )
    }
}

import React, { Component } from 'react'

function formatName(user){
    return user.firstName + ' ' + user.lastName
}

function getGreeting(user){
    if(user){
        return <span>Hello, {formatName(user)}</span>;
    }
    return <span>Hello, Stranger.</span>;
}

const name = "Tom";
const user = {firstName:name,lastName:'Coruse'}
const element = <p>{getGreeting(user)}</p>;
// const element = React.createElement(
//     'h1',
//     {className:'ddd'},
//     'hello world'
// )


export default class JsxTest extends Component {
    render() {
        return (
            <div>
                {element}
            </div>
        )
    }
}

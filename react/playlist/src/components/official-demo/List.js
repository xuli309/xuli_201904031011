import React, { Component } from 'react'

function Items(props) {
    return (
        props.items.map((number) => <li key={number}>{number * 2}</li>)
    )
}

function Blog(props) {
    const silebar = props.posts.map((post) => <li key={post.id}>{post.title}</li>);
       
    const content = props.posts.map((post) => <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>)

    return (
        <div>
            <ul>{silebar}</ul>
            {content}
        </div>
    )
}

export default class List extends Component {
    render() {
        const numbers = [1, 2, 4, 5, 6, 10];
        // const items = numbers.map((number)=><li key={number}>{number*2}</li>)
        const posts = [
            { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
            { id: 2, title: 'Installation', content: 'You can install React from npm.' }
        ];
        return (
            <div>
                <ul>
                    {/* {items} */}
                    <Items items={numbers}></Items>
                </ul>
                <Blog posts={posts}></Blog>
            </div>
        )
    }
}

import React, { Component } from 'react'

class commentList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // 假设 "DataSource" 是个全局范围内的数据源变量
            comments: DataSourse.getComments()
        }
    }

    componentDidMount() {
        // 订阅更改
        DataSourse.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
        // 清除订阅
        DataSourse.removeChangeListner(this.handleChange);
    }

    handleChange() {
        this.setState({
            comments: DataSourse.getComments()
        })
    }

    render() {
        return (
            this.state.comments.map((comment) => {
                <Comment comment={comment} key={comment.id}></Comment>
            })
        )
    }
}

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            blogPost: DataSourse.getBlogPost(props.id)
        }
    }

    componentDidMount() {
        DataSourse.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
        DataSourse.removeChangeListner(this.handleChange);
    }
    render() {
        return <TextBlog text={this.state.blogPost}></TextBlog>
    }
}

const CommentListWithScubscriptiton = withSubscription(CommentList, (DataSourse) => DataSourse.getComments());
const BlogPostWithScubscriptiton = withSubscription(BlogPost, (DataSourse) => DataSourse.getBlogPost(props.id));

// 此函数接收一个组件
function withSubscription(WrappedComponent, selectData) {

    // 返回一个组件
    return class extends Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSourse, props)
            }
        }

        componentDidMount() {
            // ...负责订阅相关的操作...
            DataSourse.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSourse.removeChangeListner(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSourse, this.props)
            })
        }
        render() {
            // ... 并使用新数据渲染被包装的组件!
            // 请注意，我们可能还会传递其他属性
            <WrappedComponent data={this.state.data} {...this.props}></WrappedComponent>
        }
    }
}


export default class Gaojiezujian extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

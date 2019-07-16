import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Main from './main'
import Footer from './footer'

class Home extends Component {
    render() {
        let props = this.props;
        let data = props.data;
        let pathName = props.router.location.pathname

        return (
            <div>
                <header>
                    <h2 className="title">{pathName === '/like' ? '收藏' : '播放'}列表</h2>
                    <Link to="/add">添加歌曲</Link>
                </header>
                <Route path="/" exact component={Main} />
                <Route path="/like" render={(e) => {
                    if(data.filter((item)=>item.like).length === 0){
                        return <Redirect to="/" />
                    }
                    return <Main location={e.location} />
                }} />
                <Footer pathName={pathName} />
            </div>
        )
    }
}

export default connect((state) => state)(Home)

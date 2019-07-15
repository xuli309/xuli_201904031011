import React, { Component } from 'react'
import { Link, Route,Redirect } from 'react-router-dom';
import Main from './main'
import Footer from './footer'

export default class Home extends Component {
    render() {
        let props = this.props;
        let data = props.data;
        let selectData = props.data.filter((val) => val.selected)
        let likeData = props.data.filter((val) => val.like)
        return (
            <div>
                <header>
                    <h2 className="title">{props.pathName === '/like' ? '收藏' : '播放'}列表</h2>
                    <Link to="/add">添加歌曲</Link>
                </header>
                <Route path="/" exact render={() => {
                    return (
                        <Main
                            data={data}
                            isCheckAll={props.isCheckAll}
                            checkAll={props.checkAll}
                            setCheck={props.setCheck}
                            setLike={props.setLike}
                            remove={props.remove}
                        />
                    )
                }}></Route>
                <Route path="/like" render={() => {
                    if(likeData.length === 0){
                        return <Redirect to="/" />
                    }
                    return (
                        <Main
                            data={likeData}
                            isCheckAll={props.isCheckAll}
                            checkAll={props.checkAll}
                            setCheck={props.setCheck}
                            setLike={props.setLike}
                            remove={props.remove}
                        />
                    )
                }}></Route>
                <Footer
                    pathName={props.pathName}
                    length={data.length}
                    selectLen={selectData.length}
                    likeLen={likeData.length}
                    removeSelect={props.removeSelect}
                    likeSelect={props.likeSelect}
                    likeCancelSelect={props.likeCancelSelect}
                />
            </div>
        )
    }
}

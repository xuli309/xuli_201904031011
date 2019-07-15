import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './home'
import Add from './add'


class App extends Component {
    constructor() {
        super(...arguments);
        this.now = 4;
        this.state = {
            data: [
                // {
                //     id: 0,
                //     title: "空白格",
                //     singer: "蔡健雅",
                //     selected: false,
                //     like: false
                // },
                // {
                //     id: 1,
                //     title: "空白格1111",
                //     singer: "蔡健雅1",
                //     selected: false,
                //     like: false
                // },
                // {
                //     id: 2,
                //     title: "空白格2222",
                //     singer: "蔡健雅2",
                //     selected: false,
                //     like: true
                // },
                // {
                //     id: 3,
                //     title: "空白格33333",
                //     singer: "蔡健雅3",
                //     selected: false,
                //     like: true
                // },
                // {
                //     id: 4,
                //     title: "空白格4444",
                //     singer: "蔡健雅4",
                //     selected: true,
                //     like: false
                // }
            ]
        }

        this.add = this.add.bind(this);
        this.checkAll = this.checkAll.bind(this);
        this.setCheck = this.setCheck.bind(this);
        this.setLike = this.setLike.bind(this);
        this.remove = this.remove.bind(this);
        this.removeSelect = this.removeSelect.bind(this);
        this.likeSelect = this.likeSelect.bind(this);
        this.likeCancelSelect = this.likeCancelSelect.bind(this);
        this.showLikeList = this.showLikeList.bind(this);
    }

    // 添加音乐
    add(title, singer) {

        if (!title || !singer) {
            return;
        }

        this.now++;
        let data = this.state.data;
        data.push({
            id: this.now,
            title,
            singer,
            selected: false,
            like: false
        })
        this.setState({ data })

    }

    // 是否全部选中
    isCheckAll() {
        let data = this.state.data;
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (!item.selected) {
                return false;
            }
        }
        return true;
    }

    // 全选
    checkAll(checked) {
        let data = this.state.data.map((val) => {
            val.selected = checked;
            return val;
        });
        this.setState({ data })
    }

    // 单个选中
    setCheck(index, checked) {
        let data = this.state.data;
        data.forEach(val => {
            if (val.id === index) {
                val.selected = checked;
            }
        });

        this.setState({ data });
    }

    // 单个收藏
    setLike(index, checked) {
        let data = this.state.data;
        data.forEach(val => {
            if (val.id === index) {
                val.like = checked;
            }
        });

        this.setState({ data });
    }

    // 删除
    remove(index) {
        let data = this.state.data.filter((val) => val.id !== index);
        this.setState({ data });
    }

    // 删除选中
    removeSelect() {
        let data = this.state.data.filter((val) => !val.selected);
        this.setState({ data });
    }

    // 收藏选中
    likeSelect() {
        let data = this.state.data.map((value) => {
            if (value.selected) {
                value.like = true;
            }
            return value
        })
        this.setState({ data });
    }

    // 取消收藏
    likeCancelSelect() {
        let data = this.state.data.map((value) => {
            if (value.selected) {
                value.like = false;
            }
            return value
        })
        this.setState({ data });
    }

    // 查看清单
    showLikeList(state) {
        this.setState({
            likeState: state
        })
    }

    // 是否需要重新渲染 即将重新渲染
    shouldComponentUpdate(nextProps, nextState) {
        if (!nextState.likeState) {
            let likeData = nextState.data.filter((val) => val.like);
            if (likeData.length === 0) {
                this.setState({ likeState: true })
                return false;
            }
        }
        return true;
    }

    render() {
        return (
            <BrowserRouter>
                <div id="musicApp">
                    <Switch>
                        <Route path="/add" render={(e) => {
                            return (
                                <Add add={this.add}
                                    router={e}
                                    length={this.state.data.length}
                                />
                            )

                        }} />

                        <Route path="/" render={(e) => {

                            if(this.state.data.length === 0){
                                return <Redirect to="/add" />
                            }

                            return (
                                <Home
                                    pathName={e.location.pathname}
                                    data={this.state.data}
                                    isCheckAll={this.isCheckAll()}
                                    checkAll={this.checkAll}
                                    setCheck={this.setCheck}
                                    setLike={this.setLike}
                                    remove={this.remove}

                                    removeSelect={this.removeSelect}
                                    likeSelect={this.likeSelect}
                                    likeCancelSelect={this.likeCancelSelect}

                                ></Home>
                            )
                        }} />
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}


ReactDOM.render(
    <App />
    , document.getElementById('root')
);



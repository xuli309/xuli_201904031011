import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        let len = this.props.length;
        let selLen = this.props.selectLen;
        let pathName = this.props.pathName;
        return (
            <footer style={{ display: len ? "" : "none" }}>
                <div className="info">
                    <span className="align-right" style={{ display: selLen ? "" : "none" }}>当前选{selLen}中首歌曲</span>
                    <span>共{len}首歌曲</span>
                </div>
                <input type="button" value="删除选中歌曲"
                    style={{ display: selLen ? "" : "none" }}
                    onClick={() => { this.props.removeSelect() }}
                />

                <input type="button" value="收藏选中歌曲"
                    style={{ display: selLen ? "" : "none" }}
                    onClick={() => { this.props.likeSelect() }}
                />

                <input type="button" value="取消收藏选中歌曲" style={{ display: selLen ? "" : "none" }} onClick={() => { this.props.likeCancelSelect() }} />

                {(pathName==="/" && this.props.likeLen>0)?<Link to='/like'>查看收藏列表</Link>:""}
                {pathName==="/like"?<Link to='/'>查看所有列表</Link>:""}

            </footer>
        )
    }
}

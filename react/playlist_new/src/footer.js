import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        let len = this.props.length;
        let selLen = this.props.selectLen;
        let likeState = this.props.likeState;
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
                <input type="button" value="查看收藏清单"
                    style={{ display: (likeState && this.props.likeLen > 0) ? "" : "none" }}
                    onClick={() => {this.props.showLikeList(false);}} 
                    />
                <input type="button" value="查看所有清单" style={{ display: !likeState ? "" : "none" }} onClick={() => {this.props.showLikeList(true);}}  />
            </footer>
        )
    }
}

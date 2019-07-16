import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './item';

class Main extends Component {

    render() {
        let data = this.props.data;
        return (
            <table className="main" style={{ display: data.length ? "table" : "none" }}>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" id="checkAll"
                                checked={this.props.isCheckAll}
                                onChange={(e) => {
                                    this.props.dispatch({
                                        type: "CHECK_ALL",
                                        checked: e.target.checked,
                                    })
                                }} />

                            <label htmlFor="checkAll">全选</label>
                        </th>
                        <th>歌曲</th>
                        <th>歌手</th>
                        <th>收藏</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value) => {
                        return (
                            <Item key={value.id} id={value.id} />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}
/**
 * 1根据pathname判断显示列表 所有or收藏
 * 2.isCheckAll 是否全选
 */
export default connect((state, props) => {
    let isCheckAll = (function () {
        let checkAll = true;
        for (var i = 0; i < state.data.length; i++) {
            if (!state.data[i].selected) {
                checkAll = false;
                break;
            }
        }
        return checkAll;
    })();

    let pathName = props.location.pathname;
    if (pathName === '/') {
        return Object.assign({}, state, { isCheckAll })
    }

    if (pathName === '/like') {
        let data = {};
        data.data = state.data.filter((item)=>item.like);
        return Object.assign({}, data, { isCheckAll })
    }

})(Main)
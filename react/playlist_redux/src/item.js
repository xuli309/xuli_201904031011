import React, { Component } from 'react'
import { connect } from 'react-redux'

class Item extends Component {
    render() {
        let data = this.props.data;       
        return (
            <tr className={(data.selected ? "selected" : "") + (data.like ? " like" : "")} >
                <td>
                    <input type="checkbox"
                        checked={data.selected}
                        onChange={(e) => {
                            this.props.dispatch({
                                type:'CHECK',
                                id:this.props.id,
                                checked:e.target.checked
                            })
                        }}
                    />
                </td>
                <td>{data.title}</td>
                <td>{data.singer}</td>
                <td>
                    <input type="checkbox"
                        checked={data.like}
                        onChange={(e) => {
                            this.props.dispatch({
                                type:'SET_LIKE',
                                id:this.props.id,
                                checked: e.target.checked
                            })
                        }}
                    />
                </td>
                <td>
                    <span onClick={
                        ()=>{
                            this.props.dispatch({
                                type:'DELETE',
                                id:this.props.id
                            })
                            // this.props.remove(this.props.index)
                        }
                    }>X</span>
                </td>
            </tr>

        )
    }
}
export default connect((state,props)=>{
    let data = {};
    state.data.forEach((item) => {
        if(item.id === props.id){
            data.data = item;
        }
    });
    return data;
})(Item)
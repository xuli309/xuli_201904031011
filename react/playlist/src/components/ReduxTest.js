import React, { Component } from 'react'

import store from '../store';

import{connect} from 'react-redux'

const mapStateToProps = state=>({ num:state });
const mapDispatchToProps = dispatch=>({
    add:()=>dispatch({type:'add'}),
    minus:()=>dispatch({type:'minus'})
})

// @connect(
//     state => ({ num: state }),// 状态映射
//     {
//         add: () => ({ type: "add" }),
//         minus: () => ({ type: "minus" })
//     }
// )

@connect(mapStateToProps,mapDispatchToProps)
class ReduxTest extends Component {
    render() {
        return (
            <div>
                <p>
                {/* {store.getState()} */}
                    {this.props.num}
                </p>
                <div>
                    {/* <button onClick={()=>store.dispatch({type:'minus'})}>-</button>
                    <button onClick={()=>store.dispatch({type:'add'})}>+</button> */}
                    
                    <button onClick={()=>this.props.minus()}>-</button>
                    <button onClick={()=>this.props.add()}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxTest)

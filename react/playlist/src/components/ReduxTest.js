import React, { Component } from 'react'

import{connect} from 'react-redux';
import {add,minus,asyncAdd} from '../store/counter.redux'

const mapStateToProps = state=>({ num:state });
const mapDispatchToProps = dispatch=>({
    add:()=>dispatch({type:'add'}),
    minus:()=>dispatch({type:'minus'})
})

@connect(
    state => ({ num: state.counter }),// 状态映射
    {
        add,
        minus,
        asyncAdd
    }
)

// @connect(mapStateToProps,mapDispatchToProps)
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
                    <button onClick={()=>this.props.asyncAdd()}>asyncAdd</button>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxTest)

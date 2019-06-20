import React, { Component } from 'react'

function WarnButton(props) {
    if (props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

export default class Page extends Component {

    constructor(props) {
        super(props);
        this.state = { iswarning: true }
    }

    handleToggleClick(){
        this.setState(state => ({
            iswarning: !state.iswarning
        }));
    }


    render() {
        return (
            <div>
                <WarnButton warn={this.state.iswarning}></WarnButton>
                <button onClick={(e)=>this.handleToggleClick(e)}>
                    {this.state.iswarning ? 'Hide' : 'show'}
                </button>
            </div>
        )
    }
}

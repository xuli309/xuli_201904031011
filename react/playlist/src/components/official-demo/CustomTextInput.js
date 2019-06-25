import React, { Component } from 'react'


export default class CustomTextInput extends Component {

    constructor(props){
        super(props);
        this.textInput = React.createRef();

        this.focus = this.focus.bind(this)
    }

    render() {
        return (
            <div>
              <input type="text" ref={this.textInput} onClick={this.focus} />  
            </div>
        )
    }

    focus(e){
        // console.log(e.target.value)
        this.textInput.current.focus();
    }
}

import React, { Component } from 'react'

function CustomTextInput(props){
    return (
        <input type="text"  ref={props.inputRef} />
    )
}

export default class CustomPrentInput extends Component {
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    render() {
        return (
            <div>
                <CustomTextInput inputRef={this.inputElement}></CustomTextInput>
                <input type="button" value="Focus the text input" onClick={this.handleBtnClick} />
            </div>
        )
    }

    handleBtnClick(e) {
        // console.log(e.target.value)
        this.inputElement.current.focus();
    }
}


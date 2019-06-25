import React, { Component } from 'react'


export default class CustomTextInput extends Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();

        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.handleBtnClick}
                />
            </div>
        )
    }

    handleBtnClick(e) {
        console.log(e.target.value)
        this.textInput.current.focus();
    }
}

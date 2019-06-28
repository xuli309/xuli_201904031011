import React, { Component } from 'react'

export default class FileInput extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(
            `Selected file - ${
            this.fileInput.current.files[0].name
            }`
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        upload file:
                        <input type="file" ref={this.fileInput} />
                    </label>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

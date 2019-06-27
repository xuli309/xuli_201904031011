import React, { Component } from 'react'
import $ from 'jquery'

// import Chosen from 'react-chosen-r'



class ChosenDemo extends Component {

    componentDidMount() {
        
        this.$el = $(this.el);
        // this.$el.chosen();
        this.handleChange = this.handleChange.bind(this);
        this.$el.on("change", this.handleChange);
    }

    componentWillUnmount() {
        this.$el.off("change", this.handleChange);
        // this.$el.chosen("destory");
    }

    handleChange(e) {
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div>
                <select className="Chosen-select" ref={el => this.el = el}>
                    {this.props.children}
                </select>
            </div>
        )
    }
}

export default class JqueryExample extends Component {
    render(){
        return (
            <ChosenDemo onChange={value => console.log(value)}>
                <option>vanilla</option>
                <option>chocolate</option>
                <option>strawberry</option>
            </ChosenDemo>
        )
    }
    
}
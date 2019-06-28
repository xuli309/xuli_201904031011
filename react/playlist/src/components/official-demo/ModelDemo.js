import React, { Component,Backbone } from 'react'

class Item extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.forceUpdate();
    }

    componentDidMount(){
        this.props.model.on("change",this.handleChange);
    }

    componentWillUnmount(){
        this.props.model.off("change",this.handleChange);
    }

    render(){
        return <li>{this.props.model.get('text')}</li>
    }
}

const collection = new Backbone.Collection([
    new Backbone.Model({ text: 'A' }),
    new Backbone.Model({ text: 'B' }),
    new Backbone.Model({ text: 'C' })
]);

export default class ModelDemo extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.forceUpdate();
    }

    componentDidMount(){
        this.props.model.on("add","remove",this.handleChange);
    }

    componentWillUnmount(){
        this.props.model.off("add","remove",this.handleChange);
    }

    render() {
        return (
            <div>
                <ul>
                    {collection.map(model=>(
                        <Item key={model.cid} model={model}></Item>
                    ))}
                </ul>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class NameForm extends Component {

    constructor(props){
        super(props);
        this.state={
            // value:'',
            // text:'请撰写一篇关于你喜欢的 DOM 元素的文章.',
            // selectValue:'coconut'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }

    handleAreaChange(e){
        this.setState({
            text:e.target.value
        })
    }

    handleSelect(e){
        this.setState({
            selectValue:e.target.value
        })
    }

    handleInputChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit(e){
        // console.log(this.state);
    //    console.log('您提交的名字是：' + this.state.value);
    //    console.log('您提交的文章内容：' + this.state.text);
    //    console.log('您选择的水果是：' + this.state.selectValue)

        console.log('您提交的名字是：' + this.state.userName);
        console.log('您提交的文章内容：' + this.state.content);
        console.log('您选择的水果是：' + this.state.fruit);

        e.preventDefault();
    }


    render() {

        const options = ['B','C']

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>名字：</label><input type="text" name="userName" value={this.state.value} onChange={this.handleChange} /><br/><br/>
                    <textarea name="content" value={this.state.text} onChange={this.handleAreaChange}></textarea><br/><br/>
                    <label>选择你喜欢的水果:</label>
                    <select value={this.state.selectValue} name="fruit" onChange={this.handleSelect}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">柠檬</option>
                        <option value="coconut" selected={this.state.selected}>椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                    */}

                    <label>名字：</label><input type="text" name="userName" value={this.state.value} onChange={this.handleInputChange} /><br/><br/>
                    <textarea name="content" value={this.state.text} onChange={this.handleInputChange}></textarea><br/><br/>
                    <label>选择你喜欢的水果:</label>
                    <select value={this.state.selectValue} name="fruit" onChange={this.handleInputChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">柠檬</option>
                        <option value="coconut" selected={this.state.selected}>椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                    
                    <br/><br/>

                    <select multiple={true}>
                        {
                            options.map((option)=><option key={option}>{option}</option>)
                        }
                    </select>

                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
}

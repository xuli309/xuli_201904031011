import React, { Component } from 'react'

// hoc:包装用户表单，增加数据管理、校验能力
function kFormCreate(Comp) {

    return class extends Component {
        constructor(props) {
            super(props);
            this.options = {};//保存字段选项
            this.state = {};//各字段的值
        }

        // 处理表单项输入事项
        handleChange = e => {
            const { name, value } = e.target;
            this.setState({
                [name]: value,
            },()=>{
                // 数值变化后再校验
                this.validateField(name)
            });
            
        }

        // 表单校验
        validateField = field =>{            
            const rules = this.options[field].rules;
            
            // 只要任何一样失败就返回true
            const ret = rules.some(rule=>{
                if(rule.required){
                    // 仅验证必填项
                    if(!this.state[field]){
                        this.setState({
                            [field+'Message']:rule.message
                        });
                        return true;// 若有校验失败，返回true
                    }
                }
            });
            if(!ret){// 校验成功
                this.setState({
                    [field+'Message']:''
                })
            }
            return ret;
        }

        // 校验所有字段
        validate = cb =>{

        }

        getFieldDec = (field, option, InputComp) => {
            this.options[field] = option;
            return (
                <div>
                    {React.cloneElement(InputComp, {
                        name: field, // 控件内容
                        value: this.state[field] || '',// 控件值
                        onChange: this.handleChange, // change事件处理
                    })}

                    {
                        this.state[field+'Message'] && (
                            <p style={{color:"red"}}>{this.state[field+'Message']}</p>
                        )
                    }
                </div>
            )
        }

        render() {
            return <Comp {...this.props} getFieldDec={this.getFieldDec} value={this.state}></Comp>
        }
    }
}

@kFormCreate
class KFormSample extends Component {

    onSubmit=()=>{
        console.log("输出验证值",this.props.value)
    }

    render() {
        const { getFieldDec } = this.props;
        return (
            <div>
                {
                    getFieldDec('uname', {
                        rules: [{ required: true, message: "请填写用户名" }]
                    }, <input type="text" />)
                }

                {
                    getFieldDec('pwd', {
                        rules: [{ required: true, message: "请填写密码" }]
                    }, <input type="password" />)
                }

                <button onClick={this.onSubmit}>登录</button>
            </div>
        )
    }
}

export default KFormSample;
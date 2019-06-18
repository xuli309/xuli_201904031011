import React, { Component } from 'react'
import { Icon } from 'antd';

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

        // 
        handleFocus=(e)=>{
            const field = e.target.name;
            this.setState({
                [field+'Focus']:true,
            })
        }

        // 判断组件是否被用户点过
        isFieldTouched = field => !!this.state[field+'Focus'];
        //返回消息内容
        getFieldError = field => this.state[field+'Message'];

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
            return !ret;
        }

        // 校验所有字段
        validate = cb =>{
            const rets = Object.keys(this.options).map(field => this.validateField(field));
            // 如果校验结果数组中全都是true，则校验成功
            const ret  = rets.every(v=>v===true);
            cb(ret);
        }

        getFieldDec = (field, option, InputComp) => {
            this.options[field] = option;
            return (
                <div>
                    {React.cloneElement(InputComp, {
                        name: field, // 控件内容
                        value: this.state[field] || '',// 控件值
                        onChange: this.handleChange, // change事件处理
                        onFocus: this.handleFocus,// 判断控件是否获得焦点
                    })}

                    {/* {
                        this.state[field+'Message'] && (
                            <p style={{color:"red"}}>{this.state[field+'Message']}</p>
                        )
                    } */}
                </div>
            )
        }



        render() {
            return <Comp 
                {...this.props} 
                getFieldDec={this.getFieldDec} 
                value={this.state} 
                validate={this.validate}
                isFieldTouched={this.isFieldTouched} 
                getFieldError={this.getFieldError}
                ></Comp>
        }
    }
}

class FormItem extends Component{
    render(){
        return (
            <div className="formItem">
                {this.props.children}
                {this.props.validateStatus ==='error' && (
                    <p style={{color:"red"}}>{this.props.help}</p>
                )}
            </div>
        )
    }
}

class KInput extends Component{
    render(){
        return (
            <div>
                {/* 前缀图标 */}
                {this.props.prefix}
                <input {...this.props} />
            </div>
        )
    }
}

@kFormCreate
class KFormSample extends Component {

    onSubmit=()=>{
        console.log(this.props.value);
        this.props.validate((isvalid) => {
            if(isvalid){
                console.log("校验成功，提交登录")
            }else{
                console.log("校验失败")
            }
        })
    }

    render() {
        const { getFieldDec, isFieldTouched, getFieldError } = this.props;
        const usernameError = isFieldTouched('uname') && getFieldError('uname');
        const passwordError = isFieldTouched('pwd') && getFieldError('pwd');

        return (
            <div>
                <FormItem validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDec('uname', {
                            rules: [{ required: true, message: "请填写用户名" }]
                        }, <KInput type="text" prefix={<Icon type="user"></Icon>}></KInput>
                    )}
                </FormItem>
                <FormItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDec('pwd', {
                        rules: [{ required: true, message: "请填写密码" }]
                        }, <KInput type="password" prefix={<Icon type="lock"></Icon>} ></KInput>
                    )}
                </FormItem>
                <button onClick={this.onSubmit}>登录</button>
            </div>
        )
    }
}

export default KFormSample;
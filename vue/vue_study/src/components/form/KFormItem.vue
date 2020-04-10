<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <slot></slot>
        <p v-if="errorMessage">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script>
    import Schema from "async-validator"
    export default {
        name:'formItem',
        inject:['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop:String
            
        },
        data() {
            return {
                errorMessage: ''
            }
        },
        mounted () {
            //监听校验事件
            this.$on('validate',()=>{
                this.validate();
            })
        },
        methods: {
            validate() {
                
                //执行组件校验
                //1.获取校验规则
                const rules =  this.form.rules[this.prop]
                
                //2.获取输入值
                const value =  this.form.model[this.prop]
                
                //3.执行校验
                const desc ={
                    [this.prop]:rules
                }
                const vals ={
                    [this.prop]:value
                }
                const schema = new Schema(desc);
                //返回 promise <boolean>
                return schema.validate(vals, errors=>{                    
                    if(errors){
                        this.errorMessage = errors[0].message;
                    }else{
                        this.errorMessage = "";
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
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
                
                
		const desc ={[this.prop]:this.form.rules[this.prop]};
		
		//3.执行校验
                const schema = new Schema(desc);
		
                //返回 promise <boolean>
                return schema.validate({[this.prop]:this.form.model[this.prop]}, errors=>{                    
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
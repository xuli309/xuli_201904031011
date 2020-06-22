<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errMsg">{{errMsg}}</p>
    </div>
</template>

<script>
    import Validator from 'async-validator';
    export default {
        name:'kFormItem',
        inject:['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop:{
                type:String
            }
        },
        data() {
            return {
                errMsg: ''
            }
        },
        created () {
            this.$on('validate', this.validate);
        },
        methods: {
            validate() {                
                const desc = {[this.prop]:this.form.rules[this.prop]};  
		             
                const schema = new Validator(desc);
                
                return schema.validate({[this.prop]:this.form.model[this.prop]}, errors=>{
                    console.log(errors);
                    
                    if(errors){
                        this.errMsg = errors[0].message;
                    }else{
                        this.errMsg = '';
                    }
                } )               
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
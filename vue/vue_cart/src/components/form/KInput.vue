<template>
    <div>
        <input :type="type" :value="value" @input="onInput"  />
    </div>
</template>

<script>
    export default {
        name:'kInput',
        inheritAttrs:false,//避免顶层的容器继承属性
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value:{
                type:String
            }
        },
        methods: {
            onInput(e) {
                // console.log(e.target.value);
                
                this.$emit('input', e.target.value);

                this.$parent.$emit('validate');
            }
        },
    }
</script>

<style scoped>

</style>
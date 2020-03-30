<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'kForm',
        provide(){
            return {
                form: this //传递form实例给后代
            }
        },
        props: {
            model: {
                type: Object,
                require:true
            },
            rules:{
                type: Object
            }
        },
        methods: {
            validate(cb) {                
                // map结果是若干promise数组
                const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validate());
                
                //所有任务必须全部成功才算校验通过
                Promise.all(tasks)
                .then(()=>cb(true))
                .catch(()=>cb(false))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
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
                form:this //传递form实例给后代
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
    }
</script>

<style lang="scss" scoped>

</style>
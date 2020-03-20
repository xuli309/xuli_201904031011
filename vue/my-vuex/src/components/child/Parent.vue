<template>
    <div>
        父组件：{{info}}
        <Child :title="msg" @info="handlerMsg" />
    </div>
</template>
<script>

import Child from './Child'

export default {
    name:'parent',
    data(){
        return {
            msg:"我是父组件",
            info:""
        }
    },
    components:{
        Child
    },
    methods:{
        handlerMsg(data){
            this.info = data;
        }
    }
}
</script>
<style scoped>

</style>
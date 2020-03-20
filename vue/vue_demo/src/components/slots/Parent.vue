<template>
    <div class="parent">
       <p>父组件</p>
       <Child>
           <p slot="s1">我是插槽1</p>
           <p slot="s2" slot-scope="props" class="pest">{{props.text}}</p>
       </Child>
    </div>
</template>
<script>
import Child from './Child'

export default {
    name:'parent',
    data(){
        return{
            msg:'ddddd',
        }
    },
    components:{
        Child
    }

}
</script>
<style scoped>

</style>
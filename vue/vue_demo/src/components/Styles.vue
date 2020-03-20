<template>
    <div>
        <div v-bind:class="{ active: isActive, 'demo':demo }">ddddd</div>
        
        <p v-bind:class="classObj">aaaa</p>

        <ul>
            <li v-for="(name,index) in names" :key="index" :class="{active: index%2===0}">{{ name }}</li>
        </ul>

        <p :style="styleObj">样式测试</p>
    </div>
</template>
<script>
export default{
    name:'Styles',
    data(){
        return{
           isActive:true,
           demo:true,
           classObj:{
              active:true,
              demo:true
           },
            names:['张三','李四','王五','赵六'],
            styleObj:{
                color:'red',
                fontSize:'28px',
            }
        }
    }
}
</script>
<style>
    .active{
        color:red;
        background:#f1f1f1;
    }
</style>
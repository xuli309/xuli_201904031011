<template>
    <div>
        <ul>
            <li>
                <router-link  to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/helloworld">课程</router-link>
            </li>
            <li></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'index',
    data(){
        return{
            
        }
    }
    
}
</script>
<style scoped>
li{
    float:left;
    width:100px;
    height:35px;
    line-height: 35px;
    background: #f1f1f1;
    text-align: center;
}
</style>>
<template>
    <div>
        <router-link to="/navList/page1">page1</router-link>|
        <router-link to="/navList/page2">page2</router-link>|
        <router-link to="/navList/page3/vuejs">vuejs</router-link>|
        <router-link to="/navList/page3/react">react</router-link>|
        <router-link to="/login">login</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'navList',
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
ul{
    float: left;
    background:#f1f1f1;
}
li{
    float: left;
    width:100px;
    height:35px;
    line-height: 35px;
    background:#f1f1f1;
    text-align: center;
}
</style>
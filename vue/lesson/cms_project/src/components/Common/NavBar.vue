<template>
    <div class="cms-s-header">
        <h1 @click="goBack"><</h1>
        <h1 class="page-title">{{title}}</h1>
    </div>
</template>

<script>
export default {
    name:'nav-bar',
    props:['title'],      
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.cms-s-header{
    height:40px;
    background:#f7f7f7;
    line-height: 40px;
}
.cms-s-header h1{
    display: inline;
}
.page-title{
    margin-left:25%;
}
</style>

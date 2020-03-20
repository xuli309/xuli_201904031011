<template>
    <div>
        <img v-lazy="imgObj" />
    </div>
</template>

<script>
export default {
    name:'lazyloadDemo',
    data(){
        return{
            imgObj:{
                src:"http://box.test.huacai.com:8200/media/uploads/program/2020/202001/20200114175608_63663_1.png",
                error:require("../assets/error.png"),
                loading:require("../assets/loading.jpg")
            }
        }
    }
}
</script>
<style scoped>
img{
    width:900px;
    height:500px;
}
</style>
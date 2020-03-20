<template>
    <div>
        <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/course">课程</router-link>
            </li>
            <li>
                 <router-link to="/master">专家</router-link>
            </li>
            <li>
                 <router-link to="/helloSwiper">swiper</router-link>
            </li>
            <li>
                 <router-link to="/lazyloadDemo">lazyload</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'navlist',
    data(){
        return {

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
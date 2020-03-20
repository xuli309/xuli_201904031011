<template>
    <div>
        <div class="left">
            <ul>
                <li>
                    <router-link to="/course/java">java课程</router-link>
                </li>
                <li>
                     <router-link to="/course/web">web课程</router-link>
                </li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
export default {
    name:'course',
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.left,.right{
    float:left;
    border:1px solid #f1f1f1;
}
.left li{
    width:100px;
    height:40px;
    line-height: 40px;
    text-align: center;
    border-bottom:1px solid #f1f1f1;
}
.right{
    text-align: center;
    padding:100px;
}
</style>
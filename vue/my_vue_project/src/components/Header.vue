<template>
    <div class="app-header">
        <div class="con">
            <div class="left">
              <img src="../assets/logo.png" class="logo">
              <p class="l-con">头部标题头部标题头部标题</p>
            </div>
            <div class="right-nav">
                <ul>
                    <li>注册</li>
                    <li class="spile">|</li>
                    <li>登录</li>
                    <li class="spile">|</li>
                    <li>帮助</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'headercom',
    data(){
        return {

        }
    }
}
</script>
<style scoped>
    .app-header{
        width:100%;
        background:#000;
        height:80px;
        color:#fff;
    }

    .app-header .con{
        margin:0 auto;
        width:980px;
        padding:15px 10px;
    }

    .app-header .con .left{
        float:left;
    }

    .app-header .left .logo{
        width:60px;
        height:50px;
        float:left;
    }
    .app-header .left .l-con{
        height:50px;
        line-height: 50px;
        float:left;
    }
    .right-nav{
        float:right;
        padding:15px;
    }
    .right-nav li{
        float: left;
    }
    .right-nav .spile{
        padding:0 5px;
    }
</style>
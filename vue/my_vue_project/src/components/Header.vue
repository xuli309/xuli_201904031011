<template>
    <div class="header">
        <div class="con">
            <div class="left">
              <img src="../assets/logo.png" class="logo">
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
    .header{
        width:100%;
        background:#000;
        height:70px;
        color:#fff;
    }

    .header .con{
        margin:0 auto;
        width:980px;
        padding:10px 10px;
    }

    .header .con .left{
        float:left;
    }

    .header .left .logo{
        width:60px;
        height:50px;
    }
</style>
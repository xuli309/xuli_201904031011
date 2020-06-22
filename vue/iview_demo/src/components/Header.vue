<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
                <img src="../assets/logo.png" />
            </div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <span>admin</span> 欢迎您 ！
                </MenuItem>
                <MenuItem name="2" to="/about">
                    <Icon type="ios-notifications" />
                </MenuItem>
                <MenuItem name="3">退出</MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
export default {
      
}
</script>

<style scoped>
.layout-logo{
    width: 100px;
    height: 30px;
    /* background: #5b6270; */
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-logo img{
    width:60px;
    height:30px;
}

.layout-nav{
    width: 300px;
    margin: 0 auto;
    margin-right: 0px;
}
</style>
<template>
    <div class="layout-nav">
         <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/">首页</router-link>
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            <router-link to="/about">关于我们</router-link>
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
        </MenuItem>
        <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
        </MenuItem>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
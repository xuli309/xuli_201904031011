<template>
    <scroll-bar>
        <el-menu 
            mode="vertical"
            :show-timeout="200"
            :default-active="$route.path"
            :collapse="isCollapse"
            background-color="#bfcbd9"
            active-text-color="#409eff"
        >
            <sidebar-item :routes="routes"></sidebar-item>
        </el-menu>
    </scroll-bar>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SidebarItem from './SidebarItem'
    import ScrollBar from '@/components/ScrollBar'
    export default {
       components: {
           SidebarItem,
           ScrollBar
       }, 
       computed: {
           ...mapGetters(['sidebar','routers']),
            routes() {
               return this.routers 
            },
            isCollapse(){
                return !this.sidebar.opened;
            }
       },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger 
            class="hamburger-container" 
            :toggleClick="toggleSideBar" 
        ></hamburger> <!-- :isActive="sidebar.opened" -->
        <breadcrumb></breadcrumb>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" :src="avatar">
                <i class="el-icon-caret-buttom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class="inlineBlock" to="/">
                    <el-dropdown-item>首页</el-dropdown-item>
                </router-link>
                <el-dropdown-item divided>
                    <span @click="logout" style="display:block;">退出</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Hamburger from '@/components/Hamburger'
    import Breadcrumb from '@/components/Breadcrumb'    
    export default {
        components: {
            Breadcrumb,
            Hamburger
        },
        computed: {
            ...mapGetters(['silder','avatar'])
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch('toggleSidebar')
            },
            logout(){
                this.$store.dispatch('loginOut').then(() => {
                    location.reload();
                })
            }
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
<template>
    <Sider hide-trigger :style="{height: '100vh', left: 0}">
        <Menu :active-name="activeName" theme="dark" width="auto" :open-names="openName">
            <Submenu :name="item.id" v-for="item in menuList" :key="item.id" ref="child">
                <template slot="title">
                    <Icon :type="item.k_id"></Icon>
                    <span>{{item.title}}</span>
                </template>
                <template v-for="list1 in item.list">
                    <Submenu v-if="list1.list && list1.list.length!==0" :name="list1.id">
                        <template slot="title">
                            <Icon :type="list1.k_id"></Icon>
                            <span>{{list1.title}}</span>
                        </template>
                        <MenuItem 
                            :name="list2.id" 
                            v-for="list2 in list1.list"									            
                            :to="list2.url"
                            :key="list2.id"
                        >
                           <span>{{list2.title}}</span>
                        </MenuItem>
                    </Submenu>
                    <MenuItem  v-else
                        :name="list1.id" 							            
                        :to="list1.url"
                        :key="list1.id"
                    >
                        <span>{{list1.title}}</span>
                    </MenuItem>
                </template>
            </Submenu>
        </Menu>
    </Sider>
</template>

<script>
    export default {
        data() {
            return {
                menuList:[],
                activeName:'',
                openName:['/'],//默认展开二级-
            }
        },
        async created () {
            const rest = await this.$axios.get('/api/leftMenu');             
            this.menuList = rest.data.menu;
            console.log(this.menuList);
        },
        mounted () {
            const name = this.$route.path;
            console.log(11111,name);           
            // this.activeName=name;
        },
        
    }
</script>

<style scoped>

</style>
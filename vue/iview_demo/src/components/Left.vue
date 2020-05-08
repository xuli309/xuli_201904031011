<template>
    <Sider hide-trigger :style="{height: '100vh', left: 0}">
        <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
            <Submenu :name="item.name" v-for="item in menuList" :key="item.id" ref="child">
                <template slot="title">
                    <!-- <i :class="'iconfont '+item.k_id"></i> -->
                    <Icon :type="'ios-'+item.k_id"></Icon>
                    <span>{{item.title}}</span>
                </template>
                <template v-for="list1 in item.list">
                    <Submenu v-if="list1.list && list1.list.length!==0" :name="list1.id">
                        <template slot="title">
                            <!-- <i :class="'iconfont '+'11'"></i> -->
                            <Icon :type="'ios-'+list1.k_id"></Icon>
                            <span>{{list1.title}}</span>
                        </template>
                        <MenuItem 
                            :name="list2.id" 
                            v-for="list2 in list1.list"									            
                            :to="list2.url"
                            :key="list2.id">
                            {{list2.title}}
                        </MenuItem>
                    </Submenu>

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
            }
        },
        async created () {
            const rest = await this.$axios.get('/api/leftMenu');             
            this.menuList = rest.data.menu;
            console.log(this.menuList);
            
        }
        
    }
</script>

<style scoped>

</style>
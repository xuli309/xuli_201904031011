<template>
    <div>
        page3-{{id}}
    </div>
</template>

<script>
    export default {
        name:'page3',
        data(){
            return {
                
            }
        },
        created () {
            console.log(this.$route);
        },
        props:["id"],
        // computed: {
        //     name() {
        //         return this.$route.params.id; 
        //     }
        // },
        beforeRouteEnter(to, from, next) {
            console.log('进来page3',to);
            next();
        },
        beforeRouteUpdate(to, from, next) {//路由里头带id
            console.log('page3路由，参数变了');
            
            next();
        },
        beforeRouteLeave(to, from, next) {
            console.log('离开page3',to);
            if(window.confirm('你真的要离开page3吗？')){
                  next();
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
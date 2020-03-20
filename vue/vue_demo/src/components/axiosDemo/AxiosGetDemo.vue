<template>
    <div>
        <ul>
            <li v-for="(user,index) in users" :key="index">
                {{user.name}} -- {{user.age}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'axiosDemo',
    data(){
        return{
            users:[]
        }
    },
    created(){
        var url = this.HOST + '/js/area.json'
        this.$axios(url,{
            params:{
                type:'jush',
                name:'heihei'
            }
        }).then(res=>{
            console.log(res.data);
            this.users = res.data
            
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style>

</style>
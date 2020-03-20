<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{item.careacode}} -- {{item.careaname}}
            </li>
        </ul>
    </div>
</template>

<script>
import qs from 'qs'

export default {
    name:'axiosDemo',
    data(){
        return{
            list:[]
        }
    },
    created(){
        var url = this.HOST + '/api/getCareaList.do'
        this.$axios.post(url).then(res=>{
            console.log(res.data);
            this.list = res.data.list
            
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style>

</style>
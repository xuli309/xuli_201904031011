<template>
    <div>
        {{msg}}
        <button @click="changeinfo">change info</button>
    </div>
</template>
<script>
export default {
    name:'samll1',
    data(){
        return{
            msg:'small1'
        }
    },
    methods:{
        changeinfo(){
            this.msg = "small11111111111111111"
        }
    }
}
</script>
<style>

</style>
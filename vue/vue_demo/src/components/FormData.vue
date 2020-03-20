<template>
    <div>
        <input type="text" v-model="msg" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
export default{
    name:'formeData',
    data(){
        return{
            msg:'hello',
            message:'hello'
        }
    },
    watch:{
        msg:function(data){
            // console.log(data);
            // setTimeout(() => {
            //     this.message = data;
            // }, 1000);
            this.message = data;
            
        }
    }
}
</script>
<style>

</style>
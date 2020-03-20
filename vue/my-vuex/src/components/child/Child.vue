<template>
    <div>
        子组件：{{title}} {{getCount}}
        <button  @click="sendMsg"> 按钮 </button>

        <button @click="mul"> - </button>
    </div>
</template>
<script>
export default {
    name:'child',
    data(){
        return {
            info:'嗯嗯'
        }
    },
    props:{
        title:String,
        default:''
    },
    methods:{
        sendMsg(){
            this.$emit('info',this.info)
        },
        mul(){
            // return this.$store.commit("decrease");
            return this.$store.dispatch("decrease");
        }
    },
    computed:{
        getCount(){
            // return this.$store.state.count;
            return this.$store.getters.getStateCount;
        }
    }
}
</script>
<style scoped>

</style>
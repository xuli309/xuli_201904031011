<template>
    <div>
        outer: {{getCount}}
        <button @click="add"> + </button>
    </div>
</template>
<script>
export default {
    name:'outer',
    data(){
        return{

        }
    },
    computed:{
        getCount(){
            // return this.$store.state.count;
            return this.$store.getters.getStateCount;
        }
    },
    methods:{
        add(){
            // return this.$store.commit("increment");
            return this.$store.dispatch("increment");
        }
    }
}
</script>
<style scoped>

</style>
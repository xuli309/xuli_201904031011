<template>
    <div>
        page2--{{count}}--{{money}}
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from 'vuex'
    export default {
        name:'page2',
        data(){
            return {
                
            }
        },
        created () {
            this.incrementAsync({num:11})
            // this.$store.dispatch('incrementAsync',{num:10});
            setInterval(() => {
                // this.$store.commit('increment');
                this.increment({num:1})
            }, 2000);
        },
        computed: {
            ...mapState({
                count: state=>state.count 
            }),
            // count() {
            //     return this.$store.state.count; 
            // },
            money(){
                return this.$store.getters.money;
            }
        },
        methods: {
           ...mapActions(['incrementAsync']),
           ...mapMutations(['increment'])
        },
    }
</script>

<style lang="scss" scoped>

</style>
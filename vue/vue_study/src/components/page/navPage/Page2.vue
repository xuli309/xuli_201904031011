<template>
    <div>
        page2--{{count}}--{{money}}
    </div>
</template>

<script>
    export default {
        name:'page2',
        data(){
            return {
                
            }
        },
        created () {
            setInterval(() => {
                this.$store.commit('increment');
            }, 2000);
        },
        computed: {
            count() {
                return this.$store.state.count; 
            },
            money(){
                return this.$store.getters.money;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
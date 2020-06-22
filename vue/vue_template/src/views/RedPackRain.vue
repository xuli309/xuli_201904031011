<template>
    <div>
        <red-package ref="redPackRain" :time="30"></red-package>
    </div>
</template>

<script>
    import RedPackage from '@/components/redPackRain/Index';
    export default {
        name: 'redpackrain',
        components: {
            RedPackage
        },
        beforeDestroy() {
            this.$refs.redPackRain.clear();
        },
        mounted() {
            this.$refs.redPackRain.start();
        }
    }
</script>

<style lang="scss" scoped>

</style>
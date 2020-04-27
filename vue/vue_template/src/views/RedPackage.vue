<template>
    <div>
        <red-package ref="redPack" :time="30"></red-package>
    </div>
</template>

<script>
    import RedPackage from '@/components/redPackage/Index';
    export default {
        name: 'redpack',
        components: {
            RedPackage
        },
        
    }
</script>

<style lang="scss" scoped>

</style>
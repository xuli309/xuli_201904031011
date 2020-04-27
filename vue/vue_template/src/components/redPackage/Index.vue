<template>
    <div class="wrap">
        <red-package-main></red-package-main>
    </div>
</template>

<script>
    import RedPackageMain from './RedPackageMain.vue';
    
    export default {
        components: {
            RedPackageMain
        },
    };
    
</script>

<style scoped>
.wrap{
	width:7.5rem;
	margin:0 auto;
    margin-top: 0.35rem;
}

</style>
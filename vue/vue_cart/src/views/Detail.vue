<template>
    <div>
        详情页
        {{$route.params.id}}
        {{id}}
    </div>
</template>

<script>
    export default {
        props:['id']
    }
</script>

<style lang="scss" scoped>

</style>
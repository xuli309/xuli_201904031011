<template>
    <div>
        <h3>孙子元素：{{aprovid.tua}}</h3>
    </div>
</template>
<script>
export default {
    name:'child',
    inject:['aprovid'],
    data(){
        return {

        }
    }
}
</script>
<style scoped>

</style>
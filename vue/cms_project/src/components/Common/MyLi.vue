<template>
    <div>
        <li>
            <slot></slot>
        </li>
    </div>
</template>

<script>
export default {
    name: 'my-li',
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
li{
    list-style: none;
    float:left;
    width:33.3%;
    text-align: center;
    height:100px;
}
</style>

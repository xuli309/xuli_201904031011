<template>
    <div class="header">
        <h1>{{title}}</h1>
        <i v-if="showback" class="cubeic-back"></i>
        <div class="extend">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'kheader',
        props: {
            title: {
                type: String,
                default: '',
                require:true
            },
            showback:{
                type:Boolean,
               default:false
            }
        },
        data(){
            return{
               
            }
        },
        methods: {
            back() {
                this.$route.back();
            }
        },
    }
</script>

<style scoped>
    .header{
        position: relative;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background: #edf0f4;
    }
    .header .cubeic-back{
        position: absolute;
        top:0;
        left:0;
        padding:0 15px;
        color: #fc915b;
    }
    .header .extend{
        position: absolute;
        top:0;
        right:0;
        padding:0 15px;
        color: #fc915b;
    }
</style>
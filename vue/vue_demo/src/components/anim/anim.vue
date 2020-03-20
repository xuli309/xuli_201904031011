<template>
    <div>
        <button @click="showHide">按钮</button>

        <transition name="fade">
            <p v-show="show">hello world</p>
        </transition>

        <button @click="showHideAinm">过渡</button>
        <transition name="bounce">
            <p v-show="showAinm">嘿嘿</p>
        </transition>
       

        <svg viewBox="0 0 120 120" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="50"/>
        </svg>

    </div>
</template>
<script>
export default {
    name:'anim',
    data(){
        return{
            show:true,
            showAinm:true,
        }
    },
    methods:{
        showHide(){
            this.show = !this.show;
        },
        showHideAinm(){
            this.showAinm = !this.showAinm;
        }
    }
}
</script>
<style>
    /* .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ /*{
        opacity: 0;
    } */

    /*从0-1的过程*/
    .fade-enter,.fade-leave-to{
        /* opacity: 0; */
        transform: translate(100px,0);
    }
   .fade-enter-active,.fade-leave-active{
       transition: opacity .5s;
    }
   
    .fade-enter-to,.fade-leave{
        /* opacity: 1; */
        transform: translate(0px,0);
    }

    .bounce-enter-active{
        animation: bounce-in  .1s ease;
    }
    .bounce-leave-active{
        animation: bounce-in  .1s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
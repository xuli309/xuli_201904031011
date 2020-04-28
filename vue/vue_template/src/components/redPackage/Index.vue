<template>
    <div class="wrap">
        <red-package-main></red-package-main>

        <button @click="onAnimate">动画开始</button>
        <transition name="slide-fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
    import RedPackageMain from './RedPackageMain.vue';
    
    export default {
        components: {
            RedPackageMain
        },
        data() {
            return {
                show: true
            }
        },
        methods: {
            onAnimate() {
                this.show=false
            }
        },
    };
    
</script>

<style scoped>
.wrap{
	width:7.5rem;
	margin:0 auto;
    margin-top: 0.35rem;
}


/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} 
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(80px);
  opacity: 0;
}

</style>
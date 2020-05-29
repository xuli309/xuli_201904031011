<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <my-header></my-header>
    <my-left></my-left>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MyHeader from '@/components/common/Header.vue';
import MyLeft from '@/components/common/Left.vue';

export default { 
  name: 'Home',
  components: {
    // HelloWorld
    MyHeader,
    MyLeft
  }
}
</script>
<style>
.home{
  text-align:center;
}
</style>
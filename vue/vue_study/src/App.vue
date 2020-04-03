<template>
  <div id="app">
    <router-view />
    <hr />
    <Goods2></Goods2>
    <hr />
    <Goods1></Goods1>
    <hr />
    <FormTest></FormTest>

    <hr>

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" ref="hw" @add='jsAdd($event)'  />
    <HelloWorld2>
        <template v-slot:default>匿名插槽<br></template>
        <!-- <template v-slot:content="slotProps">具名插槽: {{slotProps.bla}}</template> -->
        <template v-slot:content="{bla,bar}">具名插槽: {{bla}}{{bar}}</template>
    </HelloWorld2>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'

import FormTest from './components/form/Index'

import Goods1 from './components/cart/cart1/Goods'
import Goods2 from './components/cart/cart2/Goods'


export default {
  name: 'App',
  // provide:{
  //   aprovid:'aprovid'
  // },
  provide(){
    return {
      aprovid:this//传递Form实例给后代，比如formItem用了校验
    }
  },
  data(){
    return {
      tua:'tua'
    }
  },
  components: {
    HelloWorld,
    HelloWorld2,
    FormTest,
    Goods1,
    Goods2,
  },
  mounted(){
     this.$refs.hw.foo = "ddddd"

     this.$children[0].foo='aaaa'
  },
  methods:{
    jsAdd(count){
      console.log("add",count);
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

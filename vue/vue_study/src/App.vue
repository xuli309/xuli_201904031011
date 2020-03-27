<template>
  <div id="app">
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
    FormTest
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

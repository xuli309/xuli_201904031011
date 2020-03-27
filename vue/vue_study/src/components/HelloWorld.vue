<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2  @click="$emit('add',222)">{{ foo }}</h2>
    <h3>子元素：{{aprovid}}</h3>

    <Child />
  </div>
</template>

<script>
import Child from './child/Child'

export default {
  name: 'HelloWorld',
  inject:['aprovid'],
  props: {
    msg: String
  },
  data(){
    return {
      foo:'foo'
    }
  },
  created(){
    this.$parent.$on('mua',()=>{
      console.log('mua');
    })
  },
  components:{
    Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

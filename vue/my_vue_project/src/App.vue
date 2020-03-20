<template>
  <div id="app">
    <Header></Header>
    <button @click="getData">获取数据</button>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  methods:{
 
  }
}
</script>

<style>

</style>

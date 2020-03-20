<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <NavList></NavList>
    <router-view />
  </div>
</template>

<script>
import NavList from './components/NavList'

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    NavList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:900px;
  margin:0 auto;
}
*{
  margin:0;
  padding:0;
}
ul{
  list-style: none;
  width:100%;
}

</style>

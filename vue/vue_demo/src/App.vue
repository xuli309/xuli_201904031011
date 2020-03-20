<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <!-- <Event/> -->
    <!-- <FormData /> -->
    <!-- <Styles /> -->
    <!-- <MyCompontent /> -->
    <!-- <ParentComponent /> -->
    <!-- <Parent /> -->
    <!-- <Big /> -->
    <!-- <Anim /> -->
    <!-- <Hello /> -->

    <!-- <AxiosGetDemo /> -->
    <!-- <AxiosPostDemo /> -->

    <NavList />
    <router-view></router-view>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Event from './components/Event'
import FormData from './components/FormData'
import Styles from  './components/Styles'
import MyCompontent from './components/myComponent'
import ParentComponent from './components/sonparent/ParentComponent'
import Parent from './components/slots/Parent'
import Big from './components/comkeep/big'
import Anim from './components/anim/anim'
import Hello from './components/Hello'

import AxiosGetDemo from './components/axiosDemo/AxiosGetDemo'
import AxiosPostDemo from './components/axiosDemo/AxiosPostDemo'

import NavList from './components/NavList'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Event,
    FormData,
    Styles,
    MyCompontent,
    ParentComponent,
    Parent,
    Big,
    Anim,
    Hello,
    AxiosGetDemo,
    AxiosPostDemo,
    NavList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul{
  list-style: none;
}
*{margin:0;padding:0}
</style>

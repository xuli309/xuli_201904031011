<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <span v-if="isLogin" @click="logout">退出</span>
    </div> -->
   
    <transition name="route-move">
      <router-view/>
    </transition>

     <cube-tab-bar
       v-model="selectedLabelDefault"
       :data="tabs"
       @change="changeHandle"
       show-slider
    >
      <cube-tab v-for="(item,index) in tabs" :key="index" :icon="item.icon" :label="item.value">
          <span>{{item.label}}</span>
          <span class="badge" v-if="item.label=='Cart'">{{cartTotal}}</span>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      selectedLabelDefault:'/',
      tabs:[
        {
          label:"Home",
          icon:"cubeic-home",
          value:'/'
        },
        {
          label:"Cart",
          icon:"cubeic-mall",
          value:'/cart'
        },
        {
          label:"Me",
          icon:"cubeic-person",
          value:'/login'
        }
      ]
    }
  },
  async created () {
    this.selectedLabelDefault = this.$route.path;//默认选中的链接 登录之前和登录之后的区别
    const token = localStorage.getItem('token');    
    if(token){
      this.$store.commit('settoken',token)
    }
    const ret = await this.$axios.get('/api/goods');
  },
  computed: {
    ...mapGetters({
      cartTotal:"cartTotal"
    }),
    isLogin() {
      return !!this.$store.state.token 
    },
  },
  methods: {
    logout() {
      this.$axios.get('/api/logout')
    },
    changeHandle(val){
      // console.log(val);
      this.$router.push(val)
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
  padding-bottom: 40px;;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.route-move-enter,.route-move-leave-active{
  transform: translate(100%,0);
}
.route-move-enter-active,.route-move-leave-active{
  transition: transform 0.3s;
}
.badge{
  display: inline-block;
  background:#de3529;
  color:#fff;
  padding:5px;
  border-radius:50%;
}
.cube-tab-bar{
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  background:#edf0f4;
}
</style>

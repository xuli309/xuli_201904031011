<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <span v-if="isLogin" @click="logout">退出</span>
    </div> -->
    

    <cube-tab-bar
       v-model="selectedLabelDefault"
       :data="tabs"
       @change="changeHandle"
       show-slider
    >
    </cube-tab-bar>
    <transition name="route-move">
      <router-view/>
    </transition>
  </div>
</template>

<script>
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
    isLogin() {
      return !!this.$store.state.token 
    }
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
</style>

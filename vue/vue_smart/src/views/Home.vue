<template>
  <div class="home">
    <cube-slide :data="slider">
      <cube-slide-item v-for="(item,index) in slider" :key="index" :threshold="0.7" :interval="10">
        <router-link :to="`/detail/${item.id}`">
          <img class="slider" :src="item.img" />
        </router-link>
      </cube-slide-item>
    </cube-slide>
    <cube-button @click="showCatg">选择分类</cube-button>
    <cube-drawer 
      ref="drawer"
      title="请选择分类"
      :data="[drawList]"
      @select="selectHander"
    >
    </cube-drawer>
    <GoodList :data="all"></GoodList>
  </div>
</template>

<script>

import GoodList from '../components/GoodList.vue'

let lables = {
  'fe':'前端',
  'python':'Python',
  'java':'Java',
  'bigdata':'大数据',
  'ai':'人工智能'
}

export default {
  name: 'Home',
  data(){
    return{
      slider:[],
      keys:[],
      selectKeys:[],
      data:{},
    }
  },
  components:{
    GoodList
  },
  async created () {
    const ret = await this.$axios.get('/api/goods');    
    this.slider = ret.slider;
    this.keys = ret.keys;
    this.selectKeys = ret.keys;
    this.data = ret.data;
    // console.log(this.slider);
  },
  computed: {
    drawList(){
        return this.keys.map(v=>{
          return {
            value:v,
            text:lables[v]
          }
        })
    },
    all() {
      let ret = [];
      this.keys.forEach(v => {
        ret = ret.concat(this.data[v])
      });
      return ret;
    }
  },
  methods: {
    showCatg() {
      this.$refs.drawer.show()
    },
    selectHander(value,index,text){
      // console.log(value);
      this.selectKeys = [...value]
    }
  },
 
}
</script>
<style scoped>
  .slider{
    width:100%
  }
</style>

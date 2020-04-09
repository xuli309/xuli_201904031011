<template>
  <div class="home">
    <KHeader title="电商demo">
      <i class="cubeic-tag"  @click="showCatg"></i>
    </KHeader>
    <cube-slide :data="slider">
      <cube-slide-item v-for="(item,index) in slider" :key="index" :threshold="0.7" :interval="10">
        <router-link :to="`/detail/${item.id}`">
          <img class="slider" :src="item.img" />
        </router-link>
      </cube-slide-item>
    </cube-slide>
    <!-- <cube-button @click="showCatg">选择分类</cube-button> -->
    <cube-drawer 
      ref="drawer"
      title="请选择分类"
      :data="[drawList]"
      @select="selectHander"
    >
    </cube-drawer>
    <GoodList :data="all" @addCart="onAddCart"></GoodList>

    <div class="ball-wrap">
      <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <div class="ball" v-show="ball.show">
          <div class="inner">
            <div class="cubeic-add"></div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

import GoodList from '../components/GoodList.vue'
import KHeader from '../components/KHeader'

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
      ball:{
        show:false,
        el:null, //目标dom
      }
    }
  },
  components:{
    GoodList,
    KHeader
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
    },
    onAddCart(el){
      this.ball.show = true;
      this.ball.el = el
    },
    beforeEnter(el){
      // 1.获取点击的dom
      const dom = this.ball.el;
      const rect = dom.getBoundingClientRect();
      console.log(rect.top,rect.left);

      // 小球移动到点击的位置
      const x = rect.left - window.innerWidth/2;
      const y = -(window.innerHeight-rect.top-10-20);
      el.style.display = '';
      el.style.transform = `translate3d(0,${y}px,0)`;
      const  inner  = el.querySelector('.inner');
      inner.style.transform = `translate3d(${x}px,0,0)`;
    },
    enter(el,done){
      // 强制重绘
      this._reflow = document.body.offsetHeight;
      // 动画开始，移动到初始位置
      // 小球移动到购物车位置
      el.style.transform = `translate3d(0,0,0)`;
      const  inner  = el.querySelector('.inner');
      inner.style.transform = `translate3d(0,0,0)`;
      el.addEventListener('transitionend',done)
    },
    afterEnter(el){
      // 结束 隐藏小球
      this.ball.show = false;
      el.style.display = 'none';
    }
  },
 
}
</script>
<style scoped>
  .slider{
    width:100%
  }

  .ball-wrap .ball{
    position:fixed;
    left:50%;
    bottom:10px;
    z-index:200;
    color:red;
    transition: all 0.5s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  }
  .ball-wrap .ball .inner{
    width:16px;
    height:16px;
    transition: all 0.5s linear;
  }
  .cubeic-add{
    font-size:12px;
  }
</style>

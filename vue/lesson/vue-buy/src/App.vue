<template>
  <div v-if="showName">
    <!--{{name}}
    <input type="text" v-model="text"  /><button @click="addGoods">添加</button>-->
    <ul>
      <li v-for="(good,index) in goods" :key="good.text">
        {{good.text}}
        <button @click="addCart(index)">添加购物车</button>
      </li>
    </ul>
    <hr>
    <Cart :name="name"></Cart>
  </div>
  
</template>

<script>
import axios from 'axios'
import Cart from './components/Cart'
export default {
  name:"app",
  components:{
    Cart
  },
  data(){
    return {
      name: 'ddddd',
      showName:true,
      goods:[],
      text:'',
      // cart:[],
    }
  },
  async created(){
   try {
     const res = await axios.get('/api/goods');
     this.goods = res.data.list;
   } catch (error) {
      console.log(error);
   }
    // axios.get('/api/goods').then(res => {
    //   this.goods = res.data.list
    // }).catch(err => {
    //   console.log(err);
    // })
    // setTimeout(() => {
    //   this.showName = false;
    // },2000)
  },
    methods:{
    addCart(index){
      const good = this.goods[index];
      this.$bus.$emit('addCart', good);//触发一个事件
    },
    // addCart(index){
    //   const good = this.goods[index];
    //   const ret = this.cart.find(v=>v.text === good.text);
    //   if(ret){
    //     ret.count += 1;
    //   }else{
    //     this.cart.push({
    //       ...good, //继承属性
    //       // text: good.text,
    //       // price: good.price,
    //       active: true,
    //       count: 1
    //     })
    //   }
    // },
    addGoods(){
      if(this.text){
        this.goods.push({text:this.text});
        this.text = "";
      }
    },
    
  }
}
</script>

<style>

</style>

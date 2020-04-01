<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <img :src="img.img" />
            </mt-swipe-item>
        </mt-swipe>

        <div class="grid">
            <my-ul>
                <my-li v-for="(grid, index) in grids" :key="index">
                    <router-link :to="grid.router">
                        <div :class="grid.className">{{ grid.title }}</div>
                    </router-link>
                </my-li>
            </my-ul>
           
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        imgs: [],
        grids: [
            {className:'div1', title:'新闻资讯', router:{name:'news.list'}},
            {className:'div2', title:'图文分享', router:{name:'photo.list',params:{categoryId:0}}},
            {className:'div3', title:'商品展示', router:{name:'news.list'}},
            {className:'div4', title:'留言反馈', router:{name:'news.list'}},
            {className:'div5', title:'搜索资讯', router:{name:'news.list'}},
            {className:'div6', title:'联系我们', router:{name:'news.list'}}
        ]
    }
  },
  created () {
      this.$axios.get('http://rap2api.taobao.org/app/mock/166270/getlunbo')
      .then((result) => {
            // console.log(result.data)
            this.imgs = result.data.message;
       
      }).catch((err) => console.log(err))
  }
}

</script>

<style scoped>
.mint-swipe{
    height:200px;
}
img{
    width:100%;
}
.grid li a{
    width:100%;
    display: block;
}
.grid li a div{
    display: block;
    height:35px;
    line-height:35px;
    padding-top:50px;
}
.grid li a .div1{
    background:url('../../assets/img/1.png') no-repeat top center;
    background-size:50px 50px;
}
.grid li a .div2{
    background:url('../../assets/img/2.png') no-repeat top center;
    background-size:50px 50px;
}
.grid li a .div3{
    background:url('../../assets/img/3.png') no-repeat top center;
    background-size:50px 50px;
}
.grid li a .div4{
    background:url('../../assets/img/4.png') no-repeat top center;
    background-size:50px 50px;
}
.grid li a .div5{
    background:url('../../assets/img/3.png') no-repeat top center;
    background-size:50px 50px;
}
.grid li a .div6{
    background:url('../../assets/img/3.png') no-repeat top center;
    background-size:50px 50px;
}
</style>

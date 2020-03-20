<template>
  <div class="carousel">
        <el-carousel height="150px">
          <el-carousel-item v-for="(item,index) in images" :key="index">
            <img :src="item" />
           </el-carousel-item>
        </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      images:[
        '/static/logo.png',
        '/static/logo.png'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel{
  clear: both;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img{
    width:100%;
    height:150px;
  }
</style>

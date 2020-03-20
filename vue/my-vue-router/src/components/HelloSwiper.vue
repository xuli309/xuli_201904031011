<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in banners" :key="index">
        <img :src="slide" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
    name:'helloSwiper',
    data(){
        return{
            banners:[
               '/static/logo.png',
              '/static/logo.png'
            ],
           swiperOption: {
               autoplay:true,
               pagination:{
                  el:".swiper-pagination"
               }
           },
          
        }
    },
    created(){
        var url = this.HOST + '/js/area.json'
        this.$axios.get(url)
        .then(res=>{
            console.log(res.data);
        }).catch(error=>{
            console.log(error);
            
        })
    }
}
</script>
<style scoped>
.swiper-container{
    float:left;
}
img{
    width:900px;
    height:200px;
}
</style>
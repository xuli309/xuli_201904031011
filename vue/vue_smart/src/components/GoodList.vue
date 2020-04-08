<template>
    <div>
        <div v-for="(item,index) in data" :key="index" class="item">
            <router-link :to="`/detail/${item.id}`">
                <div class="left">
                    <img :src="item.img"  @click.stop.prevent="imgPreview(item.img)" />
                </div>
                <div class="right">
                    <div class="title">{{ item.title }}</div>
                    <div class="info">
                        <i class="cubeic-add" @click.stop.prevent="addCart(item)"></i>
                        <span>{{item.count}} 人购买</span>
                    </div>
                </div>
            </router-link>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'goodlist',
    props: ["data"],
    methods: {
        addCart(item) {
            // console.log(item);
            this.$store.commit('addCart',item);
        },
        imgPreview(imgUrl){
            // console.log(imgUrl);
            this.$createImagePreview({
                imgs: [imgUrl]
            }).show();
        }
    },
}
</script>
<style scoped>
.item{
    padding:10px;
    overflow:hidden;
}
.item .left{
    width:100px;
    float:left;
}
.item .left img{
  width:100%;
}
    
.right{
    margin-left:120px;
    text-align:left;
}
.right .title{
    line-height:30px;
}
.right .title .cubeic-add{
      font-size:22px;
}
    
</style>

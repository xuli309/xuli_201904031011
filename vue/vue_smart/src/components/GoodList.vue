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
                        <span>{{item.count}} 人购买</span>
                        <i class="cubeic-add" @click.stop.prevent="addCart($event,item)"></i>
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
        addCart(event,item) {
            // console.log(item);
            this.$store.commit('addCart',item);
            // 把点击的dom传递出去
            this.$emit('addCart',event.target);
            // console.log(event.target);
            
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
    text-align:right;
}
.right .title{
    line-height:30px;
}
.right .title .cubeic-add{
      font-size:22px;
}
    
</style>

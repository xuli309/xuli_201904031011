<template>
    <div class="templ">
        <nav-bar title="图文列表"></nav-bar>
        <div class="photo-header">
            <ul>
                <li v-for="category in categorys" :key="category.id">
                    <a @click="loadImgByCategoryId(category.id)" href="javascript:;">{{ category.title }}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="photo in photoList" :key="photo.id">
                    <router-link :to="{name:'photo.detail',query:{id:photo.id}}">
                        <img v-lazy="photo.img_url">
                        <p>
                            <span>{{ photo.title }}</span><br>
                            <span>{{ photo.zhaiyao }}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            photoList:[],
            loading:false,
            categorys:{}
        }
    },
    created () {
        //获取图文信息
       let categoryId = this.$route.params.categoryId;
       this.loadImgById(categoryId)
       // 获取分类信息
       this.$axios.get('http://rap2api.taobao.org/app/mock/166270/getImgCategory')
        .then((result) => {
            this.categorys = result.data.message;

            //向数组的第一个元素添加一个全部
            this.categorys.unshift({
                id:0,
                title:'全部'
            })

        }).catch((err) => console.log(err));

        
    },
    methods:{
        loadImgByCategoryId(categoryId){
           
            this.$router.push({
              name: 'photo.list',
              params:{categoryId}
            })
            this.loadImgById(categoryId);            
            
        },
        loadImgById(id){
            this.$axios.get('http://rap2api.taobao.org/app/mock/166270/getPhotoList')
            .then((result) => {
                this.photoList = result.data.message;     
            }).catch((err) => console.log(err))
        }
    },
    beforeRouteUpdate(to, from, next){
        this.loadImgById(to.params.categoryId);
        next();
    }
}
</script>

<style scooped>
ul{
    padding:0;
    margin:0;
}
li{
    list-style: none;
}

.photo-header {
    height:30px;
    line-height: 30px;
}

.photo-header li {
    float:left;
    margin-right:5px;
}

.photo-list li{
    position: relative;
}
.photo-list  a{
    text-decoration: none;
}
.photo-list  image[lazy=loading] {
  width: 40px;
  height: 30px;
  margin: auto;
}
.photo-list  p{
    margin:0;
    position:absolute;
    bottom:0;
    color:#fff;
}
</style>

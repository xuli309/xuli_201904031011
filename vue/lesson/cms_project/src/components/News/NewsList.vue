<template>
    <div class="templ">
        <nav-bar title="新闻列表"></nav-bar>
        <div class="demo">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10">
                <li v-for="news in newsList" :key="news.id">
                    <router-link :to="{name: 'news.detail', query:{id: news.id}}">
                        <img :src="news.img_url">
                        <div class="news-list">
                            <p>{{news.title}}</p>
                            <div class="new-desc">
                                <span>点击数：{{ news.click }}</span>
                                <span>发表时间：{{ news.add_time | convertTime('YYYY-MM-DD')}}</span>
                            </div>
                        </div>
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
            newsList:[],
            loading:false,
        }
    },
    created () {
      this.$axios.get('http://rap2api.taobao.org/app/mock/166270/getNewsList')
      .then((result) => {
            this.newsList = result.data.message;
       
      }).catch((err) => console.log(err))
    },
    methods:{
        loadMore() {
            // this.loading = true;
            // setTimeout(() => {
            //     let last = this.newsList[this.newsList.length - 1];
            //     for (let i = 1; i <= 10; i++) {
            //         this.newsList.push(last + i);
            //     }
            //     this.loading = false;
            // }, 2500);
        }
    }
}
</script>

<style scooped>
ul{
    padding:0;
    margin:0;
}
.demo li{
    list-style: none;
    padding:10px;
    border-bottom:1px solid #999;
    height:50px;
}
li a{
    display: block;
    width:100%;
    height:50px;
}
li img{
    width:50px;
    height:50px;
    float: left;
    display: block;
}
li .news-list{
    float:left;
    height:50px;
    padding-left:10px;
}
li .news-list p{
    margin:0;
    font-size:20px;
    display: block;
    width:100%;
    height:30px;
    color: #000;
}
li .news-list .new-desc{
    width:100%;
    float:left;
}
li .news-list .new-desc span{
    font-size:12px;
}
</style>

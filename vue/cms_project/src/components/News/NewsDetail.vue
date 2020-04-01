<template>
    <div class="templ">
        <nav-bar title="新闻详情"></nav-bar>
        <div class="news-title">
            <p>{{newsDetail.title}}</p>
            <div class="news-dec">
                <span>{{newsDetail.click}}次点击数</span>
                <span>分类：民生经济</span>
                <span>添加时间：{{ newsDetail.add_time | convertTime('YYYY-MM-DD')}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsDetail.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newsDetail:{}
        }
    },
   created () {
        let id = this.$route.query.id
        this.$axios.get('http://rap2api.taobao.org/app/mock/166270/getNewsDetail')
        .then((result) => {
            this.newsDetail = result.data.message[0];
        }).catch((err) => console.log(err))
    },
}
</script>

<style scoped>
    .news-title p{
        color: #0a87f8;
        font-size:20px;
        font-weight: bold;
        margin:0;
        padding: 5px 10px;
    }
    .news-title span{
        color: #0a87f8;
        font-size:12px;
    }
    .news-title .news-dec{
        padding:0 10px 
    }
    .news-content{
        padding:5px;
    }
    .news-content img{
        width:100%;
    }
</style>

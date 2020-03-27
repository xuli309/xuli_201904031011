<template>
  <div id="app">
    <Header :msg="msg"></Header>
    {{msg}}
    <button @click="getData">获取数据</button>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return {
      msg:"Hello vue"
    }
  },
  components:{
    Header,
    Footer
  },
  methods:{
    getData(){
      // 调用发送内容
      let url = this.HOST;
      console.log(url);

      let xhr = new XMLHttpRequest(); 
      xhr.open('GET', url, true);
      xhr.responseType = "blob";
      xhr.onload = function(e) {
        if (this.status == 200) {
            console.log("=====");
            
            //接受二进制文件流
            let res = this.response;
            console.log(res);
            
            // var blob = new Blob([`\ufeff${res.data}`], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}); // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型

            // var downloadElement = document.createElement('a');
            // var href = window.URL.createObjectURL(blob); // 创建下载的链接
            // downloadElement.href = href;
            // downloadElement.download = 'SN.xlsx'; // 下载后文件名
            // document.body.appendChild(downloadElement);
            // downloadElement.click(); // 点击下载
            // document.body.removeChild(downloadElement); // 下载完成移除元素
            // window.URL.revokeObjectURL(href); // 释放掉blob对象


        }
        };
        xhr.send();

    }
  }
}
</script>

<style>

</style>

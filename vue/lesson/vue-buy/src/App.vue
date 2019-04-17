<template>
  <div>
    <button @click="sendAjax">发起请求</button>
    <br>
    <hr>
    响应1：{{res1}}
    <br>
    响应2：{{res2}}
    <br>
    <button @click="sendAjaxHB">合并请求</button>
    <br>
    <hr>
    <button @click="sendAjaxTest">合并请求</button>
    <br>
    <hr>
    <button @click="sendAjaxCookie">获取cookie</button>
    <button @click="sendAjaxCookie2">携带cookie</button>
    <br><hr>

    上传进度：{{rate}}%
    选择文件：<input type="file" name="file" @change="changeFile"> 
    <button @click="sendAjaxReq">发请求</button> 
     | <button @click="cancelAjax">取消请求</button>
     | <button @click="resume">再继续</button>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      res1: "",
      res2: "",
      file:{},
      rate:0,
      loaded:0
    };
  },
  methods: {
    resume(){
        const fileData = this.file.slice(this.loaded+1, this.file.size);

        const fd = new FormData();
        fd.append('file',fileData);

        const CancelToken =  this.$axios.CancelToken;
        const source = CancelToken.source();
        this.source = source;

        this.$axios.post('/add',fd,{
          cancelToken: source.token,
          onUploadProgress: (pregressEvent)=>{
            this.loaded = pregressEvent.loaded;
            console.log(pregressEvent.loaded);
            this.rate = (pregressEvent.loaded / pregressEvent.total)*100
          },
        }).then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })

    },
    sendAjaxReq(){
      const CancelToken =  this.$axios.CancelToken;
      const source = CancelToken.source();
      this.source = source;

      const fd = new FormData();
      fd.append('file',this.file);
      this.$axios.post('/add',fd,{
        cancelToken: source.token,
        onUploadProgress: (pregressEvent)=>{
          this.loaded = pregressEvent.loaded;
          console.log(pregressEvent.loaded);
          this.rate = (pregressEvent.loaded/pregressEvent.total)*100
        },
      }).then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
    },
    cancelAjax(){
      this.source.cancel();
    },
    changeFile(e){
      // console.log(e.target.files[0]);
      this.file = e.target.files[0];
    },
    sendAjax() {
      this.$axios
        .get("http://127.0.0.1:8080/api/goods")
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendAjaxHB() {
      //配置公共数据
      this.$axios.defaults.baseURL = "http://127.0.0.1:8080/";

      const res1 = this.$axios.get("api/goods");
      const res2 = this.$axios.post("add", "a=1");

      //合并请求，并处理数据
      this.$axios
        .all([res1, res2])
        .then(
          this.$axios.spread((req1, req2) => {
            this.res1 = req1.data.list;
            this.res2 = req2.data.list;
          })
        )
        .catch(err => {
          console.log(err);
        });
    },
    sendAjaxTest() {
      //配置公共数据
      this.$axios.defaults.baseURL = "http://127.0.0.1:8080/";
      //所有请求自带头信息
      // this.$axios.headers = {};//覆盖原本默认头
      //修改个别头信息
      this.$axios.defaults.headers.Accept = "abc";

      //请求1
      this.$axios
        .get("api/goods", {
          params: { id: 1 },
          transformResponse: function(data) {
            console.log(data);
            //res.data
            data = "改了数据";
            return data;
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

      //请求2
      this.$axios
        .post("add", "name=jack", {
          timeout: 5000,
          transformResponse: function(data) {
            // 加工请求体数据
            return "name=rose";
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendAjaxCookie2() {

      this.$axios.defaults.baseURL = "http://127.0.0.1:8080/";
      this.$axios.defaults.withCredentials = true
      this.$axios
        .get("add")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendAjaxCookie() {
      // withCredentials: false, // default
      this.$axios.defaults.baseURL = "http://127.0.0.1:8080/";

      //请求:获取cookie
      this.$axios
        .get("add")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    
  }
};
</script>

<style>
</style>

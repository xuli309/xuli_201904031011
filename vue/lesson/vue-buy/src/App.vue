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

    <br><hr>
    <div class="cssload-thecube" v-show="isShow">
      <div class="cssload-cube cssload-c1"></div>
      <div class="cssload-cube cssload-c2"></div>
      <div class="cssload-cube cssload-c4"></div>
      <div class="cssload-cube cssload-c3"></div>
    </div>
    <button @click="sendAjaxFilter">拦截发请求</button>
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
      loaded:0,
      isShow:false
    };
  },
  created(){
    
  },
  methods: {
    //实现cookie实例

    sendAjaxFilter(){
     
      this.$axios.defaults.baseURL = "http://127.0.0.1:8080/";

      // 配置拦截器
      this.$axios.interceptors.request.use((config) =>{
        // console.log(config);

        const token = localStorage.getItem('token');console.log(token)
        if(token){
          config.headers['token'] = token;
        }

        this.isShow = true;
        return  config;
      });

      // 响应拦截器
      this.$axios.interceptors.response.use((res) =>{
        // console.log(res);
        const token = res.headers.token;console.log(res)
        if(token){
          localStorage.setItem('token',token);
        }
        
        this.isShow = false;
        return  res;
      });

      this.$axios.get("add").then(res => {
          console.log('响应回来了',res);
      }).catch(err => {
          console.log(err);
      });
    },
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
.cssload-thecube {
	width: 73px;
	height: 73px;
	margin: 0 auto;
	margin-top: 49px;
	position: relative;
	transform: rotateZ(45deg);
		-o-transform: rotateZ(45deg);
		-ms-transform: rotateZ(45deg);
		-webkit-transform: rotateZ(45deg);
		-moz-transform: rotateZ(45deg);
}
.cssload-thecube .cssload-cube {
	position: relative;
	transform: rotateZ(45deg);
		-o-transform: rotateZ(45deg);
		-ms-transform: rotateZ(45deg);
		-webkit-transform: rotateZ(45deg);
		-moz-transform: rotateZ(45deg);
}
.cssload-thecube .cssload-cube {
	float: left;
	width: 50%;
	height: 50%;
	position: relative;
	transform: scale(1.1);
		-o-transform: scale(1.1);
		-ms-transform: scale(1.1);
		-webkit-transform: scale(1.1);
		-moz-transform: scale(1.1);
}
.cssload-thecube .cssload-cube:before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgb(43,160,199);
	animation: cssload-fold-thecube 2.76s infinite linear both;
		-o-animation: cssload-fold-thecube 2.76s infinite linear both;
		-ms-animation: cssload-fold-thecube 2.76s infinite linear both;
		-webkit-animation: cssload-fold-thecube 2.76s infinite linear both;
		-moz-animation: cssload-fold-thecube 2.76s infinite linear both;
	transform-origin: 100% 100%;
		-o-transform-origin: 100% 100%;
		-ms-transform-origin: 100% 100%;
		-webkit-transform-origin: 100% 100%;
		-moz-transform-origin: 100% 100%;
}
.cssload-thecube .cssload-c2 {
	transform: scale(1.1) rotateZ(90deg);
		-o-transform: scale(1.1) rotateZ(90deg);
		-ms-transform: scale(1.1) rotateZ(90deg);
		-webkit-transform: scale(1.1) rotateZ(90deg);
		-moz-transform: scale(1.1) rotateZ(90deg);
}
.cssload-thecube .cssload-c3 {
	transform: scale(1.1) rotateZ(180deg);
		-o-transform: scale(1.1) rotateZ(180deg);
		-ms-transform: scale(1.1) rotateZ(180deg);
		-webkit-transform: scale(1.1) rotateZ(180deg);
		-moz-transform: scale(1.1) rotateZ(180deg);
}
.cssload-thecube .cssload-c4 {
	transform: scale(1.1) rotateZ(270deg);
		-o-transform: scale(1.1) rotateZ(270deg);
		-ms-transform: scale(1.1) rotateZ(270deg);
		-webkit-transform: scale(1.1) rotateZ(270deg);
		-moz-transform: scale(1.1) rotateZ(270deg);
}
.cssload-thecube .cssload-c2:before {
	animation-delay: 0.35s;
		-o-animation-delay: 0.35s;
		-ms-animation-delay: 0.35s;
		-webkit-animation-delay: 0.35s;
		-moz-animation-delay: 0.35s;
}
.cssload-thecube .cssload-c3:before {
	animation-delay: 0.69s;
		-o-animation-delay: 0.69s;
		-ms-animation-delay: 0.69s;
		-webkit-animation-delay: 0.69s;
		-moz-animation-delay: 0.69s;
}
.cssload-thecube .cssload-c4:before {
	animation-delay: 1.04s;
		-o-animation-delay: 1.04s;
		-ms-animation-delay: 1.04s;
		-webkit-animation-delay: 1.04s;
		-moz-animation-delay: 1.04s;
}



@keyframes cssload-fold-thecube {
	0%, 10% {
		transform: perspective(136px) rotateX(-180deg);
		opacity: 0;
	}
	25%,
				75% {
		transform: perspective(136px) rotateX(0deg);
		opacity: 1;
	}
	90%,
				100% {
		transform: perspective(136px) rotateY(180deg);
		opacity: 0;
	}
}

@-o-keyframes cssload-fold-thecube {
	0%, 10% {
		-o-transform: perspective(136px) rotateX(-180deg);
		opacity: 0;
	}
	25%,
				75% {
		-o-transform: perspective(136px) rotateX(0deg);
		opacity: 1;
	}
	90%,
				100% {
		-o-transform: perspective(136px) rotateY(180deg);
		opacity: 0;
	}
}

@-ms-keyframes cssload-fold-thecube {
	0%, 10% {
		-ms-transform: perspective(136px) rotateX(-180deg);
		opacity: 0;
	}
	25%,
				75% {
		-ms-transform: perspective(136px) rotateX(0deg);
		opacity: 1;
	}
	90%,
				100% {
		-ms-transform: perspective(136px) rotateY(180deg);
		opacity: 0;
	}
}

@-webkit-keyframes cssload-fold-thecube {
	0%, 10% {
		-webkit-transform: perspective(136px) rotateX(-180deg);
		opacity: 0;
	}
	25%,
				75% {
		-webkit-transform: perspective(136px) rotateX(0deg);
		opacity: 1;
	}
	90%,
				100% {
		-webkit-transform: perspective(136px) rotateY(180deg);
		opacity: 0;
	}
}

@-moz-keyframes cssload-fold-thecube {
	0%, 10% {
		-moz-transform: perspective(136px) rotateX(-180deg);
		opacity: 0;
	}
	25%,
				75% {
		-moz-transform: perspective(136px) rotateX(0deg);
		opacity: 1;
	}
	90%,
				100% {
		-moz-transform: perspective(136px) rotateY(180deg);
		opacity: 0;
	}
}
</style>

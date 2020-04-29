<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> |  -->
      <router-link to="/bigWheel1">转盘</router-link> | 
      <!-- <router-link to="/bigWheel2">转盘2</router-link> |  -->
      <!-- <router-link to="/redPackRain">红包雨</router-link> |  -->
      <router-link to="/redPackage">抢红包</router-link> | 
      <router-link to="/grid">网格grid</router-link> |
      <!-- <router-link to="/tree">树形tree</router-link> | -->
      <!-- <router-link to="/svg">Svg Demo</router-link> | 
	  <router-link to="/markdown">markdown编辑器</router-link> | 
	  <router-link to="/gitSubmit">git submit</router-link> -->
	   <router-link to="/dialog">弹窗dialog</router-link>  | 
	   <router-link to="/flexcom">拖拽窗口</router-link> | 
	   <router-link to="/select2">select2</router-link>
    </div>
    <router-view/>

    <!-- <hr />
    <div class="container ring">
      <p>圆环旋转</p>
      <ul>
        <li><div></div></li>
        <li><div></div></li>
        <li><div>登录</div></li>
        <li><div></div></li>
      </ul>
    </div> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .12rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


/* * {
	box-sizing: border-box;
}
 
.ring li {
	position: relative;
	float: left;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin: 20px;
	padding: 10px;
	list-style: none;
}
 
.ring li:hover {
	cursor: pointer;
}
 
.ring li:before {
	content: '';
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	left: -6px;
	top: -6px;
	border-radius: 50%;
	border: 6px dashed rgb(204, 204, 204);
}
 
.ring li > div {
	height: 100%;
	background: rgb(158, 234, 106);
	border-radius: 50%;
	box-shadow: 0 0 3px rgba(0,0,0,0.3);
	text-align: center;
	line-height: 80px;
	font-size: 16px;
	color: rgb(255, 255, 255);
}
 
@-webkit-keyframes circle{
	0%{ transform:rotate(0deg); }
	100%{ transform:rotate(-360deg); }
}
 
.ring li:hover:before {
	-webkit-animation: circle 4s infinite linear;
}
 
.ring li:first-child:before {
	-webkit-animation: circle 4s infinite linear;
}
 
.ring li:hover:before {
	border-color: rgba(204, 204, 204, .8);
}
 
.ring li:active:before {
	border-color: orange;
}
 
.ring li:hover > div {
	background: rgba(158, 234, 106, .8);
}
 
.ring li:active > div {
	background: rgba(0, 0, 255, .5);
}
 
.ring li:last-child,
.ring li:last-child > div,
.ring li:last-child:before {
	border-radius: 0;
} */
</style>

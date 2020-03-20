# vue-demo

> test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目初始化
    1. 安装vue-cli
        npm install -g vue-cli
    2. 初始化项目
        vue init webpack vue-demo
    3. 进入项目
        cd vue-demo
    4. 安装依赖
        npm install
    5. 启动项目
        npm run dev
# 项目目录结构
    index.html:项目根视图
    .postcssrc.js:postcss配置文件
    static： 静态文件目录
# 模板语法 
    Vue组件：
        包含三个部分
            template：视图
            script：逻辑
            style：样式
    Mustache：模板
        表现形式：{{ 语法 }}
        {{ hello }}
        {{ 1+1 }}
        {{ "哈哈" }}
        {{ 0<10 ? '对的' : '错的' }}
        {{ '注意：只能存在单行语句' }}
    vue基本指令：
        v-html:渲染html innerHTML
        v-text:渲染text innerText
        v-bind:绑定
        v-bind：简写 ：
    条件渲染:
        v-if
        v-else-if
        v-else
        v-show
        问题：v-show 一直显示，根据display：none隐藏
    列表渲染：
        v-for:每个列表都要添加key 不然报警
    事件监听：
        v-on:简写@
        methods:
            事件参数
            修饰符 prevent
    数组更新检测：
        数组变异方法：引起视图更新
        替换数组：不会引起视图更新
    显示过滤/排序结果：
        filter
    计算属性和观察者
        computed
        计算属性和methods的区别：
            计算属性是基于它们的响应式依赖进行缓存的，methods是每次都会触发计算
    表单输入绑定
        v-model:双向数据绑定
        修饰符：lazy,trim,number
    Class 与 Style 绑定
        v-bind:class="{样式名：条件}"
        v-bind:style="{color:'red',font-size:'14px'}"
# 组件
    一. 单文件组件
        1.Template：只能存在一个根元素
        2.Script：
        3.Style：scope：样式只在当前组件中生效
    二、子父级组件交互（通信）
        父 -> 子：pass props
            数据传递类型限制(验证)
                数据类型验证
                多数据类型验证
                必选项
                默认值
                obj、arr数据类型默认值
        子 -> 父：emit Events
    三、插槽
            单个插槽
            多个插槽 具名插槽
            作用域插槽：数据是子传父
                注意：在2.5.0之前必须使用在<template slot-scope="props">上
    四、动态组件
        keep-alive:缓存组件内容
            注意：什么情况下使用缓存组件

    五、动画
        1.在 CSS 过渡和动画中自动应用 class
            v-enter：进入开始
            v-enter-active：执行过程中
            v-enter-to: 结束动画
            v-leave: 离开开始
            v-leave-active：离开过程
            v-leave-to: 离开结束
        2.可以配合使用第三方 CSS 动画库，如 Animate.css
    六、指令
        1、全局指令
        2、局部指令
    七、Axios 
        中文：https://www.kancloud.cn/yunye/axios/234845
        github:https://github.com/axios/axios
        1.安装
            npm install axios --save
        2.引入加载 main.js
            import Axios from 'axios'
            Vue.prototype.$axios = Axios
        3.请求
            get请求：
                axios.get('/user?ID=12345')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            post请求：
                formdata:?name=iwen&age=20
                x-www-form-urlencoded:{name:'iwen',age:20}
                注意：axios接受的post请求参数的歌声是form-data格式
        4.全局的 axios 默认值
            axios.defaults.baseURL = 'https://api.example.com';
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        5.拦截器
        6.跨域处理
            1.修改config index.js文件
                proxyTable: {
                    "/api":{
                        target:"http://localhost:28200",
                        changeOrigin:true,
                        pathRewrite:{
                        '^/api':''
                        }
                    }
                }
            2.添加host
                Vue.prototype.HOST = '/api'
                注意：此种跨域解决方案，只适用于测试阶段，打包的时候不会具备服务器
                    不能跨域，后端解决
        7.Mock:数据模拟
            1. 自己创建JSON文件，使用get网络请求访问数据
                优点：方便快捷
                缺点：只能存在get请求
            2.项目中集成服务器，模拟各种接口
                优点：模拟真实线上环境
                缺点：增加开发成本
            3.直接使用线上数据
                优点：真实
                缺点：不一定每个项目都存在
            http://mockjs.com/





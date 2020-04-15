# vue_study

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 组件
### 父组件 => 子组件
1. 属性props
    ```
    //parent 
    <Helloworld msg="Hello Vue" />
    // child
    <h1>{{ msg }}</h1>
    props:{msg:String}
    ```

2. 引用refs
    ```
    // parent
    <Helloworld ref="hw" />
    mounted(){ //获取子元素的foo的值
        this.$refs.hw.foo = "ddddd"
    }
    // child 子元素
    data(){
        return {
            foo:'aaa'
        }
    }
    ```

3. 子元素children 不保证顺序，也不是响应式的
   ```
   //parent 这个放在mounted里头，不能放在created里
   <Helloworld ref="hw" />
    mounted(){ //获取子元素的foo的值
        this.$refs.hw.foo = "ddddd"
    }
    // child 子元素
    data(){
        return {
            foo:'aaa'
        }
    }
   ```

### 子组件=>父组件：自定义事件

    //child 子元素派发
    $emit('add',222)
    <h2  @click="$emit('add',222)">派发事件add</h2>
    //parent 父元素接收事件add，$event是参数
    <HelloWorld @add='jsAdd($event)' />
    methods:{
        jsAdd(count){
        	console.log("jsAdd",count);
        }
    }

### 兄弟组件：通过共同祖辈组件搭桥，$parent或$root
    // HelloWorld2.vue
    <h2 @click="$parent.$emit('mua')">{{ bar }}</h2>
    // HelloWorld.vue
    created(){
        this.$parent.$on('mua',()=>{
            console.log('mua');
        })
    }

### 祖先和后代之间

    由于嵌套层数多，传递props不切实际，vue提供了provide/inject API完成该任务
    provide/inject: 能够实现祖先给后代传值
    ```
    // parent app.vue
    provide:{
        aprovid:'aprovid'
    }
    // child  HelloWorld.vue 子元素
    inject:['aprovid'],
    <h3>{{aprovid}}</h3>
    // child-child  child.vue 孙子元素
    inject:['aprovid'],
    <h3>{{aprovid}}</h3>
    ```
    或者
    ```
    provide(){
        return {
            aprovid:this
        }
    },
    data(){
        return {
            tua:'aprovid'
        }
    }
    // child  HelloWorld.vue 子元素
    inject:['aprovid'],
    <h3>{{aprovid.tua}}</h3>
    // child-child  child.vue 孙子元素
    inject:['aprovid'],
    <h3>{{aprovid.tua}}</h3>
    ```
    注意：provide和inject主要为高阶插件/组件提供用例。并不推荐之间用于应用程序代码中，我们更多会在开源组件中见到。
    但是反过来想要后代给祖先传值这种方案就不行了

### 任意两个组件之间：事件总线 或 vuex


## 插槽
### 1.匿名插槽
    // 父元素
    <HelloWorld2>
        <template v-slot:default>匿名插槽<br></template>   
    </HelloWorld2>
    // 子元素
    <slot></slot>

### 2.具名插槽
    将内容分发到子组件指定位置
    // 父元素
    <HelloWorld2>
        <template v-slot:content>具名插槽<br></template>   
    </HelloWorld2>
    // 子元素
    <slot name="content"></slot>

### 3.作用域插槽
    分发内容要用到子组件中的数据
    // 父元素
    <HelloWorld2>
    <!-- <template v-slot:content="slotProps">具名插槽: {{slotProps.bla}}</template> -->
    <template v-slot:content="{bla}">具名插槽: {{bla}}</template>
    </HelloWorld2>
    // 子元素
    <slot name="content" bla="bla~~~~~"></slot>

### 实现KInput
 . 任务1：实现自定义组件双向绑定功能
    v-model是语法趟，实现自定义组件双绑需要指定:value和@input即可
 . 任务2：值发生变化能够通知FormItem组件
 . 任务3：input各种设定，如type,placeholder等
 创建components/form/KInput.vue


#### 完整的路由导航解析流程
1.导航被触发
2.调用全局的 beforeEach 守卫
3.在重用的组件里调用 beforeRouteUpdate 守卫
4.在路由配置里调用 beforeEnter
5.在被激活的组件里调用 beforeRouteEnter
6.调用全局的 beforeResolve 守卫（2.5+）
7.导航被确认
8.调用全局 afterEach 钩子
9.触发 DOM 更新

#### 发布项目
1. 发布 npm run build
2. 下载 nginx
3. 配置 nginx conf/nginx.conf
    server{ 
        listen  80;
        server_name localhost #或者域名;
        root 项目目录\dist;  #注意目录配置 若有必须dist目录下增加 例如下例增加kcart
        location /kcart {
            try_files $uri /kcart/index.html
        }
        #nginx反向代理，实现接口转发 请求的地址
        location ^~ /api/{
            proxy_pass http://localhost:3000;  #注意路径后面不加/
        }

    }
4. 启动 start nginx


#### vue实现原理 （见图Vue实现原理.jpg）
new Vue() ---init---> $mount(挂载)------>compile(编译)---经过parse、optimize、generate------>render function
(1)---render--->Virtual DOM Tree(虚拟DOM树)------>patch()经过 patchVnode 和 updateChildren------>生成DOM
(2)---touch--->getter/setter---collect as dependency/notify--->Watcher---update--->patch()经过 patchVnode 和 updateChildren------>生成DOM
注：编译模块分三个阶段
1.parse: 使用正则解析template中的vue的指令(v-xxx)变量等等形成抽象语法树AST
2.optimize：标记一些静态节点，用作后面的性能优化，在diff的时候直接略过
3.generate：把第一步生成的AST转化为渲染函数render function


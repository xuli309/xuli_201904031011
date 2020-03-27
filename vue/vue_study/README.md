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
```
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
```

### 兄弟组件：通过共同祖辈组件搭桥，$parent或$root
```
// HelloWorld2.vue
<h2 @click="$parent.$emit('mua')">{{ bar }}</h2>
// HelloWorld.vue
created(){
    this.$parent.$on('mua',()=>{
        console.log('mua');
    })
}
```

### 祖先和后代之间
```
由于嵌套层数多，传递props不切实际，vue提供了provide/inject API完成该任务
provide/inject: 能够实现祖先给后代传值
// parent app.vue
provide:{
    aprovid:'aprovid'
}或者
provide(){
    return {
        aprovid:this.tua
    }
},
data(){
    return {
        tua:'aprovid'
    }
}
// child  HelloWorld.vue 子元素
inject:['aprovid'],
<h3>{{aprovid}}</h3>
// child-child  child.vue 孙子元素
inject:['aprovid'],
<h3>{{aprovid}}</h3>
注意：provide和inject主要为高阶插件/组件提供用例。并不推荐之间用于应用程序代码中，我们更多会在开源组件中见到。
但是反过来想要后代给祖先传值这种方案就不行了
```

### 任意两个组件之间：事件总线 或 vuex


## 插槽
### 1.匿名插槽
```
// 父元素
<HelloWorld2>
    <template v-slot:default>匿名插槽<br></template>   
</HelloWorld2>
// 子元素
<slot></slot>
```

### 2.具名插槽
```
将内容分发到子组件指定位置
// 父元素
<HelloWorld2>
    <template v-slot:content>具名插槽<br></template>   
</HelloWorld2>
// 子元素
<slot name="content"></slot>
```

### 3.作用域插槽
```
分发内容要用到子组件中的数据
// 父元素
<HelloWorld2>
  <!-- <template v-slot:content="slotProps">具名插槽: {{slotProps.bla}}</template> -->
 <template v-slot:content="{bla}">具名插槽: {{bla}}</template>
</HelloWorld2>
// 子元素
<slot name="content" bla="bla~~~~~"></slot>
```

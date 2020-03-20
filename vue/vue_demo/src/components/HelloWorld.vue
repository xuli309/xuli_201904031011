<template>
  <div class="hello">
      {{ hello }}
      {{ 1+1 }}
      {{ "哈哈" }}
      <!-- {{ 0 < 10 ? '对的' : '错的' }} -->
      {{ message.split('').reverse().join('') }}
      {{ '注意：只能存在单行语句' }}

      <p v-text="msg"></p>
      <p v-html="msg"></p>

      <span v-bind:class="ha">哈哈</span>
      <span v-bind:title="ts">我是提示</span>

      <div v-if="show">我是if为true看到的</div>
      <div v-else>我是else看到的</div>

      <div v-show="show">show的效果</div>

      <ul>
        <li v-for="(name,index) in names" v-bind:key="index">{{name}} - {{index}}</li>
      </ul>

      <ul>
        <li v-for="user in users" :key="user.id">
          <span>{{user.name}} - {{user.age}}</span>
        </li>
      </ul>

      <div v-for="(value, key, index) in object" :key="index">
        <p>{{index}}：{{key}}：{{value}}</p>
      </div>

      <button v-on:click="num+=1">按 钮</button>
      <p>{{num}}</p>

      <button v-on:click="handleClick">按钮1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num:1,
      hello: 'Hello Vue',
      msg:'<p>Hello Vue demo</p>',
      ha:'ha1',
      ts:'提示',
      message:'hello vue',
      show:false,
      names:['张三','李四','王五'],
      users:[
        {name:'张三',age:18,id:1},
        {name:'李四',age:20,id:2}
      ],
      object: {
        title: '标题',
        author: '作者Jane Doe',
        publishedAt: '时间2016-04-10'
      }
    }
  },
  methods:{
    handleClick(){
      //console.log('我是一个 函数');
      console.log(this);      
      this.show = !this.show;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ha1{
    color: red;
  }
</style>

var Test = {
     template:`
          <div>我是test组件 {{a}} <button @click="a=a+1">改变</button></div>
     `,
     data: function(){
          return {
               a: 'hello word'
          }
     },
     activated: function(){
          console.log('actived','组件被激活了');  
     },
     deactivated:function(){
          console.log('deactived','组件被停用了');  
     },
     // 对应父组件v-if false 就销毁当前组件
     beforeDestroy: function() { //销毁之前
          console.log('beforeDestroy a is ' + this.a);  
     },
     destroyed: function() {//销毁之后
          console.log('destroyed a is ' + this.a);  
     },
     //销毁，最终都是做一些其他功能的释放，比如：保存到localstorge
     beforeCreate:function() {
          //组件创建之前
          console.log('beforeCreate  a is: ' + this.a);
     },
     created: function() {
          //组件创建之后
          console.log('created a is ' + this.a);
     },

     // created 和 actived 都是 v-if='true' 子组件的状态
     // created 没有被 keep-alive 内置组件包裹，actived 被包裹
     // 销毁和停用同上

   // 使用该组件，就会触发以上事件函数（钩子函数）
   // created 可以操作数据.. 并且可以实现vue->页面的影响，发起ajax请求获取数据

//    beforeMount: function() {
//        // vue起作用，装载数据到DOM之前
//        console.log(document.body.innerHTML);
//    },
//    mounted: function() {
//         // vue起作用，装载数据到DOM之后
//         console.log(document.body.innerHTML);              
//    },
//    // 下面的函数基于数据改变，影响页面
//    beforeUpdate: function() {//改变前
//      console.log(document.body.innerHTML);     
//    },
//    updated: function() {//改变后
//      console.log(document.body.innerHTML);    
//    },
   //以上两个是当更改数据才会触发
   //应用：beforeUpdate 可以获取原DOM
   //updated 可以获取新DOM

   // beforeMount  获取Vue启动前的dom
   // mounted  获取Vue启动后的dom  只执行一次
}

var App = {
    components:{
        test: Test
    },
    data: function(){
         return {
               isExist: true
         } 
    },
    template: `<div>
     <keep-alive>
          <test v-if="isExist"></test>
     </keep-alive>
     <button @click="isExist=!isExist" >事关子组件生死</button>
    </div>`
}

new Vue({
    el: '#app',
    components: {
        app: App
    },
    template:`<app />`
})

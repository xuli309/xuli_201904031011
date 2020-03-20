<template>
    <div class="event">
        <hr>
        <ul>
            <li v-on:click.once="getItemInfo($event,name,index)" v-for="(name,index) in names" :key="index" >{{name}}</li>
        </ul>

        <input type="text" v-on:keyup="getKeyInfo($event)"  />

        <hr>
        <ul>
            <li v-for="(name,index) in names" :key="index" >{{name}}</li>
        </ul>
        <button v-on:click="pushArr">增加数组内容</button><br/>

        <hr>
        <button v-on:click.once="getOdd">我要奇数</button>
        <p><span v-for="(num,index) in numbers" :key="index">{{num}}</span></p>
        <p><span v-for="(num,index) in newNumbers" :key="index">{{num}}</span></p>

        <hr>
        <p>{{ msg }}</p>
        <p>{{ reversedMsg }}</p>
        
        <hr>

    </div>
</template>

<script>
import Vue from 'vue'
export default {
    data(){
        return{
            names:['zhangsan','lisi','wangwu'],
            numbers:[1,2,3,4,5,6,7,8,9],
            newNumbers:[],
            msg:'hello'
        }
    },
    methods:{
        pushArr(){
            // this.names.push("zhaoliu");
            this.names.concat("我也")
            console.log(this.names)
        },
        getItemInfo(ev,data,index){
            console.log(ev);
            
            console.log(data);
            console.log(this.names[index]);
        },
        getKeyInfo(ev){
            console.log(ev);
        },
        getOdd(){
           this.numbers = this.numbers.filter(number => number%2!==0);                     
        }
    },
    computed:{
        reversedMsg(){
            return this.msg.split('').reverse().join('');
        }
    }
}
</script>

<style>

</style>
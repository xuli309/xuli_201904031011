<template>
    <div>
        父亲
        <input type="text" v-model="lifeMsg" />
        <SonComponent :title="msg" :lifeMsg="lifeMsg" :number="getNum" :objdata="myobj"  @sendMsg="getMsg" />
        <button @click="changeMsg">按钮</button>
        <hr/>
        <input type="number" v-model="num" />
        {{ info }}
    </div>
</template>
<script>
import SonComponent from './SonComponent'

export default {
    name:'parentComponent',
    data(){
        return{
            msg:'ddddd',
            lifeMsg:'活的值',
            num:10,
            myobj:{
                name:'zhangsan',
                age:20
            },
            info:0,
        }
    },
    computed:{
        getNum(){
            return this.num - 0;
        }
    },
    components:{
        SonComponent,
    },
    methods:{
        changeMsg(){
            this.msg = 'aaa';
        },
        getMsg(data){
            console.log("得到值==",data);
            this.info = data;
        }
    }
}
</script>
<style>

</style>
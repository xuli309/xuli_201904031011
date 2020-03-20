<template>
    <div>
        儿子--{{title}}--{{lifeMsg}}--{{number}}<br />
        {{objdata}}

        <button @click="sendMsg">传递</button>
    </div>
</template>
<script>


export default {
    name:'SonComponent',
    data(){
        return{
            msg:'我是子组件数据'
        }
    },
    methods:{
        sendMsg(event){
            // console.log(event);
            // 第一个参数是key 第二个参数是value
            this.$emit("sendMsg",this.addNumber);
        }
    },
    computed:{
        addNumber(){
            return this.number * 5
        }
    },
    props:{
        title:String,
        lifeMsg:{
            type:String,
            required:true
        },
        number:{
            type:Number,
            default:5
        },
        objdata:{
            type:Object,
            default:function(){
                return {name:'未知',age:10}
            }
        }
    }
}
</script>
<style>

</style>
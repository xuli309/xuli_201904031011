<template>
    <div>
        <input type="text" v-focus />

        <p v-mycss>hello vue!</p>

        {{ price | moneyCharge }} <br />

        {{info | contextData}}
    </div>
</template>

<script>
export default {
    name:'hello',
    data(){
        return {
            price:20,
            info:'我是一个文本信息'
        }
    },
    directives:{
        focus:{
            inserted:function(el){
                el.focus();
            }
        },
        mycss:{
            inserted:function(el){
                el.style.color = "red";
            }
        }
    },
    filters:{
        moneyCharge(value){            
            if(typeof value === "number"){
                return '￥'+ value;
            }
            return value;
        },
        contextData(value){
            return value + " --- 来自黑人";
        }
    }
}
</script>
<style>

</style>
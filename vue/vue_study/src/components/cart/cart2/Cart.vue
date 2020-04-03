<template>
    <div>
        <table border="1">
            <tr>
                <th></th>
                <th>课程名称</th>
                <th>单价</th>
                <th>数量</th>
                <th>总价</th>
            </tr>
            <!-- <tr v-for="(c,index) in cart" :key="index" :style="{color:c.active?'red':'black'}"> -->
            <tr v-for="(c,index) in cart" :key="index" :class="{active:c.active}">
                <td><input type="checkbox" v-model="c.active"  /></td>
                <td>{{c.name}}</td>
                <td>{{c.price}}</td>
                <td>
                    <input type="button" value="-" @click="mul(index)" />
                    {{c.count}}
                    <input type="button" value="+" @click="add(index)" />
                </td>
                <td>￥{{c.price * c.count}}</td>
            </tr>
            <tr>
                <td colspan="3">{{ activeCount }} / {{count}}</td>
                <td colspan="2">￥{{ total }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'cart',
        props:{
            name:{
                type:String,
                default:''
            }
         },
        data(){
            return {
                cart:[]
            }
        },
        created(){
            this.cart = JSON.parse(window.localStorage.getItem('cart')) || [];
            this.$bus.$on('addCart',good=>{  
                const ret  = this.cart.find(v=>v.name===good.name)
                if(ret){
                    ret.count += 1
                }else{
                    this.cart.push({
                        ...good,
                        count:1,
                        active:true
                    })
                }
                // this.setLocal();
            })
        },
        computed:{
            count(){
                return this.cart.length;
            },
            activeCount(){
               return this.cart.filter(v=>v.active).length;
            },
            total(){
                return this.cart.reduce((sum,v)=>{
                    if(v.active){
                        return sum += v.count * v.price;
                    }
                    return sum;
                },0)
                // let sum = 0;
                // this.cart.forEach(v => {
                //     if(v.active){
                //         sum += v.count*v.price;
                //     }
                // });
                // return sum;
            }
        },
        watch: {// 监听器，对性能有影响，综合评估再用
            cart:{
               handler(){
                   this.setLocal();
               },
               deep:true // 深度监听
            }
        },
        methods:{
            setLocal(){
                window.localStorage.setItem('cart',JSON.stringify(this.cart))
            },
            add(i){
                this.cart[i].count+=1;
            },
            mul(i){
                let count = this.cart[i].count;
                if(count > 1){
                    this.cart[i].count -= 1;
                }else{
                    this.remove(i);                   
                }
            },
            remove(i){
                if(window.confirm(`确认要删除${this.cart[i].name}吗？`)){
                   this.cart.splice(i,1);
                }
                   
            }
        }
    }
</script>

<style scoped>
    tr.active{
        color:red;
        font-weight: bold;
    }
</style>
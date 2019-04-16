<template>
    <div>{{name}}购物车

        <table>
            <tr>
                <th></th>
                <th>课程名</th>
                <th>单价</th>
                <th>数量</th>
                <th>价格</th>
            </tr>
            <tr v-for="(c, i) in cart" :key="c.text" :class="{active:c.active}">
                <td>
                    <input type="checkbox" v-model="c.active">
                </td>
                <td>{{c.text}}</td>
                <td>￥{{c.price}}</td>
                <td>
                    <button @click="minus(i)">-</button>
                    <span> {{c.count}} </span>
                    <button @click="add(i)">+</button>
                </td>
                <td>{{c.price * c.count}}</td>
            </tr>
            <tr>
                <td colspan="3">{{activeCount}} / {{count}}</td>
                <td colspan="2">{{total}}</td>
            </tr>
        </table>

    </div>
    
</template>

<script>
export default {
    // props:['name','cart'],
    props:{
        name:{
            type:String,
            required: true
        },
        // cart:{
        //     type: Array
        // }
    },
    data(){
        return {
            cart: []
        }
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    mounted(){
        console.log('mounted');
    },
    created(){
        console.log('created');
        const cart  = window.localStorage.getItem('cart');
        if(cart){
          this.cart = JSON.parse(cart);
        }

        this.$bus.$on('addCart', good=>{
            const ret = this.cart.find(v=>v.text === good.text);
            if(ret){
                ret.count += 1;
            }else{
                this.cart.push({
                    ...good, //继承属性
                    // text: good.text,
                    // price: good.price,
                    active: true,
                    count: 1
                })
            }
      })
    },
    watch:{
        cart:{
            handler(){
                this.setLocal()
            },
            deep:true//对性能有影响，不加就监听到第一层
        }
    },
    computed:{
        count(){
            return this.cart.length;
        },
        activeCount(){
            return this.cart.filter(v => v.active).length;
        },
        total(){
            return this.cart.reduce((sum, v) => {
                if(v.active){
                    return sum + v.price * v.count
                }
                return sum;
            },0)

            // let num = 0;
            // this.cart.forEach(v => {
            //     if(v.active){
            //         num += v.price * v.count;
            //     }
            // });
            // return num;
        }
    },
    methods:{
         setLocal(){
            window.localStorage.setItem('cart',JSON.stringify(this.cart) || []);
        },
        add(i){
            this.cart[i].count+=1;
        },
        minus(i){
            const count = this.cart[i].count;
            if(count > 1){
                this.cart[i].count -= 1;
            }else{
                this.remove(i);
            }
        },
        remove(i){
            if(window.confirm(`是不是要删除课程${this.cart[i].text}?`)){
                this.cart.splice(i,1);
            }
        }
    },
    
}
</script>

<style>
     td,th{
        border:1px solid #000
    }
    tr.active{
        color:red;
        font-weight: bold;
    }
</style>

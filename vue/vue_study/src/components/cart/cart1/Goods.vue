<template>
    <div>
        <ul>
            <li v-for="(good,index) in goods" :key="index">
                {{ good.name }} ￥{{good.price}}
                <input type="button" value="加入购物车" @click="addCart(index)" />
            </li>
        </ul>
        <hr />
        <Cart :name="name" :cart="cart"></Cart>
    </div>
</template>

<script>
    import Cart from  './Cart'

    export default {
        name:'goods',
        data(){
            return {
                name:'购物车',
                cart:[],
                goods:[
                    {name:"架构师",price:100},
                    {name:"Java",price:70},
                    {name:"Web全栈",price:90},
                    {name:"Python",price:80}                    
                ]
            }
        },
        components:{
            Cart
        },
        methods: {
            addCart(i) {
                const good = this.goods[i];
                const ret = this.cart.find(v=>v.name === good.name);
               
                if(ret){
                    ret.count += 1;
                }else{
                    this.cart.push({
                        ...good,
                        active:true,
                        count:1
                    })
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
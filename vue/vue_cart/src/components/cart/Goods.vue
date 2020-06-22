<template>
    <div>
        <p>{{title}}</p>
        <input type="text" v-model="good" />
        <button @click="addGoods">添加商品</button>

        <ul>
            <li v-for="g in goods" :key="g.id">
                {{g.name}} - ￥{{g.price}}
                <button @click="addCart(g)">添加购物车</button>
            </li>
        </ul>

        <Cart ref="cart"></Cart>
    </div>
</template>

<script>
    import Cart from './Cart';
    export default {
        name:'goods',
        components: {
            Cart,
        },
        data() {
            return {
                title: '模拟购物车',
                good:"dddd",
                goods:[
                    {id:1,name:'Web全栈工程师',price:8999},
                    {id:2,name:'Python全栈工程师',price:6999},
                ]
            }
        },
        methods: {
            addGoods() {
                const good = {
                    id:this.goods.length+1,
                    name:this.good,
                    price:7999
                };
                this.goods.push(good);
            },
            addCart(g){                
                this.$refs.cart.addCart(g);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
         <ul>
            <li v-for="g in goods" :key="g.id">
                <router-link :to="`/detail/${g.id}`">
                    {{g.name}} - ￥{{g.price}}               
                    <button @click.prevent.stop="onAddCart(g)">添加购物车</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        data() {
            return {               
                goods:[
                    {id:1,name:'Web全栈工程师',price:8999},
                    {id:2,name:'Python全栈工程师',price:6999},
                ]
            }
        },
        methods: {
            ...mapMutations('cart',['addCart']),
            onAddCart(good) {
                this.addCart(good);
                this.$router.push('/cart');
            }
        },
    }
</script>

<style scoped>

</style>
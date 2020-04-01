<template>
    <div>
        <ul>
            <li v-for="(good,index) in goods" :key="index">
                {{ good.name }} ￥{{good.price}}
                <input type="button" value="加入购物车" @click="addCart(index)" />
            </li>
        </ul>
        <hr />
        <Cart :name="name"></Cart>
    </div>
</template>

<script>
    import Cart from  './Cart'
    import axios from 'axios'

    export default {
        name:'goods',
        data(){
            return {
                name:'购物车',
                cart:[],
                goods:[]
            }
        },
        async created(){
            try {
                const res = await axios.get('/api/goods');
                this.goods = res.data.list;
            } catch (error) {
                console.log(error);                
            }
                                   
            // // 组件创建后执行
            // axios.get('/api/goods').then((res) => {
            //     this.goods = res.data.list;
            // }).catch((err) => {
            //     console.log(err);                
            // });
        },
        components:{
            Cart
        },
        methods: {
            addCart(i){
                const good = this.goods[i];
                // 触发一个事件
                this.$bus.$emit('addCart', good);
            }
            // addCart(i) {
            //     const good = this.goods[i];
            //     const ret = this.cart.find(v=>v.name === good.name);
               
            //     if(ret){
            //         ret.count += 1;
            //     }else{
            //         this.cart.push({
            //             ...good,
            //             active:true,
            //             count:1
            //         })
            //     }
            // }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <div class="good" v-for="(item,index) in cart" :key="index">
           {{item.title}}
           <div class="right">
               <i class="cubeic-remove" @click="removeCart(index)"></i>
               <span>{{ item.cartCount }}</span>
               <i class="cubeic-add" @click="addCart(index)"></i>
           </div>
        </div>
        <hr />
        <div>
            总价：{{total}}
        </div>
        <cube-button :disable="true" v-if="total<minTotal">
            还差 {{ minTotal-total }} 可以购买
        </cube-button>
        <cube-button v-else>
            下单
            <span v-if="!token">（需要登录）</span>
        </cube-button>
    </div>
</template>

<script>
    
import {mapState, mapGetters} from 'vuex'
export default {
    data(){
        return {
            minTotal:1000
        }
    },
    methods: {
        removeCart(index) {
           this.$store.commit("cartRemove",index);
        },
        addCart(index){
            this.$store.commit('cartAdd',index)
        }
    },
    computed: {
        ...mapState({
            cart: state=>state.cart,
            token: state=>state.token
        }),
        ...mapGetters({
            total:'total'
        })
    },
}
</script>

<style scoped>
.good{
 padding:10px;
 text-align:left;
}
.good .right{
    float:right;
}

.good .right i{
    font-size:18px;
}
</style>
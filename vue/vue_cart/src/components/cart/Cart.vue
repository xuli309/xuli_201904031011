<template>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th></th>
                    <th>课程名称</th>
                    <th>课程单价</th>
                    <th>课程数量</th>
                    <th>课程总价</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(c, index) in cart" :key="index" :class="{active:c.active}">
                    <td>
                        <input type="checkbox" v-model="c.active" />
                    </td>
                    <td>{{c.name}}</td>
                    <td>{{c.price}}</td>
                    <td>
                        <input type="button" @click="mul(index)" value="-" />
                        {{c.count}}
                        <input type="button" @click="add(index)" value="+" />
                    </td>
                    <td>{{c.price * c.count}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4" align="right">合计：{{activeCount}}/{{totalCount}}</td>
                    <td>{{total}}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        name:'cart',
        data() {
            return {
                cart:JSON.parse(localStorage.getItem('cart')) || []
            }
        },
        methods: {
            addCart(good) {                
                const ret = this.cart.find(v=>v.id===good.id);                     
                if(ret){
                    ret.count += 1;                   
                }else{
                    this.cart.push({...good,count:1,active:true});
                }          
            },
            mul(index){
                if(this.cart[index].count>1){
                    this.cart[index].count -= 1;
                }else{
                    this.remove(index);
                }
               
            },
            add(index){
                this.cart[index].count+=1;
            },
            remove(index){
                if(window.confirm(`确认要删除${this.cart[index].name}吗？`)){
                    this.cart.splice(index,1)
                }
            }
        },
        computed: {
            total() {
                return this.cart.reduce((sum,c)=>{
                    if(c.active){
                        sum += c.count*c.price;
                    }
                    return sum;
                },0) 
            },
            activeCount(){
                return this.cart.filter(v=>v.active).length;
            },
            totalCount(){
               return this.cart.length;               
            }

        },
        watch: {
            cart: {
                deep: true,
                handler(newValue) {
                    localStorage.setItem('cart',JSON.stringify(newValue));
                }
            }
        },
    }
</script>

<style scoped>
.active{
    color:red;
}
</style>
<template>
    <div>
        <button @click="onLogin" :disabled="loading">{{loading ?'登录中':'登录'}}</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name:'login',
        data() {
           return {
               loading:false
           }
       }, 
       methods: {
           ...mapActions(['requestLogin']),
           onLogin() {
                // window.isLogin = true;//登录成功
                // console.log(this.$route.query);
                
                // this.$store.commit('login');
                this.loading = true;

                // this.$store.dispatch('requestLogin') 改写如下
               this.requestLogin({username:'tom'}).then((result) => {
                    this.loading = false;
                    console.log('redi',this.$route.query.redirect);
                    
                     // 获取参数
                    const redirect = this.$route.query.redirect || '/';                    
                    this.$router.push(redirect) 
                });

               
           }
       },
    }
</script>

<style scoped>

</style>
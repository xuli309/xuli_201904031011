<template>
    <div>
        <cube-form 
            :model="model"  
            :schema="schema" 
            @submit='handlerLogin'
            @validate='handlerValidate'
        ></cube-form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'login',
        data(){
            return{
                model:{
                    username:'',
                    passwrd:''
                },
                schema:{
                    fields:[
                         {
                            type: 'input',
                            modelKey: 'username',
                            label: '用户名',
                            props: {
                                placeholder: '请输入用户名'
                            },
                            rules: {
                                required: true
                            },
                            trigger:"blur"
                        },
                        {
                            type:'input',
                            modelKey:'passwrd',
                            label:'密码',
                            props:{
                                type:'password',
                                placeholder: '请输入密码',
                                eye:{
                                    open:true
                                }
                            },
                            rules:{
                                required:true,
                            },
                            trigger:'blur'
                        },
                        {
                            type:'submit',
                            label:'登录'
                        }
                    ]
                }
            }
        },
        methods: {
            handlerValidate(ret){
                // 校验结果
            //    console.log(ret);
               
            },
            async handlerLogin(e) {
                e.preventDefault();
                // console.log(this.model);
                const obj = {
                    username:this.model.username,
                    password:this.model.passwrd
                }
                const ret  = await axios.get('/api/login',{params:obj});
                if(ret.status == 200){
                    if(ret.data.code == 0){
                        // alert('登录成功');
                        // 存token
                        const token = ret.data.token;
                        localStorage.setItem("token",token);
                        this.$store.commit('settoken',token);     
                    }else{                      
                        const toast = this.$createToast({
                            txt: ret.data.message || '未知错误',
                            type:'error',
                            time: 1000,
                            // onTimeout: () => {
                            //     console.log('Timeout')
                            // }
                        });
                        toast.show();
                    }
                }
               
              
            }           
        },
    }
</script>

<style scoped>

</style>
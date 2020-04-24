<template>
    <div>
        <div class="alert" v-if="showError">
            {{ errorMsg }}
        </div>
        <cube-form 
            v-if="!$store.state.token"
            :model="model"  
            :schema="schema" 
            @submit='handlerLogin'
            @validate='handlerValidate'
        ></cube-form>
        <div v-else>
            <p>已登录</p>
            <i class="cubeic-person"></i>
            <cube-button @click="logout">注销</cube-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'login',
        data(){
            return{
                showError:false,
                errorMsg:'',
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
                                required: true,
                                type:'string',
                                min:3,
                                max:15,
                                usercheck:(val)=>{
                                    // console.log(val);
                                    
                                    return (reslove)=>{
                                        this.$axios.get('/api/checkName?username='+val)
                                        .then(res=>{
                                            reslove(res.code==0)
                                        })
                                    }
                                }

                            },
                            trigger:"blur",
                            messages:{
                                required:'请输入用户名',
                                min:'用户名不能少于3个字符',
                                max:'用户名不能大于15个字符',
                                usercheck:'用户名不存在'
                            }
                        },
                        {
                            type:'input',
                            modelKey:'passwrd',
                            label:'密码',
                            props:{
                                type:'password',
                                placeholder: '请输入密码',
                                eye:{
                                    open:false //默认密码隐藏
                                }
                            },
                            rules:{
                                required:true,
                            },
                            trigger:'change'
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
                e.preventDefault();//阻止表单自动提交
                // console.log(this.model);
                const obj = {
                    username:this.model.username,
                    password:this.model.passwrd
                }
                const ret  = await this.$axios.get('/api/login',{params:obj});
                // console.log(ret);
                if(ret.code == 0){
                    // alert('登录成功');
                    // 存token
                    const token = ret.token;
                    localStorage.setItem("token",token);
                    this.$store.commit('settoken',token);
                    this.showError = false; 
                }else{                 
                    // this.showError = true;
                    // this.errorMsg = ret.message || '未知错误';  

                    this.$notice.info({
                        duration:3,
                        content: ret.message || '未知错误'
                    })
                    
                    // 外部框架的
                    // const toast = this.$createToast({
                    //     txt: ret.message || '未知错误',
                    //     type:'error',
                    //     time: 1000,
                    //     // onTimeout: () => {
                    //     //     console.log('Timeout')
                    //     // }
                    // });
                    // toast.show();
                }
            },
            logout(){
                localStorage.removeItem('token');
                this.$store.commit('settoken','');
            }        
        },
    }
</script>

<style scoped>
.logo{
    text-align:center;
    margin-top:30px;
    margin-bottom:30px;
}

i.cubeic-person{
    font-size:80px;
}
.alert{
    color:red;
}
</style>
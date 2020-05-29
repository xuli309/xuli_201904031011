<template>
    <div class="login">
        <h3>系统登录</h3>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="right" label-width="80px" class="login-container">
            <el-form-item prop="username" label="用户名">
                <el-input v-model="loginForm.username"  auto-complete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密 码">
                <el-input :type="pwdType" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleLogin" :loading="loading">登录</el-button>
                <el-button @click="goBack">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {isvalidUsername} from '@/utils/validate';
    import {setCookie} from '@/utils/support'
    export default {
        data() {
            const validateUsername =(rule,value,callback)=>{
                if(!isvalidUsername(value)){
                    callback(new Error('请输入正确的用户名'))
                }else{
                    callback()
                }
            };

            const validatePass = (rule,value,callback) => {
                if(value.length<3){
                    callback(new Error('密码不能小于3位'))
                }else{
                    callback();
                }
            }
            return {
                loading:false,
                pwdType:'password',
                loginForm:{
                    username:'admin',
                    password:'111111'
                },
                loginRules:{
                    username:[
                        {required:true,trigger:'blur', validator:validateUsername},
                        // {min:3,max:8,message:'请输入3-8个字符',trigger:'blur'}
                    ],
                    password:[
                        {required:true,trigger:'blur',validator:validatePass}
                    ]
                }
            }
        },
        methods: {
            showPwd() {
                if (this.pwdType === 'password') {
                    this.pwdType = ''
                } else {
                    this.pwdType = 'password'
                }
            },
            handleLogin() {
                this.$refs.loginForm.validate( valid =>{
                    if(valid){                        
                        this.loading = true;
                        this.$store.dispatch('login',this.loginForm).then(() => {                            
                            this.loading = false;
                            setCookie('username',this.loginForm.username,15);
                            this.$router.push({path:'/'})
                        }).catch((err) => {
                            this.loading = false;
                        });
                    }else{
                        console.log('参数验证不合法！');
                        return false;
                    }
                    
                })
            },
            goBack(){
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
.login{
    width:400px;
    margin:0 auto;
}

h3{
    text-align:center;
}

.login-container{
    padding:40px;
    background:#f1f1f1;
    border-radius:5px;
}
</style>
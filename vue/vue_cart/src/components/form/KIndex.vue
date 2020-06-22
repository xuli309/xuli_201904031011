<template>
    <div>
        <k-form :model="model" :rules="rules" ref="kForm">
            <k-form-item label="用户名："  prop="username">
                <k-input v-model="model.username"></k-input>
            </k-form-item>
            <k-form-item label="密  码："  prop="password">
                <k-input type="password" v-model="model.password"></k-input>
            </k-form-item>
            <k-form-item>
                <button @click.prevent.stop="onLogin" >登录</button>
            </k-form-item>
        </k-form>
    </div>
</template>

<script>
    import KInput from './KInput'
    import KFormItem from './KFormItem';
    import KForm from './KForm';
    export default {
        name:'KIndex',
        components: {
            KInput,
            KFormItem,
            KForm
        },
        data() {
            return {
                model:{
                    username:'tom',
                    password:''
                },
                rules:{
                    username:[{required:true,message:'请输入用户名'}],
                    password:[{required:true,message:'请输入密码'}]
                }
            }
        },
        methods: {
            onLogin() {
                this.$refs.kForm.validate((isValid)=>{
                    console.log('isValid',isValid);
                    
                    if(isValid){
                        alert('登录成功！！！');
                    }else{
                        alert('登录失败！！！');
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
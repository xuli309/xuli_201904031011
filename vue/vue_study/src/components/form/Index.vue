<template>
  <div>
    <KFrom :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username"></KInput>
      </KFormItem>

      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" type="password"></KInput>
      </KFormItem>
       <KFormItem>
           <button @click='onLogin'>登录</button>
      </KFormItem>
    </KFrom>
    {{model}}
  </div>
</template>
<script>
import KInput from "./KInput";
import KFormItem from "./KFormItem";
import KFrom from "./KForm";

export default {
  name: "formIndex",
  components: {
    KInput,
    KFormItem,
    KFrom
  },
  data() {
    return {
      model: {
        username: "tom",
        password: ""
      },
      rules:{
          username:[{require:true,message:"用户名必填"}],
          password:[{require:true,message:"密码必填"}]
      }
    };
  },
  methods: {
      onLogin() {
          this.$refes.loginForm.validate((isvalidate)=>{
              if(isvalidate){
                  console.log('登录成功！！！');
                  
              }else{
                  console.log('登录失败！！！');
                  
              }
          })
      }
  },
};
</script>
<style scoped>
</style>
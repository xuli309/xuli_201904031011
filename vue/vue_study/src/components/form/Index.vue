<template>
  <div>
    <KFrom :model="model" :rules="rules">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username"></KInput>
      </KFormItem>

      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" type="password"></KInput>
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
  }
};
</script>
<style scoped>
</style>
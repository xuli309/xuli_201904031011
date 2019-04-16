<template>
    <div>
        <button @click="sendAjax">发起请求</button><br>

        响应1：{{res1}} <br>
        响应2：{{res2}} <br>
        <button @click="sendAjaxHB">合并请求</button>
    </div>
</template>

<script>

export default {
    name:'app',
    data(){
      return {
        res1:'',
        res2:''
      }
    },
    methods:{
       sendAjax(){
          this.$axios.get('http://127.0.0.1:8080/api/goods')
          .then((result) => {
              console.log(result)
          }).catch((err) => {
              console.log(err)
          });
      },
      sendAjaxHB(){
          const res1 = this.$axios.get('http://127.0.0.1:8080/api/goods');
          const res2 = this.$axios.post('http://127.0.0.1:8080/add', 'a=1');

          this.$axios.all([res1, res2])
          .then(this.$axios.spread((req1,req2)=> {
              this.res1 = req1.data.list;
              this.res2 = req2.data.list;

          })).catch((err) => {
              console.log(err)
          });

      }
    }
}
</script>

<style>

</style>

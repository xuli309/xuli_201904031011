<template>
  <div class="hello">
    <hr />
    <h1>{{ msg }}</h1>
    <h2 @click="$parent.$emit('mua')">{{ bar }}</h2>

    <!-- 匿名插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <!-- <slot name="content"></slot> -->
    <!-- 作用域插槽 -->
    <slot name="content" bla="bla~~~~~" bar="bar~~~"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  props: {
    msg: String
  },
  data(){
    return {
      bar:'bar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

# 父组件 => 子组件
1. 属性props
    // child
    props:{msg:String}
    //parent
    <Helloworld msg="Hello Vue" />
2. 引用refs
    // parent
    <Helloworld ref="hw" />
    // child
    this.$refs.hw.msg='ddddd'
3. 子元素children
    //parent 这个放在mouted里头，不能放在created里
    this.$children[0].msg='aaaa'

# 子组件=>父组件：自定义事件
//child
this.$emit('add', good)
//parent
<Helloworld @add="add(count)" />
<!-- demo测试专用的页面 -->
<template>
  <div id="demo">
    <div class="box">
      <wheel
            ref="luckyWheel"
            :prizeList = 'listData'
            :colors = 'colors'
            fontColor = 'red'
            goClassName = 'btn'
            :strMaxLength = '14'
            :strLineLength = '6'
            strKey='name'
            @go-click = "go"
            @on-over = "onOver"
      >
      </wheel>
    </div>
  </div>
</template>

<script>
import wheel from "./wheel"
export default {
  data() {
    return {
      listData: [
        {name: "iphone 6s", val: 1},
        {name: "马来西亚一周游", val: 2},
        {name: "谢谢参与", val: 0},
        {name: "满10减5购物券", val: 3},
        {name: "谢谢参与", val: 0},
        {name: "全球限量定制版GTX2080Ti显卡", val: 8},
        {name: "10元话费充值券", val: 4},
        {name: "谢谢参与", val: 0},
      ],
      colors: ["#F47F45", "#FFA468"],
      targetIndex: 0
    };
  },
  mounted () { },    
  methods: {
    onOver() {
      alert(this.listData[this.targetIndex].name)
    },
    go(event) {
      console.log("TCL: go -> event", event)
      // 模拟请求 200ms
      setTimeout(() => {
        // 随机
        this.targetIndex = Math.floor(Math.random() * this.listData.length)
				console.log("TCL: go -> this.targetIndex", this.targetIndex)
        this.$refs.luckyWheel.rotateFunc(this.targetIndex)
      }, 200);
    },

  },
  components: {
    wheel
  }
};
</script>
<style  lang='scss'>
#demo {
    // width: 200vw;
    min-height: 20vh;
    // background-image: url('../../assets/img/wheel_bg.jpg');
    // background-repeat: no-repeat;
    // background-position: center top;
    // background-size: 100%;
    overflow: hidden;
    .box {
        box-sizing: border-box;
        width: 6.84rem;
        height: 6.84rem;
        margin: 0rem auto 0;
        padding: .44rem;
        background-image: url('../../assets/img/disk_bg.png');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        overflow: hidden;
        .btn { // 使用自定义类 不能用scope
            width: 2.24rem;
        }
  }
}
</style>

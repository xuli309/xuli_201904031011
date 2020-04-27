<template>
	<div 
		class="gold-juns"
		:style="styleText"
		v-if="isShow"
	>
			<div 
				class="gold-juns-1"
				:class="{ active: isClick }"
				@click="bindClick"
			></div>

			<!-- <transition name="font-move" mode="out-in" >
				<div class="gold-font" v-if="fontShow" >{{ redText[redI] }}</div>
			</transition> -->
	</div>
</template>

<script>
    export default {
		data() {
			return {
				styleText: {}, // 坐标
				isShow: true,   // 是否显示
				isClick: false, // 是否点击过

				// redText: ["坚持就是胜利","下一秒就会中","前方就是红包","怎么还不出啊","一定要坚持","坚持坚持坚持","怎么还不中"
	            //    ,"要睡着了喂","不要这样对我","我不会放弃的","谁来帮帮我吧","刚刚是不是中了","好累啊好累啊","真的好无聊啊"
	            //    ,"红包你在哪里","我的7要炸了","不抛弃不放弃","胜利就在前方","下一秒就是红包","快出来啊红包","这系统有问题？"
                //    ,"跪着也要走下去","下一个肯定中","其实我说了不算"],
                // redI: 0,
				// redTime: new Date().getTime(),
				// fontShow: false
			}
		},
        methods: {
			bindClick(e) {
				if(this.isClick)return;
				this.isClick = true;
				this.$emit("bindClick",e);

				// 出现文字
				// this.fontShow=true;	
				// this.redHtml();
			},
			setStyle(params) {
				this.styleText = params;
			},
			destory() {
				this.isShow = false;
			},
			redHtml(){						
				if(this.redI == this.redText.length){
					this.redI = 0;
				}
				this.redI++;
				// const _this = this;
				// const timer = window.setTimeout(() => {
				// 	_this.fontShow=false;
				// }, 600);

				// console.log(this.redI);

            },
		},
    }
</script>

<style scoped>
.gold-juns{
	width: 2.8rem;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 200;
}

.gold-juns .gold-juns-1{
	width: 1.02rem;
	height: 1.36rem;
	position: absolute;
	left: 0;
	top: 0;
}
.gold-juns .gold-juns-1:after { 
	content: ""; 
	background: url("../../assets/img/hb/hb.png") no-repeat;
	background-position: center;
	background-size: 1.02rem 1.36rem;
	width: 1.02rem;
	height: 1.36rem;
	
	position: absolute;
	left:50%;
	top: 50%;;
	z-index: -1;

	margin-left:0.4rem;
	margin-top:-0.68rem;
} 
.gold-juns .active:after {
	content: "";
	background: url("../../assets/img/hb/hb-k.png") no-repeat;
	background-position: center;
	background-size: 1.02rem 1.36rem;
} 

.gold-juns .gold-font{
	width: 2.8rem;
	height: 0.6rem;
	line-height:0.6rem;
	text-align:center;
	font-family: "微软雅黑";
	color: #ffd37f;
	font-size: 0.36rem;

	position: absolute;
	top:-0.4rem;
	left:0;
	z-index: 201;
	/* display:none; */

}

.font-move-enter-active, .font-move-leave-active {
	transition: opacity .3s;
}
.font-move-enter, .font-move-leave-to {
	opacity: 0;
	transform: translateY(80px);
}

</style>
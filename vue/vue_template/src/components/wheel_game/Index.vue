<template>
    <div>
        <div class="turn-con turn-con-bg">
			<div class="turnplate" id="turnplate">
				<wheel 
					:awardData = 'awardData'
				></wheel>
			</div>
		</div>
    </div>
</template>

<script>
	import Wheel from './Wheel';

    export default {
        components: {
            Wheel,
		},
		data() {
			return {
				awardData: [
					{ id: 1, name: '谢谢', val: 0 ,src:'zp_award_1.png',imgId:'award_img_0',imgPos:[-40,-15], bgcolor:'rgba(255,255,255,0)'},
					{ id: 2, name: '云豆', val: 1 ,src:'zp_award_2.png',imgId:'award_img_1',imgPos:[-47,-46], bgcolor:'rgba(255,255,255,0)' },
					{ id: 3, name: '电子券', val: 2 ,src:'zp_award_3.png',imgId:'award_img_2',imgPos:[-62,-67], bgcolor:'rgba(255,255,255,0)'  },
					{ id: 4, name: '礼品', val: 3 ,src:'zp_award_4.png',imgId:'award_img_3',imgPos:[-60,-67], bgcolor:'rgba(255,255,255,0)'  },
					{ id: 5, name: '50元京东卡', val: 4 ,src:'zp_award_5.png',imgId:'award_img_4',imgPos:[-60,-67], bgcolor:'rgba(255,255,255,0)'  },
					{ id: 6, name: 'iPhone手机', val: 5 ,src:'zp_award_6.png',imgId:'award_img_5',imgPos:[-60,-67], bgcolor:'rgba(255,255,255,0)'  }
				],
				awardImgArr:[ 
					[-40,-15],
					[-47,-46],
					[-62,-67],
					[-60,-67], 
					[-60,-67],
					[-60,-67]
				],
				
			}
		},
		
		// async mounted () {   
        //    	const ret = await this.$axios.get('/api/wheel')
		// 	this.awardData = ret.data.list;
		// 	for (const i in this.awardData) {
							
		// 		// this.awardData[i].src =  "zp_award_"+(i+1)+".png";
		// 		this.awardData[i].imgId = 'award_img_' + this.awardData[i].id ;
		// 		this.awardData[i].imgPos = this.awardImgArr[i];
		// 		// this.awardData[i].bgcolor = 'rgba(255,255,255,0)'
		// 		this.awardData[i].bgcolor = 'rgba(0,0,0,1)'
		// 	}
            
		// },
		
        
    }
</script>

<style>
.turn-con{
	position: absolute;
	top:4.2rem;
	left:50%;
	margin-left:-3.375rem;
}

.turn-con.turn-con-bg{
	background:url("../../assets/img/draw/zp_bg.png?v=2") no-repeat;
	background-size:6.75rem 6.75rem; 
	width:6.75rem;
	height:6.75rem;
	
	/* animation: trun-bg linear 1s infinite;
    -webkit-animation: trun-bg linear 1s infinite; */
}

.turn-con .turnplate{
	display:block;
	position:relative;
	height:6.75rem;
	width:6.75rem;
	margin:0 auto;
	z-index:1
}

.turnplate canvas.drawContainer{width:100%;}
.turn-con .turnplate .pointer{
	position:absolute;
	width:1.56rem;
	height:1.56rem;
	left:50%;
	top:50%;
	margin-left:-0.78rem;
	margin-top:-0.78rem;
}


</style>
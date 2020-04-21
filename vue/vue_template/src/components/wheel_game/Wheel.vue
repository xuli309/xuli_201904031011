<template>
    <div>
        <img 
            :src="awardImg[index]" 
            v-for="(item,index) in awardData" 
            :key="index" 
            :id="item.imgId" />

        <canvas 
            class="drawContainer" 
            id="drawContainer" 
            width="675" 
            height="675"  
            ref="canvas">
        </canvas>

        <div class="pointer" id="turnStart" @click="mouseDown_Start"></div>
        <div class="pointer" id="turnStart_gray"></div>
        <div class="pointer" id="turnStop"></div>
    </div>
</template>

<script>
    import { awardImg } from './_base64.js'
    export default {
        props: {
            awardImg: {
                type: Array,
                default: () => awardImg
            },
            awardData:{
                type:Array,
                required:true,
            },
           
        },
        data() {
            return {
                startAngle : 0, //开始角度 
                outsideRadius : 245, //转盘外圆的半价 // 245, //大转盘外圆的半径
				textRadius : 148, // 转盘奖品位置距离圆心距离的位置 //148, //大转盘奖品位置距离圆心的距离
		
				// canvas : document.querySelector('#drawContainer'),
				index : 0, //转得格的下标
				timer : null,
				running : false, // 是否运行中				
				speed : 300, // 速度
				isBeginPrize : false, // 是否开始抽奖
				stepping : 0, // 步数，经过一个扇形为1步
				basecircle : 15, // 点击开始时，圆盘旋转的圈数，旋转玩指定圈数之后，再根据selected的值确定奖项   --默认定制圈数 剩余圈数
				selected : 0, // 最终选中第几个扇形，也就是确定几等奖
                item : 0, //最终选项

                roflag:false,
                newIndex:0, //减速格
                flag:false,

                prizetype:0,
                prizeid:0,
            } 
        }, 
        mounted () {       
            this.drawCircle(false);
        },
        methods: {
            init() {
                this.basecircle = 6;
                this.selected = 4;
                this.running = false;
                this.isBeginPrize = false;

                this.index = 4;

                this.stepping = 0;
                this.speed = 300;
            },
            drawCircle(isRunning) {    
                // console.log(this.awardData[0]);
                
                this.canvas = this.$refs.canvas; 
                const canvas = this.canvas;
                const ctx2 = canvas.getContext("2d");
                
                //需要画的内容的长度
                const len = this.awardData.length;
                //根据奖品个数计算圆周角度
                const arc = Math.PI / (len / 2);

                let canvasW = canvas.width; // 画板的宽度
                let canvasH = canvas.height; // 画板的高度
                const c_x = canvasW * 0.5;
                const c_y = canvasH * 0.5;
                // console.log(canvasW,canvasH,c_x,c_y,arc);
                               
                //在给定矩形内清空一个矩形
                ctx2.clearRect(0, 0, canvasW, canvasH);

                //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式  设置描边颜色 默认白色
                ctx2.strokeStyle = "rgba(255,255,255,0)";
                
                // 画具体内容
                for (var i = 0; i < len; i++) {
                    let row = this.awardData[i];
                    //当前角度
                    let angle = this.startAngle + i * arc; 
                    
                    ctx2.save();
                    ctx2.beginPath();
                    ctx2.strokeStyle = "rgba(255,255,255,0)";
                    // ctx2.strokeStyle = "rgba(0,0,0,1)";
                    // console.log(this.index,isRunning);
                    // 每个奖品区块背景颜色
                    // 正在运行的时候，改变当前扇形的颜色
                    if (isRunning && this.index == i) {
                        ctx2.fillStyle = 'rgba(255,255,255,0.5)';
                    } else {                    
                        ctx2.fillStyle = row.bgcolor;                      
                    }
                    // 绘制扇形
                    ctx2.moveTo(c_x, c_y);
                    ctx2.arc(c_x, c_y, this.outsideRadius, angle, angle + arc, false);
                    // ctx2.closePath();
				    ctx2.stroke();
				    ctx2.fill();
                    //保存画布的状态，和图形上下文栈类似，后面可以Restore还原状态（坐标还原为当前的0，0），
                    // ctx2.save();

                    /*----绘制奖品内容-----*/
                    // translate方法重新映射画布上的 (0,0) 位置
                    ctx2.translate(
                        c_x + Math.cos(angle + arc / 2) * this.textRadius, 
                        c_y + Math.sin(angle + arc / 2) * this.textRadius
                    );
                    // rotate方法旋转当前的绘图，因为文字适合当前扇形中心线垂直的！
                    // angle，当前扇形自身旋转的角度 +  arc / 2 中心线多旋转的角度  + 垂直的角度90°
                    // ctx2.rotate(this.angle + arc / 2 + Math.PI / 2);

                    // 绘制图片
                    let img = document.querySelector("#award_img_" + i);   
                    ctx2.drawImage(
                        img,row.imgPos[0],row.imgPos[1],img.width, img.height
                    );                                                                                 
                    //还原画板的状态到上一个save()状态之前
                    ctx2.restore();
                    /*----绘制奖品结束----*/
                }
                
            },
            rotate() {
               
                if (this.stepping == 4) { //3步之后开始加速
                    this.clearTimer();
                    this.speed = 100;
                    this.timer = setInterval(this.rotate, this.speed);
                }

                if (this.basecircle == 1) { //最后一圈从哪里开始减速
                    if ((this.item == 1 && this.index == 2) ||
                        (this.item == 2 && this.index == 3) ||
                        (this.item == 3 && this.index == 4) ||
                        (this.item == 4 && this.index == 5) ||
                        (this.item == 5 && this.index == 6)) {
                            this.roflag = true;
                            this.speed = 300;
                            this.clearTimer();
                            this.timer = setInterval(this.rotate, this.speed);
                    }
                    if (this.roflag) {
                        this.speed += 100;
                        this.clearTimer();
                        this.timer = setInterval(this.rotate, this.speed);
                    }
                }

                if (this.basecircle > 0 && this.index == 6) { // 基本圈数借宿以后，开始随机抽奖
                    this.index = 0;
                    this.basecircle--;
                    if (this.basecircle == 0) { // 开始随机抽奖
                        this.isBeginPrize = true;
                        this.speed += 300;
                        this.clearTimer();
                        this.timer = setInterval(this.rotate, this.speed);
                    }
                }

                if (this.isBeginPrize && this.selected > 0) { // 开始抽奖
                    if (--this.selected == 0) { //到了选择的奖项之后
                        this.clearTimer();
                        this.isStop = true;
                        this.begin = false;
                        
                        const _this = this;
                        document.querySelector("#turnStart_gray").style.display="block";
                        document.querySelector("#turnStart").style.display="hide";
                        document.querySelector("#turnStop").style.display="hide";
                        window.setTimeout(function() {
                            _this.showResult();
                        }, 2000);

                    } else {
                        this.clearTimer();
                        this.speed += 100;
                        this.timer = setInterval(this.rotate, this.speed);
                    }
                }

                this.drawCircle(true);

                this.index++;
                this.stepping++;

            },
            showResult() {
                alert("恭喜您获得"+this.awardData[this.item].name);
                window.setTimeout(()=>{
                    document.querySelector("#turnStart_gray").style.display="hide";
                    document.querySelector("#turnStart").style.display="block";
                    document.querySelector("#turnStop").style.display="hide";
                },1000)
            },
            clearTimer() {
                clearInterval(this.timer);
                this.timer = null;
            },
            getPointOnCanvas(canvas, x, y) {
                const bbox = canvas.getBoundingClientRect();
                return {
                    x: x - bbox.left * (canvas.width / bbox.width),
                    y: y - bbox.top * (canvas.height / bbox.height)
                };

            },
            mouseDown_Start(e) {
                this.resultData = null;
                var local = this.getPointOnCanvas(this.canvas, e.pageX, e.pageY);
                if (this.running) {
                    return;
                }
                this.init(); //初始化数据	

                const award_id = Math.floor(Math.random()*this.awardData.length);
                
                for (var i = 0; i < this.awardData.length; i++) {
                    if (award_id == this.awardData[i].id) {
                        this.selected = i + 1;                        
                        this.item = this.selected;
                        break;
                    }
                }

                this.timer = setInterval(this.rotate, this.speed);
            }
        },
    }
</script>

<style scoped>
    img{
        display:none;
    }
    #turnStart{
        background-image:url(../../assets/img/draw/zp_btn_start1.png);
        background-size:contain; 
    }
    #turnStart_gray{
        background-image:url(../../assets/img/draw/zp_btn_start1_gray.png);
        background-size:contain; 
        display: none;
    }

    #turnStop{
        background-image:url(../../assets/img/draw/zp_btn_stop.png);
        background-size:contain; 
        display: none;
    }
</style>
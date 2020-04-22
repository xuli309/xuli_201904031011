<template>
    <div>
        <div class="hb-bg" id="hb-bg"><p class="font-gray" id="font-gray">3</p></div>
        <div class="wrap" id="wrap">
            <div class="grab">
                <div class="grab-main">
                    <div class="gold-juns gold-juns-1" id="gold-hb"></div>
                    <div class="gold-font"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'redpackage',
        data() {
            return {
                redText :["坚持就是胜利","下一秒就会中","前方就是电子券","怎么还不出啊","一定要坚持","坚持坚持坚持","怎么还不中"
	               ,"要睡着了喂","不要这样对我","我不会放弃的","谁来帮帮我吧","刚刚是不是中了","好累啊好累啊","真的好无聊啊"
	               ,"电子券你在哪里","我的7要炸了","不抛弃不放弃","胜利就在前方","下一秒就是电子券","快出来啊电子券","这系统有问题？"
                   ,"跪着也要走下去","下一个肯定中","其实我说了不算"],
                redI :0,
                redCount :0,
                redTime :new Date().getTime(),
                roundCount :0,//累计个数
                i :0,
                
                flag :false,
                
                total :10*60*10000/600,//10分钟出的电子券数  10000
                
                oConfig :window.oPageConfig,
                interval :null,
                move :null,
            }
        },
        methods: {
            init() {
                //初始的电子券坐标随机
                let pos = this.getPos({
                    left : -1,
                    top : -1,
                    rand_x : -1,
                    rand_y : -1
                });

                // $("#gold-hb").css({
                //     'left' : pos.left,
                //     'top' : pos.top,
                // }).one("touchstart",function(){
                //     oPage.bindClick($(this));
                //     oPage.redHtml($(this),pos.top,pos.left);
                // });

                // if(cnt > 0 || totalCache == "0" || totalCache=="" || runFlag == "1" || uid.length == 1){
                //     return;
                // }else if(uid.length == 1){
                //     return;
                // }else{
                    this.view();
                // }
            },
            getRand(){
                return Math.ceil(Math.random() * 9);
            },
            view() {
                var time = 1;
                var m = 0;                
                move = setInterval(function() {
                    if (i < total) {
                        i++;
                        var roundImg = Math.floor(Math.random()*2+1);//初始随机出1-2个图
                        this.draw(roundImg);	
                    }
                }, 600);
                
            },
            getPos(pos){
                let left = 0;//65
                let top = 0;//18
                let rand_x = this.getRand();
                let rand_y = this.getRand();

                if(pos.rand_y >= 0 && pos.rand_y < 5){
                    rand_y = pos.rand_y+(Math.ceil(Math.random() * 3)+2);
                }else if(pos.rand_y >= 5){
                    rand_y = pos.rand_y-(Math.ceil(Math.random() * 2)+2);
                }
                left = rand_x * 22;
                top = rand_y * 37;
                
                return {
                    left : left,
                    top : top,
                    rand_x : rand_x,
                    rand_y : rand_y
                };
            },
            draw(roundImg){

                let pos = this.getPos({
                    left : -1,
                    top : -1,
                    rand_x : -1,
                    rand_y : -1
                });

                if(roundImg == 2){
                    var pos2 = this.getPos(pos);
                    //console.log(pos, pos2);
                    $("<div class='gold-juns gold-juns-1'>").css({
                        'left' : (pos.left/100)+"rem",
                        'top' : (pos.top/100)+"rem"
                    }).appendTo(ui.$grabMain).one("touchstart",function(){
                        oPage.bindClick($(this));
                        oPage.redHtml($(this),pos.top,pos.left);
                    });
                    
                    $("<div class='gold-juns gold-juns-1'>").css({
                        'left' : (pos2.left/100)+"rem",
                        'top' : (pos2.top/100)+"rem",
                    }).appendTo(ui.$grabMain).one("touchstart",function(){
                        oPage.bindClick($(this));
                        oPage.redHtml($(this),pos2.top,pos2.left);
                    });
                    
                    
    //				alert("top1="+top1+";left1="+left1+"\ntop2="+top2+";left2="+left2);

                }else{
                    
                    $("<div class='gold-juns gold-juns-1'>").css({
                        'left' : (pos.left/100)+"rem",
                        'top' : (pos.top/100)+"rem"
                    }).appendTo(ui.$grabMain).one("touchstart",function(){
                        oPage.bindClick($(this));
                        oPage.redHtml($(this),pos.top,pos.left);
                    });
                    

                    /*$('.gold-juns').eq(0).fadeOut(400);
                    setTimeout(function() {
                        $('.gold-juns').eq(0).remove();
                    }, 20);*/
                }
            },
            bindClick(obj){
                obj.removeClass("gold-juns-1").addClass("gold-juns-2");
			
                // if(cnt > 0){
                //     var err = "您已在本时段抢过电子券，把机会留给其他的小伙伴吧！下一时段记得再来哦！";
                //     show_error(err,1);
                //     $(".gold-juns").remove();
                //     return;
                // }
                
                // if(totalCache=="" || totalCache == "0"){
                //     var err = "唉呀，你来得太晚了，电子券都被抢光啦！";
                //     show_error(err,1);
                //     $(".gold-juns").remove();
                //     return;
                // }
                
                this.roundCount++;
                if(this.roundCount < 10){
                    return;
                }
                
                var roundInt = Math.floor(Math.random()*baseNum+1);//初始1-5里随机取一个整数请求后台action一次
    //			$("#log").html(roundInt+"==="+round);

                if(this.roundInt <= this.round){
                    //回调函数
                    hbRequest(function (data){
                        console.log(data)
                        if(data == null || !data.errcode)return;
                        
                        var code = data.errcode;
                        var msg = data.errmsg;

                        if(!this.flag){
                            
                            this.flag = true;
                            
                            total = i;
                            // $(".gold-juns").remove();
                            // $(".div-num").html(data.totalCacheStr);//剩余个数
                            if(code == "10000"){
                                this.qhbFlag = true;
                                // show_result(data);//弹出中奖钱 
                            }else{
                                this.qhbFlag = false;
                                // show_error(msg,code);//弹出错误提示
                            }
                        }
                    });
                }

            }
        },
    }
</script>

<style scoped>
.hb-bg {
	margin: 0 auto;
	width: 7.5rem;
	background: #5A2925;
	min-height: 11rem;
	display: none;
	
	position: absolute;
	top:50%;
	left:50%;
	margin-left:-3.75rem;
	margin-top:-5.5rem;
}

.hb-bg .font-gray{
	
	width:7.5rem;
	min-height: 9.37rem;
	color:#F3CC36;
	text-align: center;
	font-size:2rem;
	font-weight:bold;
	font-family:Arial, Helvetica, sans-serif;
	
	/* display: box;
	display: -webkit-box;
	display: -moz-box;
	 */
	-webkit-box-pack:center;
	-moz-box-pack:center;
	-webkit-box-align:center;
	-moz-box-align:center;
}

.wrap{
	width:7.5rem;
	display: none;
	margin:0 auto;
	margin-top: 0.35rem;
}

.wrap .grab-main{
  position: relative;
  width: 7rem;
  /* height: 3.95rem; */
  margin:0 auto;
  -webkit-tap-highlight-color:rgba(255,0,0,0);
  top:1.78rem;
}

.gold-juns{
	width: 0.51rem;
	height: 0.68rem;
	position: absolute;
	
	left: 0;
	top: 0;
	z-index: 200;

	text-align: center;
}

.gold-juns p{
	width: 1.5rem;
	height: 0.3rem;
	line-height:0.3rem;
	
	font-family: "微软雅黑";
	color: #ffd37f;
	font-size: 0.2rem;
	
	position: absolute;
	top:0.2rem;
	z-index: 201;
	
	-webkit-animation:gold-font 1s ease-in forwards;
    -moz-animation:gold-font 1s ease-in forwards;
    animation:gold-font 1s ease-in forwards; 
}


</style>
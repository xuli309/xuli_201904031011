var pushTimer,progress=null;
var queueIndex = 0,queueTimer,timer,_color='red';
var emulator3D = {
	config: {
		area:[{x:36,y:61},{x:118,y:61},{x:204,y:61}],
		start_point:{x:3,y:45},
		stock:{x:0,y:115,width:63,height:40},
		push_point:[{x:37,y:-53},{x:32,y:-53},{x:30,y:-53}],
		audio:'/static/audio/BallBouncing.mp3'
	},
	//初始化
	init: function(){
		/*document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
			WeixinJSBridge.call('hideOptionMenu');	
		});*/
		var cfg = this.config;
		$.each(cfg.area,function(i,d){
			$e = $('<div class="ballBox"><div class="xBox"></div></div>').appendTo($('#emulator')).css({left:d.x,top:d.y});
			var arr=[];
			for(var i=0;i<10;i++) arr.push('<figure class="ball"><p>'+i+'</p></figure>');
			$o = $('<div style="position:absolute"><section class="stage">'+arr.join('')+'</section></div>').appendTo($e.find('.xBox')).css({left:cfg.start_point.x, top:cfg.start_point.y});
			$o.find('.ball').css({width:15,height:14});
		});
	},
	//开始摇奖
	start: function(){
		//$('<audio id="Audio3d"><source src="'+this.config.audio+'"></audio>').appendTo('body');
		//Audio3d.play();
		$('.action').hide();
		var __=this;
		if(progress!=null && progress) return;
		if(progress==null) progress = true;
		if($('.chosed').length>1){
			this.restart();
		}else{
			$('.xBox .ball').each(function(){
				$(this).transition({x:3,y:80});
			});
			this.bounce();
		}
	},
	//随机滚动
	bounce: function(){
		var __ = this;
		var cfg = this.config;
		timer = window.setInterval(function(){
			$('.xBox .ball').each(function(i){
				var x = Math.ceil((Math.random()*(cfg.stock.x+cfg.stock.width))+cfg.stock.x);
				var y = Math.ceil((Math.random()*(cfg.stock.height+cfg.stock.height))+cfg.stock.y);
				if(!$(this).hasClass('chosed')){
					var $e = $(this).css('position','absolute');
					$e.transition({x:x,y:y},50);
				}
			});
			
		},20);
		popTimer = window.setInterval(function(){
			__.pushBall();
		},1000);
		setTimeout(function(){
			//$('#Audio3d').remove();
                        mybackgroundAudio.pause();
                        mybackgroundAudio.currentTime=0;
			window.clearInterval(timer);
			window.clearInterval(popTimer);
			$('.xBox figure').not('.chosed').remove();
			progress = false;
			$('.result').show();
			$('.action').show();
			__.addIntoResult();
		},8000);
	},
	//抽取随机球
	pushBall: function(){
		var total = $('.chosed').length; 
		if(total<3){
			$e = $('.xBox').eq(total).find('.ball').eq(Math.ceil((Math.random()*9)+0)).addClass('chosed');
			$e.transition({x:this.config.push_point[total].x,y:this.config.push_point[total].y});
			$('<b>'+$e.text()+'</b>').appendTo($('.result'));
		}else{
			$('.button').text('再来一次');
		}
	},
	//重启摇奖
	restart: function(){
		$('.xBox').remove();
		$('.result').html('').hide();
		var __=this;
		__.init();
		setTimeout(function(){
			__.start();
		},1500);
	},
	addIntoResult: function(){
		/*var now= new Date();*/
		/*var h = now.getHours(), m = now.getMinutes();*/
		/*$('<li><span>'+(h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+'</span>'+$('.result').html()+'</li>').prependTo($('#session'));*/
		$('<li><span>请记住</span>'+$('.result').html()+'</li>').prependTo($('#session'));
	}
};

var emulator7lecai={
	config:{
		ball:[['01','02','03','04','05'],['06','07','08','09',10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25],[26,27,28,29,30]],
		ball_geo:[{x:100,y:70},{x:122,y:70},{x:143,y:70},{x:164,y:70},{x:187,y:70},{x:208,y:70}],
		bounce_area:{x:-30,y:-100,width:60,height:95}
	},
	init: function(){
		/*document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
			WeixinJSBridge.call('hideOptionMenu');	
		});*/
		var __ = this;
		$.each(__.config.ball,function(i,d){
			var arr=[];
			for(var k=0;k<d.length;k++) arr.push('<figure class="ball red"><p>'+d[k]+'</p></figure>');
			$('<div style="position:absolute" class="group"><section class="stage">'+arr.join('')+'</section></div>').appendTo($('#emulator')).css({left:__.config.ball_geo[i].x, top:__.config.ball_geo[i].y});
		});
	},
	start: function(){
		if($('.chosed').length>0){
			$('.chosed').remove();
			emulator7lecai.init();
		}
		$('.billboard').html('');
		$('.action').hide();
		$('.group').transition({y:96});
		setTimeout(function(){emulator7lecai.bounce();},200);
	},
	bounce: function(){
		var __=this;
		timer = window.setInterval(function(){
			$('.group .ball').each(function(){
				var x = Math.ceil((Math.random()*__.config.bounce_area.width)+__.config.bounce_area.x);
				var y = Math.ceil((Math.random()*__.config.bounce_area.height)+__.config.bounce_area.y);
				$(this).css({left:x,top:y });
			});
		},100);
		queueTimer = window.setInterval(function(){
			__.pushBall();
		},2000);
	},
	pushBall: function(){
		var __=this;
		var total = $('.chosed').length; 
		if(total<8){
			var time =110;
			//$e = $('.group .ball').eq(Math.ceil((Math.random()*$('.group').length)+0)).addClass('chosed').appendTo($('#emulator'))//原始
                        $e = $('.group .ball').eq(Math.ceil(Math.random()*29)).addClass('chosed').appendTo($('#emulator'))
			.css({'position':'absolute','transform':'translate(0,0)',left:'152px',top:'120px',width:16,height:16})
			.transition({y:-101})
			.transition({x:35},time,'in')
			.transition({x:104,y:-46},time,'in')
			.transition({x:127,y:20},time,'in')
			.transition({x:90,y:118},time,'in')
			.transition({x:40,y:160},time,'in')
			.transition({x:-130+(total*17),y:197-(total*3.7)});
			if($e.text()!='')$('.billboard').append('<b>'+$e.text()+'</b>');
		}else{
                    mybackgroundAudio.pause();
                        mybackgroundAudio.currentTime=0;
			$('.group').remove();
			window.clearInterval(timer);
			window.clearInterval(queueTimer);
			$('.action').show();
			$('.button').text('再来一次');
			var now= new Date();
			var h = now.getHours(), m = now.getMinutes();
			if($e.text()!='')$('<li><span>'+(h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+'</span>'+$('.billboard').html()+'</li>').prependTo($('#session'));
		}
	}
};

// 双色球背景音控制
backgroundAudioflag = true;// 标记是否为篮球选号
                
var emulatorSSQ = {
	config:{
		red:[['01','02','03','04'],['05','06','07','08'],['09',10,11,12],[13,14,15],[16,17,18],[19,20,21],[22,23,24],[25,26,27],[28,29,30],[31,32,33]],
		blue:[['01','02'],['03','04'],['05','06'],['07','08'],['09',10],[11,12],[13],[14],[15],[16]],
		red_geo:[{x:64,y:62},{x:84,y:62},{x:103,y:62},{x:123,y:76},{x:143,y:76},{x:163,y:76},{x:182,y:76},{x:202,y:76},{x:222,y:76},{x:241,y:76}],
		blue_geo:[{x:64,y:90},{x:84,y:90},{x:103,y:90},{x:123,y:90},{x:143,y:90},{x:163,y:90},{x:182,y:100},{x:202,y:100},{x:222,y:100},{x:241,y:100}],
		bounce_area:{x:-60,y:-90,width:125,height:105},
		first_point:[{x:88,y:90},{x:70,y:90},{x:50,y:90},{x:30,y:75},{x:10,y:75},{x:-10,y:75},{x:-30,y:75},{x:-50,y:75},{x:-70,y:75},{x:-88,y:75}]
	},
	init: function(){
		/*document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
			WeixinJSBridge.call('hideOptionMenu');	
		});*/
		this.prepare('red');
	},
	prepare: function(color){
		var __=this;
		_color = color;
		var data = color=='red'?__.config.red:__.config.blue;
		var geo  = color=='red'?__.config.red_geo:__.config.blue_geo;
		$.each(data,function(i,d){
			var arr=[];
			for(var k=0;k<d.length;k++) arr.push('<figure class="ball '+color+'"><p>'+d[k]+'</p></figure>');
			$('<div style="position:absolute" class="group"><section class="stage">'+arr.join('')+'</section></div>').appendTo($('#emulator')).css({left:geo[i].x, top:geo[i].y}).find('.ball').css({width:15,height:15});
		});
	},
	start: function(){
		$('.action').hide();
		var __ = this; 
		if($('.group').length<1){
			$('.ball').remove();
			$('.billboard').html('');
			this.init();
		}
		queueTimer = window.setInterval(function(){
			if(queueIndex>=(_color=='red'?33:16)){
			   if(_color=='red') { 
			   		$('#redball').show();
			   		$('#buleball').hide();
			   		$('#redball').offset({left: document.getElementById("redball").offsetLeft-40 });
			   }
			   else{
			   		$('#redball').hide();
			   		$('#blueball').show();
			   		$('#blueball').offset({left: document.getElementById("blueball").offsetLeft-40 });
			   }				
				window.clearInterval(queueTimer);
				setTimeout(function(){__.bounce();},200);
				return;
			}
			var $e = $('.group .ball').eq(queueIndex);
			var i = $e.parents('.group').index()-(_color=='red'?2:8); //alert(i)
			$e.css('position','absolute').transition({y:40-15*$e.index()}).transition({x: emulatorSSQ.config.first_point[i].x, y: emulatorSSQ.config.first_point[i].y},30).transition({y:190});
			queueIndex++;
		},30);
	},
	bounce: function(){
                //mybackgroundAudio.play();// 开始播放背景音
                $(".playbtn").click();
		var __=this;
		timer = window.setInterval(function(){
			$('.group .ball').each(function(){
				var x = Math.ceil((Math.random()*__.config.bounce_area.width)+__.config.bounce_area.x);
				var y = Math.ceil((Math.random()*__.config.bounce_area.height)+__.config.bounce_area.y);
				$(this).css({left:x,top:y });
			});
		},100);
		queueTimer = window.setInterval(function(){
			__.pushBall();
		},2000);
	},
	pushBall: function(){
		var __=this;
		var total = $('.chosed').length; 
                if(total==6 && backgroundAudioflag){// 变为篮球里暂停背景音
                    backgroundAudioflag = false;
                    mybackgroundAudio.pause();
                    mybackgroundAudio.currentTime=0;
                }
                
		if(total<(_color=='red'?6:7)){
                        if(_color=='red') 
                            _t = 32;
                        else 
                            _t = 15;
                        $e = $('.group .ball').eq(Math.ceil((Math.random()*_t))).addClass('chosed').appendTo($('#emulator'))
			.css({'transform':'translate(0,0)',left:'167px',top:'303px'})
			.transition({x:26,y:34})
			.transition({x:-82+(total*18)});
			if(_color=='blue'){
				setTimeout(function(){
					$('.action').show();
					$('.button').text('再来一次');
					__.addIntoResult();
				},1000);
				if($e.text()!='')$('.billboard').append('<b class="pink">'+$e.text()+'</b>');
			}else{
				if($e.text()!='')$('.billboard').append('<b>'+$e.text()+'</b>');
			}
			
		}else{
			$('.group').remove();
			window.clearInterval(timer);
			window.clearInterval(queueTimer);
			queueIndex = 0;
			if(_color=='red'){
				this.prepare('blue');
				setTimeout(function(){
					emulatorSSQ.start();
				},1500);
			}
		}
	},
	addIntoResult: function(){
                setTimeout(function(){// 单注选号结束，停止背景音
                    mybackgroundAudio.pause();
                    backgroundAudioflag = true;
                    mybackgroundAudio.current = 0;
                },1000);
		/*var now= new Date();
		var h = now.getHours(), m = now.getMinutes();
		$('<li><span>'+(h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+'</span>'+$('.billboard').html()+'</li>').prependTo($('#session'));*/
		$('<li><span>请记住</span>'+$('.billboard').html()+'</li>').prependTo($('#session'));
	}
};

var emulatorLucky={
	currentRotate:0,
	countRotate:0,
	params:{
		type:'animal',
		count:1,
		data:0,
		category:''
	},
	config:{
		animal:[{left:127,top:7,deg:0}, {left:187,top:24,deg:31}, {left:229,top:67,deg:60}, {left:245,top:126,deg:90},{left:230,top:185,deg:120},{left:187,top:228,deg:150},{left:127,top:245,deg:180},{left:68,top:230,deg:210},{left:25,top:186,deg:240},{left:8,top:128,deg:270},{left:24,top:67,deg:300},{left:66,top:26,deg:332}], //生肖
		star:[{left:127,top:7,deg:0}, {left:187,top:24,deg:31}, {left:229,top:67,deg:60}, {left:245,top:126,deg:90},{left:230,top:185,deg:120},{left:187,top:228,deg:150},{left:127,top:245,deg:180},{left:68,top:230,deg:210},{left:25,top:186,deg:240},{left:8,top:128,deg:270},{left:24,top:67,deg:300},{left:66,top:26,deg:332}], //星座
		blood:[{left:133,top:23,deg:33},{left:170,top:178,deg:120},{left:19,top:213,deg:211},{left:-10,top:64,deg:303}]  //血型
	},
	init: function(type){
		this.params.category = type;
		this.change('animal');
	},
	change: function(cls){
		var __ = this;
		__.params.type = cls;
		__.params.data = 0;
		__.currentRotate = __.countRotate = 0;
		$('#luckyBox').removeAttr('class','').addClass(cls).html('<div class="arrow"></div><div class="center_focus"></div>');
		$('.center_focus').css({left:114,top:114});
		var genBlock = function(arr){
			$.each(arr,function(i,d){
				$('<b class="selector"></b>').appendTo($('#luckyBox')).css({left:d.left,top:d.top,'transform':'rotate('+d.deg+'deg)'}).unbind('click').click(function(){
					__.currentRotate = __.countRotate = parseInt($(this).css('rotate').replace('deg',''));
					$('.arrow').transition({ rotate: $(this).css('rotate')});
					__.params.data = $(this).index()-3;
				});
			});
		};
		if(cls=="animal"){
			$('#luckyBox').append('<img src="'+staticPrefix+'animal.png" width=100% />');
			genBlock(this.config.animal);
		}else if(cls=='star'){
			$('#luckyBox').append('<img src="'+staticPrefix+'starsign.png" width=100% />');
			genBlock(this.config.star);
		}else if(cls=='blood'){
			$('#luckyBox').append('<img src="'+staticPrefix+'blood.png" width=100% />');
			genBlock(this.config.blood);
			$('.arrow').transition({rotate:'33deg'});
			__.currentRotate = __.countRotate = 33;
		}else if(cls=='qq'||cls=='phone'){
			$('.arrow').hide();
			$('.center_focus').css({left:117,top:180});
			$('#luckyBox').append('<img src="'+staticPrefix+'general.png" width=100% /><div class="panel"><h3>请输入您的'+(cls=='qq'?'QQ':'手机')+'号码</h3><input type="number" name="code" onkeyup="emulatorLucky.params.data=this.value"/></div>');
		}
	},
	start: function(){
		$('.action').hide();
		var __ = this;
		if((__.params.type=='qq'||__.params.type=='phone') && $('input[name=code]').val()==''){
			$('input[name=code]').focus();
			$('.action').show();
			return;
		}
		timer = window.setInterval(function(){
			__.countRotate+=50;
			$('.arrow').transition({ rotate: __.countRotate},110,'in');
			$('.center_focus').transition({ rotate: __.countRotate},110,'in');
		},110);
		window.setTimeout(function(){
			window.clearInterval(timer);
			__.countRotate = __.currentRotate;
			$('.arrow').transition({ rotate: __.currentRotate},200,'in');
			$('.center_focus').transition({ rotate: __.currentRotate},200,'in');
			__.submit();
		},3000);
	},
	submit: function(){
		$.post(get_lucky_url,this.params,function(c){
			var html='<div style="padding-left:15px">'+c+'</div>';
			alertify.alert(html); 
		});
		$('.action').show();
	}
};
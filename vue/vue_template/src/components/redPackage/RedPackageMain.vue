<template>
    <div class="grab-main">
        <red-package-rain
            v-for="(item, index) in redPacks"
            :key="index"
            :ref="`rain-package-${index}`"
            @bindClick="bindClick"
        ></red-package-rain>
    </div>
</template>

<script>
    import RedPackageRain from './RedPackageRain.vue';
    export default {
        name:'redpackagemain',
        components: {
            RedPackageRain,
        },
        data() {
            return {
                roundCount :0,//点中的累计个数
                total : 10*60*10000/600,//10分钟出的红包数  10000
                
                move :null, //红包定时器
                roundBase:100,//随机常量
                round:10,   //随机总数
            
                redPacks:[], //红包組件列表
                index :0,//红包组件下标

                redPackFs:[],//红包弹出字体组件

                flag: true,//抽中红包就结束

                left1: 0,//红包随机坐标
            }
        },
        mounted () {
            this.init();            
        },
        methods: {
            
            init() {
                // this.draw(this.index);
                // this.index++;
                this.view();
            },
            getRand(){
                return Math.ceil(Math.random() * 9);
            },
            getPos(pos){             
                let left = 0;
                let top = 0;
                let rand_x = this.getRand();
                let rand_y = this.getRand();

                if(pos.rand_y >= 0 && pos.rand_y < 5){
                    rand_y = pos.rand_y+(Math.ceil(Math.random() * 3)+2);
                }else if(pos.rand_y >= 5){
                    rand_y = pos.rand_y-(Math.ceil(Math.random() * 2)+2);
                }
                left = rand_x * 22;//65
                top = rand_y * 37;//18

                // console.log(`left:${left},top:${top},rand_x:${rand_x},rand_y:${rand_y}`);
                
                return {
                    left : left,
                    top : top,
                    rand_x : rand_x,
                    rand_y : rand_y
                };
                
            },
            view() {
                const _this = this;
                _this.draw(_this.index);
                _this.index++;      
                this.move = setInterval(() =>{
                    _this.clear();
                    if (_this.index < _this.total) {
                        //随机出1-2个图
                        const rand = Math.floor(Math.random()*2+1);
                        for (let i = 0; i < rand; i++) {
                             _this.draw(_this.index);
                             _this.index++;
                        }
                    }
                }, 600);
            },
            async draw(index){

                // 生成Dom节点
                this.redPacks.push(`rain-package-${index}`);                
                // 生成坐标
                let pos = this.getPos({
                    left : -1,
                    top : -1,
                    rand_x : -1,
                    rand_y : -1
                });
                let param = {
                    left:`${pos.left/100}rem`,
                    top:`${pos.top/100}rem`
                }
                await this.$nextTick( async ()=>{
                    // Dom节点
                    let el = this.$refs[`rain-package-${index}`][0];
                    // console.log(el);
                    if(el){
                        //每次画红包之前将点击样式重置
                        el.isClick=false;
                        // 调用子组件的方法
                        await el.setStyle(param);

                        el.$el.addEventListener('transitionend', el.destory, false);
                    }
                   
                });
            },
            stop(){
                this.flag = false;
                clearInterval(this.move);
            },
            // 清空
            clear(){
                // this.stop();
                this.redPacks=[];
                this.index=0;
               
            },
            async bindClick(e){

                if(!this.flag){
                    return;
                }

                // roundCount-累计个数，必须点击10次以上才请求后台，减少压力
                this.roundCount++;
                if(this.roundCount < 10){
                    return;
                }

                // 初始1-5里随机取一个整数请求后台一次
                const roundInt = Math.floor(Math.random()*this.roundBase+1);
                console.log(roundInt,this.round);
                
                if(roundInt <= this.round){
                    const res = await this.$axios.get('/api/getHbResult')
                    const data = res.data;
                    if(data.code == 0){
                        alert(`恭喜您抢到${data.money}元，红包剩余${data.remanetTotal}个，\n继续加油哦！`)
                        this.flag = false;
                        this.stop();
                        this.clear();
                    }
                }
                
            },   
        },
    }
</script>

<style scoped>
.grab-main{
  position: relative;
  width: 7rem;
  margin:0 auto;
}

</style>
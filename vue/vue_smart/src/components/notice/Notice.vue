<template>
    <div>
        <div class="alert">
            <div class="alert-container" v-for="item in alerts" :key="item.id">
                <div class="alert-content">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'notice',
        data() {
            return {
                alerts: []
            }
        },
        created () {
            this.id = 0;
        },
        methods: {
            add(option) {
                // 新增消息
                const id = 'id_' + (this.id++);
                const _alert = {...option,id:id};
                this.alerts.push(_alert);

                // 延迟关闭
                const duration = option.duration;
                setTimeout(() => {
                    this.del(id)
                }, duration*1000);
            },
            del(id){ 
                //  根据 id 删除
                for (let i = 0; i < this.alerts.length; i++) {
                    const alert = this.alerts[i];
                    if(alert.id == id){
                        this.alerts.splice(i,1);
                        break;
                    }
                }
            }
        },
    }
</script>

<style scoped>
.alert{
    position: fixed;
    width:100%;
    top:30px;
    left:0;
    text-align: center;
}
.alert .alert-content{
    display: inline-block;
    padding:8px;
    background: rgba(0, 0, 0, 0.3);
    color:#fff;
    margin-bottom:10px;
}
</style>
import Notice from "./Notice.vue"
import Vue from 'vue'

// 手动创建 Alert 组件，加载到body里，不受组件影响
Notice.alertInstance = props=>{
    const Instance = new Vue({
        data(){
            return props || {}
        },
        render(h){
            return h(Notice,{props})
        }
    })

    const comp = Instance.$mount(); // 渲染
    console.log(comp);

    // 挂载在body之上，而不是组件内部
    document.body.appendChild(comp.$el)

    // notice 还是vue的实例，并不是dom的
    const notice = Instance.$children[0];

    return {
        add(options){
            notice.add(options)
        },
        del(id){
            notice.del(id)
        }
    } 
}

export default Notice
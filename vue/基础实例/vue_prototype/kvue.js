// new KVue({
//     data:{msg:'hello'}
// })

class KVue{
    constructor(options){
        this.$options = options;

        // 处理data选项
        this.$data = options.data;

        //响应化过程
        this.observe(this.$data);

        // new Watch();
        // this.$data.test;
        
        // new Watch();
        // this.$data.name;

        
        new Compile(this.$options.el, this)
    }

    observe(value){    
        if(!value || typeof value !== 'object'){
            return;
        }
        
        // 遍历对象
        Object.keys(value).forEach(key=>{
            this.defineReactive(value, key, value[key]);

            // 代理加到VM上
            this.proxyData(key);
        });
    }

    proxyData(key){
        Object.defineProperty(this, key, {
            get(){
                return this.$data[key];
            },
            set(newValue){
                this.$data[key] = newValue;
            }
        });
    }

    defineReactive(obj,key,value){

        const dep = new Dep();

        Object.defineProperty(obj, key,{
            get(){
                // 将Dep.target添加到dep中
                Dep.target && dep.addDep(Dep.target);
                return value;
            },
            set(newValue){
                if(newValue !== value){
                    value = newValue;
                    // console.log(`${key}更新了：${newValue}`);
                    dep.notify();
                }
            }
        });
        // 做个递归 对象嵌套用
        this.observe();
    }
}

class Dep{
    constructor (){
        this.deps = [];
    }
    
    addDep(dep){
        this.deps.push(dep);
    }

    notify(){
        this.deps.forEach(dep=>dep.update());
    }

}

class Watch{
    constructor() {
        Dep.target = this;
    }

    update(){
        console.log('属性更新了！');
    }
}
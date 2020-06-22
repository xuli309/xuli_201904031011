class Compile{

    constructor(el,vm){
        this.$vm = vm;
        this.$el = this.isElementNode(el) ? el : document.querySelector(el);
        this.compileUtil = new CompileUtil();

        if(this.$el){
            // 提供宿主中模板内容到Fragment表情，dom操作会提高效率
            this.$fragment = this.node2Fragment(this.$el);

            this.compile(this.$fragment);
            this.$el.appChildren(this.$fragment);
        }
    }

    node2Fragment(el){
        const fragment = document.createDocumentFragment();
        let child;
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }

        return fragment;
    }

    compile(el){
        const childNodes = el.childNodes;
        
        Array.from(childNodes).forEach(node=>{
            // 判断节点类型
            if(this.isElementNode(node)){
                //  element 节点
                // console.log('编译元素节点' + node.nodeName);
                this.compile(node);
            }else if(this.isInterpolation(node)){
                // 差值表达式
                // console.log('编译差值文本' + node.textContent);
                this.compileText(node, RegExp.$1.trim())
            }

            // 递归
            if(node.childNodes && node.childNodes.length>0){
                this.compile(node)
            }
        })
        
    }

    compileAttr(node) {
        var nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(function(attr) {
            var attrName = attr.name;
            if (this.isDirective(attrName)) {
                var exp = attr.value;
                var dir = attrName.substring(2);
                // 事件指令
                if (this.isEventDirective(dir)) {
                    this.compileUtil.eventHandler(node, this.$vm, exp, dir);
                    // 普通指令
                } else {
                    this.compileUtil[dir] && compileUtil[dir](node, this.$vm, exp);
                }

                node.removeAttribute(attrName);
            }
        });
    }

    isInterpolation(node){
        // 是否符合{{}}
        return this.isTextNode(node) && /\{\{(.*)\}\}/.test(node.textContent)
    }

    compileText(node, exp) {
        this.compileUtil.text(node, this.$vm, exp);
    }

    isDirective(attr) {
        return attr.indexOf('v-') == 0;
    }

    isEventDirective(dir) {
        return dir.indexOf('on') === 0;
    }

    isElementNode(node) {
        return node.nodeType == 1;
    }

    isTextNode(node) {
        return node.nodeType == 3;
    }
    
}


// 指令处理集合
class CompileUtil {

    constructor(){
        this.updater = new Updater();
    }

    text(node, vm, exp) {
        this.bind(node, vm, exp, 'text');
    }

    html(node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    }

    model(node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        const  val = this._getVMVal(vm, exp);
        node.addEventListener('input', function(e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }

            this._setVMVal(vm, exp, newValue);
            val = newValue;
        });
    }

    class(node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    }

    bind(node, vm, exp, dir) {
        var updaterFn = this.updater[dir + 'Updater'];

        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        new Watch(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    }

    // 事件处理
    eventHandler(node, vm, exp, dir) {
        var eventType = dir.split(':')[1],
            fn = vm.$options.methods && vm.$options.methods[exp];

        if (eventType && fn) {
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    }

    _getVMVal(vm, exp) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function(k) {
            val = val[k];
        });
        return val;
    }

    _setVMVal(vm, exp, value) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function(k, i) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};


class Updater {
    textUpdater(node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    }

    htmlUpdater(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    }

    classUpdater(node, value, oldValue) {
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');

        var space = className && String(value) ? ' ' : '';

        node.className = className + space + value;
    }

    modelUpdater(node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    }
}
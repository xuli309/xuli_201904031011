

//es5 作用域
/*var callbacks=[];
for(var i=0;i<=2;i++){
    callbacks[i] = function(){
        return i*2;
    }
}
console.table([
    callbacks[0](),
    callbacks[1](),
    callbacks[2]()
]);


//es6 作用域
var callbacks2=[];
for(let i=0;i<=2;i++){
    callbacks2[i] = function(){
        return i*2;
    }
}
console.table([
    callbacks2[0](),
    callbacks2[1](),
    callbacks2[2]()
]);*/

//箭头函数
/*{
    //es3，es5
    var evens = [1,2,3,4,5];
    var odds=evens.map(function(v){
        return  v+1;
    });
    console.log(evens,odds);
};

{
     //es6
    let  evens = [1,2,3,4,5];
    let odds= evens.map(v=>v+1);
    console.log(evens,odds);
};

{
     //es3，es5
    var factory = function(){
        this.a='a';
        this.b='b';
        this.c= {
            a:'a+',
            b:function(){
                return this.a;
            }
        }
    }
    console.log(new factory().c.b());
}
 
{
    //es6
    var factory = function(){
        this.a='a';
        this.b='b';
        this.c= {
            a:'a+',
            b:()=>{//定义时的指向
                return this.a;
            }
        }
    }
    console.log(new factory().c.b());
}*/

//默认参数
/*{
    //es3|es5 默认参数写法
    function f(x,y,z){
        if(y===undefined){
            y=7;
        }
        if(z===undefined){
            z=42;
        }
        return x+y+z;
    }
    console.log(f(1,3))
}

{
    //es6 默认参数写法
    function f(x,y=7,z=42){
        return x+y+z;
    }
    console.log(f(1,3));
}

{
    //es6 默认参数写法
    function checkPar(){
        throw new Error("参数不能为空");
    }

    function f(x = checkPar(),y=7,z=42){
        return x+y+z;
    }

    try {
        console.log(f());
    } catch (error) {
        console.log(error);
    }
  
}*/


/*{
    //es3|es5可变参数
    function f(x){
        var a = Array.prototype.slice.call(arguments);
        var sum =0;
        a.forEach(function(item){
            sum+=item*1;
        });
        return sum;
    }
    console.log(f(1,2,3));
}

{
    //es6可变参数
    function f(...a){
        var sum =0;
        a.forEach(item=>{
            sum+=item*1;
        });
        return sum;
    }
    console.log(f(1,2,3));
}

{
    //ES5 合并数组
    var param = [1,2,3,4,5];
    var other = [1,4].concat(param);
    console.log(other);
}

{
    //ES6 合并数组
    var param = [1,2,3,4,5];
    var other = [1,4,...param];
    console.log(other);
}

/**************代理对象***********/
/*{
    //ES3 数据保护
    var Peroson = function(){
        var data = {
            name: 'es3',
            age: 15,
            sex: 'male',
        }

        this.get=function(key){
            return data[key];
        }
        this.set = function(key,value){
            if(key !== 'sex'){
                data[key] = value;
            }
        }
    }
    //声明
    var peroson = new Peroson();
    //读取
    console.table({name:peroson.get('name'),sex:peroson.get('sex'),age:peroson.get('age')})
    //修改
    peroson.set('name','nihao');
    console.table({name:peroson.get('name'),sex:peroson.get('sex'),age:peroson.get('age')})
    peroson.set('sex','female');
    console.table({name:peroson.get('name'),sex:peroson.get('sex'),age:peroson.get('age')})
}


{
    console.log("=============================ES5 数据保护===============================")
    //ES5 数据保护
    var Peroson = {
        name: 'es5',
        age: 15
    };
    Object.defineProperty(Peroson,'sex',{
        writable:false,
        value:"male"
    });
    //读取
    console.table({name:Peroson.name,sex:Peroson.sex,age:Peroson.age})
    //修改
    Peroson.name = 'nihao';
    console.table({name:Peroson.name,sex:Peroson.sex,age:Peroson.age})
    Peroson.sex = 'female';
    console.table({name:Peroson.name,sex:Peroson.sex,age:Peroson.age})
}


{
    console.log("============================ES6 数据保护================================")
    //ES6 数据保护
    let Peroson = {
        name: 'es6',
        age: 15,
        sex: 'male'
    };
    //读取
    let person = new Proxy(Peroson,{
        get(target,key){
            return target[key];
        },
        set(target,key,value){
            if(key!=='sex'){
                target[key] = value;
            }
        }
    })
    console.table({name:person.name,sex:person.sex,age:person.age})
    //修改
    person.name = 'nihao';
    console.table({name:person.name,sex:person.sex,age:person.age})
    person.sex = 'female';
    console.table({name:person.name,sex:person.sex,age:person.age})
}
*/

var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
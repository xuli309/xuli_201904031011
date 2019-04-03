##### npm 安装命令

npm install 模块名

##### 淘宝镜像

- 地址：https://npm.taobao.org/
- 查询命令：npm config get registry
- 设置命令：npm config set registry  https://registry.npm.taobao.org

##### Web开发框架

1. Express:

- 官网：http://www.expressjs.cn

- 安装：npm i -g express express-generator

  - -g 命令非运行时依赖，需要全局安装

- 建项目：express kaikeba --hbs

  - kaikeba 项目名
  - --hbs 模板引擎设置为handlebars

- cd 项目根目录

- 初始化项目(安装依赖包）：npm install

- 启动项目：npm start

- 服务器自动重启：npm i -g node-dev

  ##### 需要看的内容

  - Express路由：http://www.expressjs.com.cn/4x/api.html#router
  - handlebars 模板：https://segmentfault.com/a/1190000000342636

##### 安装日期插件：npm i monent -s

##### 安装handlebars-helpers

npm install --save handlebars-helpers

##### 安装mysql

npm i mysql -S

##### 安装Sequelize

1.概述：基于Promise的ORM(Object Relation Mapping) 对象关系映射，支持多种数据库，事务，关联。

2.安装：npm i sequelize mysql2 -S

3.测试：

##### 安装bootstrap@3

npm i bootstrap@3

vscode安装bootstrap插件

##### 图片上传中间件

安装muler：npm i multer -S

##### 数据校验

1.express-validator：npm  i -S express-validator

2.官网：https://express-validator.github.io/docs/

##### RESTful API

1.GET/POST/PUT/DETELE  

2.编写接口：res.json(obj)

3.接口测试方法

##### 跨域：浏览器同源策略（协议-http/https、主机名、端口）引起的前端接口的调用问题

常见解决方案：

1. JSONP（json With Padding), 前端+后端

   原理：前端动态添加script到当前页面，其src指向接口URL,服务器返回一个函数执行语句，该函数名有callback参数决定

   前端：指定请求方式为jsonp，jquery中（dataType:true)

   后端：res.jsonp的方式返回

   注：接口必须是get方法，传递参数只能通过url的方式

2. PROXY代理，后端方案

   原理：通过同源服务器发送请求至接口服务器，再由同源服务器转发结果给前端，从而规避跨域

   webpack-dev-server 

   proxy

3. CORS(Cross)，后端方案

   原理：CORS是W3C规范，真正意义上解决跨域问题。他需要服务器对请求检查，对响应头做特殊处理，从而解决跨域。

   实现：

   1).对于简单请求，添加：res.set('Access-Control-Allow-Origin','http://localhost:3000');

   简单请求：如果这个请求方法是GET、POST、HEADER，同时对于POST请求，不能有自定义请求头，同时编码方式必须是application/x-www-urlencoded,multipart/form-data,text/plain之一

   2).对于预检测prefilght请求

   a.预检测路由 router.options

   b.响应头添加 res.set('Access-Control-Allow-Headers','Content-Type');

   c.如果请求方法是PUT或者DELETE添加res.set('Access-Control-Allow-Methods','GET,POST,PUT');

   3).对于证书类型Credentials，添加：

   a.后台添加res.set('Access-Control-Allow-Credentials','true');

   4).cors模块：

   安装：npm i cors -S


##### 验证码处理

1. 创建表verify_code

2. 开发验证码接口get/api/code 

3. 安装：npm install moment md5 axios -S

   a.时间格式化 moment

   b.加密md5

   c.网络请求axios


##### Angular7的使用

1. angular/vue/react

   angular：完整的解决方案、超前架构体系、跨平台、模块化、学习曲线陡峭

   vue：轻量级、渐进式、易用性强、文档丰富

   react：单向的数据流、生态系统强大、跨平台

2. 创建angular项目：https://angular.cn

   环境准备工作：angular cli : npm install -g @angular/cli

   创建项目方式：ng new kaikeba-student 或 webstorm new

3. TypeScript：强类型的js，ES6的超集

   -变量、常量 let const

   -类型注解：

   ```
   // 元组
   let x: [string, number];
   x = ['hello', 10];
   ```

   -任意类型 any

   -枚举

   ```
   enum Color {Red = 1, Green = 2, Blue = 3}
   const c: Color = Color.Blue;
   ```

   -函数用法

   1.方法重载

   function f(a: string):string;

   function f(a: number):number;

   function f(a: any):any{

   ​	if(typeof a === 'string'){.....}

   ​	else{......}

   }

   ```
   eat(food: string): boolean;
   eat(food: {name: string, amount: number}): {catEat: boolean, msg: string};
   eat(food: string | {name: string, amount: number}): any {
       if (typeof food === 'string') {// 方法1 实现
         return food === 'bone';
       } else {// 方法2实现
         const canEat = food.name === 'bone' && food.amount < 3;
         let msg = '';
         if (food.name !== 'bone') {
           msg = '狗只吃骨头';
         }
         if (food.amount >= 3) {
           msg = '狗只吃两根骨头';
         }
         return {canEat, msg};
       }
   }
   ```

   函数可选参数不能有默认值

   ```
   function buildName(firstName: string = 'James', last?:string = 'Harden'){
       return first + last
   }
   ```

   -接口

   ```
   interface Person {
     firstName: string;
     lastName: string;
   }
   function greeting2(person: Person) {
     return 'hello ' + person.firstName + ' ' + person.lastName;
   }
   const myname = greeting2({firstName: 'tom', lastName: 'cruise'});
   console.log(myname);
   ```

   -类

   1).基本用法：

   ```
   class Greeter {
     greeting: string; // 属性
     constructor(msg: string) {// 通常用于属性的初始化
       this.greeting = msg;
     }
     greet() { // 方法
       return 'Hello ' + this.greeting;
     }
   }
   const greeter = new Greeter('World');
   console.log(greeter.greet());
   ```

   2).继承

   3).修饰符：public公共、private私有的、protected受保护的

   ​	public：成员默认是public，表示成员可以自由访问

   ​	private：表示成员只能在当前类内部使用

   ​	protected：表示成员能够在当前类和子类中使用

   ​	readonly：只读，当属性只能读取，不能设置

   ​	参数属性：将给构造函数的参数加上修饰符，能同事定义并初始化成员属性

​	静态属性：通过static关键字修饰属性、方法，可以通过类名直接访问

​	存取器：当获取和设置属性时有额外使用存储器（getter,setter)	

```
// 存储器
class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    console.log('管理员修改了雇员名称');
    this._fullName = value;
  }
}
const employee = new Employee();
employee.fullName = 'James Harden';
```

4. 函数

​	。函数参数是必须的

​	。函数的可选参数

​	。函数参数的默认值

5. 泛型 可以使用泛型Generic来创建可用组件，一个组件可以支持多种类型数据

6. 模块：

   1. 导出：具名导出

7. 1. 装饰器 decorator

   @NgModule({})

##### 学生端创建

​	创建组件：ng generate compoment login/ng g c login

​	路由：ng g class 

​	配置: const rootes: Routes = [{path:'/login',component: comName}]

​	路由模块配置：RouterModule.forRoot(rootes)



​	表单验证：模板驱动表单校验

​	第一步：导入FormModule

​	第二步：创建数据模型LoginUser

​	第三步：表单中绑定该模型 [(ngModel)]="model.phone"



​	1)关于输入输出属性，输出属性(click)= “onclick($event)” ，输入属性[title]="myName"

​	双向绑定，既输入又输出[(ngModel)]="model.phone"

​	2)模板引用变量：在当前模板上下文定义一个变量，<input #phone>,若不赋值，表示dom元素；

​	若赋值为ngModel,则可以访问当前元素的校验状态；若赋值为ngForm，则可以访问整个表单的校验状态

​	3)数据校验基于H5表单校验，

​	常用的有required,min,max,minlength,maxlength,pattern,type=email,type=numer,type=url

​	4)校验状态：phone.valide,invalid,touched,untouched,dirty,pristine

​	    errors里面的字段名就是上面的h5校验名字，如：phone,errors.requeired

​	5)条件语句：*ngIf="expr"

​	

##### 发送登录请求

​	1) 配置代理，防止跨域

​	2) 导入HttpClient模块才能使用http请求

​	3)和后台打交道一般写入服务中

​	4)组件中注入服务并调用之

##### 后台创建表和接口

​	安装：npm install express-session -S

​	配置：放在cookie配置下面；app.use(session({...}))

​	使用：赋值：req.session.xx = xx; 获取req.session.xx; 删除delete req.session.xx;

​	将 session 信息存入数据库 安装：npm i -S express-mysql-session

##### angular打包

​	ng build / ng run bulid

验证码接口

​	安装trek-captcha: npm i -S trek-captcha

​	异步校验器：

​		1.创建异步校验指令：ng g d user/register/phone-validator

​		2.服务器中添加该指令需要验证的方法

​		3.添加后台接口

*********快捷键

导入：alt + enter 



##### rxjs(reactive extention js): 通过Observable来编写异步和基于事件的程序

主要概念：ng g m rxjs --routing --spec=0  

> ng g c rxjs --flat -s -t  // 行内模板

- Observable可观察对象
- Observer观察者：回调函数的集合
- Subscription订阅：表示Observable执行，可以用它取消Observable执行
- Operators操作符：操作集合的函数
  - filter
- Subject主题：相当于事件的派发器

创建Observable：

- new Observable(subscriber)
- Observable.create(subscriber)
- 通过primise:
- 通过定时器
- 通过事件
- 通过已存在的值

错误处理

- 方式一：ob.subscribe(next,error)

- 方式二：操作符catchError(error=>of((...))),

  使用了方式二，方式一error回调就不会执行了，数据会进入next流程

##### 文件上传

​	安装：npm i --save ngx-uploader









​	

​	












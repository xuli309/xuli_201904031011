##### react创建项目

1.安装：npm install -g create-react-app

2.创建：create-react-app playlist

3.到对应目录：cd playlist

4.启动：npm start

##### 绑定this的方法注（有状态state组件，就用class方式，无状态state组件，最好用函数方式，性能好）

1.函数方式：为了在回调中使用 `this`，这个绑定是必不可少的

```react
this.handleClick = this.handleClick.bind(this);
handleClick() {
    this.setState(state=>({isToggle:!state.isToggle}))
}
<button onClick={this.handleClick}>
    { this.state.isToggle ? 'ON' : 'OFF' }
</button>
```

2.class方式：此语法确保 `handleClick` 内的 `this` 已被绑定。注意: 这是 *实验性* 语法。[public class fields 语法](https://babeljs.io/docs/plugins/transform-class-properties/)

```react
 handleClick=()=>{
 	this.setState(state=>({isToggle:!state.isToggle}))
 }
 <button onClick={this.handleClick}>
 	{ this.state.isToggle ? 'ON' : 'OFF' }
 </button>
```

3. 箭头函数方式：如果你没有使用 class fields 语法，你可以在回调中使用[箭头函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```react
handleClick() {
   this.setState(state=>({isToggle:!state.isToggle}))
}
// 此语法确保 `handleClick` 内的 `this` 已被绑定。
<button onClick={(e) => this.handleClick(e)}>
    { this.state.isToggle ? 'ON' : 'OFF' }
</button>
```

##### 时间传递参数

```react

```

##### 组件安装

1.安装：npm install antd --save

##### 配置按需加载

安装react-app-rewired取代react-scripts,可以扩展webpack的配置，类似vue.config.js

npm install react-app-rewired@2.0.2-next.0  babel-plugin-import --save

##### PureComponent--15之后出的

原则：1.确保数据类型是值类型；2.如果是引用类型，确保地址不变，同时不应当有深层次数据变化

##### React.memo

ReactV16.6.0之后的版本，可以使用一个新功能React.memo来完美实现React组件，让函数式的组件，也有了PureComponent的功能

##### 组件复合而非组件继承

##### 高阶组件，是重点，是个函数

##### 高阶组件装饰器的写法

这种链式写法逻辑比较绕，ES7中有一个很优秀的语法装饰器，专门用来处理这种问题

1.安装：npm install --save-dev  babel-plugin-transform-decorators-legacy

2.配置：

```react
const { injectBabelPlugin } = require('react-app-rewired')
module.exports = function override(config){
    // antd的按需加载
	config = injectBabelPlugin(
    	['import',{ libraryName:'antd', libraryDirectory:'es',style:'css'}],
        config)
	// 添加装饰器能力
	config = injectBabelPlugin(
        ['@babel/plugin-proposal-decorators',{"legacy":true}],config)
    return config
}
```

##### 数据管理-Redux-中间件的概念

1.安装：npm install redux --save

2.redux中的角色

​	Store：状态载体，访问状态，提交状态更新，监听状态更新

​	Reducer：状态更新具体执行者，纯函数

​	Action：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。

3.redux基本使用：

安装：npm install react-redux --save

安装：npm install redux-thunk redux-logger --save

##### 路由管理-redux-router

1、版本：4.x

2、安装：npm install --save react-router-dom

3、学习网址：https://reacttraining.com/react-router/

4、特点：

​	1.路由也是组件

​	2.分布式配置

​	3.包含式匹配



##### Mobx

学习难度redux > mobx

工作量 redux > mobx

内存开销 redux > mobx

状态管理的集中性 redux > mobx

样板代码的必要性 redux > mobx

结论：使用mbox入门简单，构建应用迅速，但是当项目足够大时，还是使用redux，mobx爱不释手，那还是开启严格模式，再加上一套状态管理的规范

##### 


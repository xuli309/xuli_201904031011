##### react创建项目

1.安装：npm install -g create-react-app

2.创建：create-react-app playlist

3.到对应目录：cd playlist

4.启动：npm start

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


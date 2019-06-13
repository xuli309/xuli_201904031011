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


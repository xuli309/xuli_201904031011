const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize');
//建立连接 sequelize 只能跟关系数据库打交道
const sequelize = new Sequelize('kkb','root','root',{
    host:'localhost',
    port:'3308',
    dialect:'mysql',
    pool:{max:5, acquire:30000, idle:10000},
    define:{
        timestamps:false,//禁止 sequelize 添加 createAt updateAt
        freezeTableName:true
    }
   
});

//定义模型
const User = sequelize.define('users',{//自定义字段
    firseName:{type:Sequelize.STRING(20), allowNull:true },
    lastName:Sequelize.STRING(20),
    age:Sequelize.INTEGER
});
//同步数据  force如果为true则会删除已存在同名的表
User.sync({force:true}).then(()=>{
    //插入若干测试数据
    return User.create({
        firseName:'Tom',
        lastName:'Cruise',
        age:20
    })
}).then(()=>{
    //查询前面插入的数据
    User.findAll().then(users => {
        // console.log(users);
    })
});

//要导出的对象
const db = {Sequelize,sequelize};

//动态导入模型
//读取当前目录中所有文件
fs.readdirSync(__dirname)
    .filter(file => (file !== 'index.js' && file != 'db.js'))
    .forEach(file => { //从文件中导入模型
        const model = sequelize.import(path.join(__dirname,file));
        db[model.name] = model;
    })
module.exports = db;


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口
    entry:{
        // 可以有多个入口，也可以有一个，如果一个，就默认从这一个入口开始分析
        'main':'./src/main.js'   
    },
    output:{//输出
        //指定产出目录
        path: path.resolve('./dist'), // 相对转绝对
        filename: 'build.js'
    },
    //声明模块，包含各种loader
    module:{
        loaders:[ // webpack后面版本交roles
            {test:/\.css$/, loader:'style-loader!css-loader'},
            //如果文件大于limit 则生成一个文件；小于limit 则生成base64到build.js中；建议比较小的生成base64文件
            {test:/\.(jpg|png|gif|svg)$/, loader:'url-loader?limit=9000'},
            {test:/\.less$/, loader:'style-loader!css-loader!less-loader'},
            // 处理es6,7,8
            {
                test:/\.js$/, 
                loader:'babel-loader',
                exclude:/node_modules/, // 不包括node_modules目录
                options:{
                    presets:['env'],//处理关键字
                    plugins:['transform-runtime'],// 处理函数
                }
            },
            //处理vue
            {test: /.vue$/, loader:'vue-loader'}
        ]
    },
    watch:true, // 监视文件发生改动自动产出build.js
    plugins:[
        // 插件的执行顺序跟元素的索引有关
        new HtmlWebpackPlugin({
            template:'./src/index.html',//参照物
        })
    ]

}
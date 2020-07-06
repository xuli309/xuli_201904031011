let proxyObj = {};
proxyObj['/'] =  {
    // 目标 API 地址
    target: 'http://localhost:8080/',
    // 如果要代理 websockets
    ws: false,
    // 将主机标头的原点更改为目标URL
    changeOrigin: true,
    pathRewrite:{
        '^/':''
    }
    
}

module.exports = {
    devServer: {
        host:"localhost",
        port:8082,
        proxy:proxyObj
    },
    chainWebpack: config => {
        // 一个规则里的 基础Loader
        // svg是个基础loader
        const svgRule = config.module.rule('svg')

        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()

        // 添加要替换的 loader
        svgRule
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
    },
//     configureWebpack:{
//         devServer:{
//             before(app){
//                 app.get('/admin/login',function(req,res){
                        
//                 })
//             }

//         }
       
//    }

    
}
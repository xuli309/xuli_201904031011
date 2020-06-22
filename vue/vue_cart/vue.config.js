
// node代码
module.exports = {
    publicPath:'/',
    configureWebpack: {
    
        devServer:{
            open: process.platform === 'darwin',
            host: 'localhost',
            port: 8080,
            https: false,
            hotOnly: false,
            before(app){
                // express 的实例
                app.get('/goods',(req,res)=>{
                    res.json(
                        [ 
                            {id:1, title:'Vue2.x实战', price:'100', img:'/img/01.jpg', count:100},
                            {id:2, title:'React16.x实战', price:'120', img:'/img/03.jpg', count:100},
                            {id:3, title:'nodejs实战', price:'80', img:'/img/02.jpg', count:100 }
                        ]
                    )
                }),
                app.get('/api/login',(req,res)=>{
                    const {username,password} = req.query;
                    if(username=='admin' && password == '111111'){
                        res.json({
                            code:1,
                            token: username +"zhenbucuo_" + (new Date().getTime() + 1000 * 60 * 30)
                        })
                    }else{
                        res.status(401).json({
                            code:0,
                            message:'登录失败！！！'
                        })
                    }
                })
            }
        }
    },
}
module.exports = {
    configureWebpack:{
        devServer:{
            before(app){
                app.get('/admin/login', (req,res)=>{

                    const {username,password} = req.query;
                    console.log(username,password);
                    
                    if(username == 'admin' && password == '111111'){
                        res.json({
                            code:0,
                            token:username+"zbc_"+(new Date().getTime())
                        })
                    }else{
                        res.json({
                            code:1,
                            message:'用户名或密码错误，请重新输入！'
                        })
                    }
                })

                app.post('/admin/loginOut',(req,res)=>{
                    const {username} = req.query ;
                    if(username != ""){
                        res.json({
                            code:0,
                            status:401
                        })
                    }else{
                        res.json({
                            code:1,
                            message:'登出失败！'
                        })
                    }
                })
            }
            
        }
    }
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack:{
    devServer:{
        before(app){
          const API_KEY = 'adminzhenbucuo'
          app.get('/api/authapi',function(req,res){
            const {token} = req.headers;
            if(!token){
              return res.json({code:-1})
            }

            const [key,expires] = token.split('-');
            const now = new Date().getTime();
            console.log(key,expires,now);
            

            if(key == API_KEY && expires > now){
              return res.json({
                code:0,
                data:'经过校验'
              })
            }else{
              return res.json({
                code:-1,
                message:'登录授权过期'
              })
            }

          });

          app.get("/api/checkName",function(req,res){
            const {username} = req.query;
            // 实际的逻辑肯定是要去数据库查
            if(username == 'user'){
              res.json({code:1,})
            }else{
              res.json({code:0})
            }
          })

          app.get('/api/goods',function (req,res) {
                res.json({
                    list:[
                        {name:"架构师",price:100},
                        {name:"Java",price:70},
                        {name:"Web全栈",price:90},
                        {name:"Python",price:80}      
                    ]
                })
          });
          app.get('/api/login',function(req,res){
                const {username,password} = req.query;
                if(username == 'admin' && password == '111111'){
                  res.json({
                    code:0,
                    token:'adminzhenbucuo-'+ (new Date().getTime() + 1000 * 60 * 30)
                  })
                }else{
                  res.json({
                    code:1,
                    message:'用户名或密码错误，登录失败！'
                  })
                }
          }),
          app.get('/api/logout',function (req,res) {
            res.json({
              code:-1
            })
          })
        }
    }
}
}

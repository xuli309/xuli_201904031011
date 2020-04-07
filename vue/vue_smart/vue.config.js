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
          app.get('/api/goods',function (req,res) {
                res.json({
                    list:[
                        {name:"架构师",price:100},
                        {name:"Java",price:70},
                        {name:"Web全栈",price:90},
                        {name:"Python",price:80}      
                    ]
                })
          }),
          app.get('/api/login',function(req,res){
                const {username,password} = req.query;
                if(username == 'admin' && password == '111111'){
                  res.json({
                    code:0,
                    token:'adminzhenbucuo-'+ (new Date().getTime() + 1000 * 60) + '-' + username
                  })
                }else{
                  res.json({
                    code:1,
                    message:'用户名或密码错误，登录失败！'
                  })
                }
          }),
          app.get('/api/loginout',function (req,res) {
            res.json({
              code:-1
            })
          })
        }
    }
}
}

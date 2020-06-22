module.exports = {
  pages: {
    index: {
      // 页面入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '模板测试',
      // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk
      // chunks: [ 'chunk-vendors', 'chunk-common', 'index']
    },
  },
  configureWebpack:{
    devServer:{
      before(app){
        app.get('/api/leftMenu',(req,res)=>{
          return res.json({
            code:0,
            menu:[
              {
                "id":1, "pid":0, "k_id":"md-cog","type":1, "url":"","title":"系统管理","url_otype":"",
                "list":[
                  {"id":2, "pid":1, "k_id":"","type":1, "url":"","title":"权限管理","url_otype":"",
                  "list":[
                      {"id":5, "pid":2, "k_id":"","type":1, "url":"/system/privilege","title":"菜单管理","url_otype":"" },
                      {"id":4, "pid":2, "k_id":"","type":1, "url":"/system/role","title":"角色管理","url_otype":"" },
                      {"id":3, "pid":2, "k_id":"","type":1, "url":"/system/admin","title":"操作员管理","url_otype":"" },
                    ]
                  },
                  {"id":9, "pid":1, "k_id":"","type":1, "url":"","title":"日志管理","url_otype":"",
                    "list":[
                        {"id":10, "pid":9, "k_id":"","type":1, "url":"/syslog/login","title":"登录日志","url_otype":"" },
                        {"id":11, "pid":9, "k_id":"","type":1, "url":"/syslog/op","title":"操作日志","url_otype":"" },
                    ]
                  },
                ]
              },
              {"id":2018010740, "pid":0, "k_id":"md-cog","type":1, "url":"","title":"责任彩票","url_otype":"",
                "list":[
                  {"id":2018010741, "pid":2018010740, "k_id":"","type":1, "url":"/lottery/list","title":"中心设置限额","url_otype":"" },
                  {"id":2018010742, "pid":2018010740, "k_id":"","type":1, "url":"/lottery/userReport","title":"问题彩民预警","url_otype":"" },
                  {"id":2018010743, "pid":2018010740, "k_id":"","type":1, "url":"/lottery/userStat","title":"问题彩民统计","url_otype":"" },
                ]
              },
              
            ]
          })
        })
      }
    }
  }
}
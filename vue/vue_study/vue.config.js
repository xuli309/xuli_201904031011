// mock 数据
module.exports={
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
                })
            }
        }
    }
}
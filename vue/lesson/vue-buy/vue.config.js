module.exports = {
    configureWebpack:{
        devServer:{
            before(app){
                app.get('/api/goods',function(req,res){
                    res.json({
                        list: [
                            {text:'架构师', price:100},
                            {text:'web', price:80},
                            {text:'java', price:50},
                            {text:'python', price:90},
                        ]
                    })
                })
            }
        }
    }
}
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
                }).post('/add',function(req,res){

                    res.json({
                        list: [
                            {text:'架构师', price:100},
                        ]
                    })
                }).get('/add',function(req,res){
                    // res.set('set-cookie','name=abc');
                    // res.setHeader('set-cookie','name=abc');
                    res.cookie('myCookie','abc');

                    res.json({
                        list: [
                            {text:'架构师', price:100},
                            {text:'python', price:90},
                        ]
                    })
                })
            }
        }
    }
}
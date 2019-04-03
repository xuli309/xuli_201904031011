var express = require('express');
var router = express.Router();

const users = [
  {name:'tom',age:20}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  //0.设置状态码200
  //1.设置响应头Content-Type:application/json
  //2.返回序列化数据JSON.stringify(obj);
  res.json(users);//等效于res.send(users)
  // res.send('respond with a resource');
    // res.render('user');
});

//新增
router.post('/',function(req,res){
  //传参方式三：req.body
  console.log(req.body);
 // res.send("服务器接收到您传递的数据了");
//讲传递过来的参数传递users
    try{
        users.push(req.body);
        console.log(users)
        res.json({sueecss:true,users});
    }catch(error){
        res.json({success:false,users});
    }
});

//更新
router.put('/',(req,res)=>{
    try{
        const index = users.findIndex(u => u.name == req.body.name);
        if(index != -1) {
            users[index] = req.body;
            console.log(users);
            res.json({sueecss: true, users});
        }else{
            res.json({success:false});
        }
    }catch(error){
        res.json({success:false});
    }
});

//删除
router.delete('/:name',(req,res)=>{
    try{
        const index = users.findIndex(u => u.name == req.params.name);
        if(index != -1){
            users.splice(index,1);
            console.log(users);
            res.json({sueecss:true,users});
        }else{
            res.json({success:false});
        }
    }catch(error){
        res.json({success:false});
    }
});

//jsonp
router.get('/jsonp',(req,res)=>{
    console.log(req.query);
    res.jsonp(users);
    //底层实现原理,callback回调的函数名称
    // res.send(`${req.query.callback}(${JSON.stringify(users)})`);

});

router.get('/cors',(req,res)=>{
    //添加响应头Access-Control-Allow-Origin
    res.set('Access-Control-Allow-Origin','http://localhost:3000');
    res.json(users);
});

//预检测
router.options('/cors',(req,res)=>{
    console.log('预检测=========');
    res.set('Access-Control-Allow-Origin','http://localhost:3000');
    res.set('Access-Control-Allow-Headers','Content-Type,AuthToken');
    res.set('Access-Control-Allow-Methods','GET,POST,PUT');
    res.set('Access-Control-Allow-Credentials','true');
    res.sendStatus(204);//200-400都是成功
});
router.post('/cors',(req,res)=>{
    users.push(req.body);
    //添加响应头Access-Control-Allow-Orgin
    res.set('Access-Control-Allow-Origin','http://localhost:3000');
    res.json(users);
});

//更新
router.put('/cors',(req,res)=>{
        res.set('Access-Control-Allow-Origin','http://localhost:3000');
        res.set('Access-Control-Allow-Credentials','true');

        const index = users.findIndex(u => u.name == req.body.name);
        if(index != -1) {
            users[index] = req.body;
        }
        res.json({sueecss: true, users});
});




module.exports = router;

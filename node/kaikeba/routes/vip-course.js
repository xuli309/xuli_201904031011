var createError = require('http-errors');//创建错误对象

const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    // res.render('vip-course/index');
    res.redirect('/vip-course/web');
})

router.get('/:course',(req,res,next)=>{
    //传参方式2
    // res.locals.foo='bar';
    // res.render('vip-course',{layout:'layout2', foo: 'vip课程' });//传参方式1

    //获取参数方式一：获取url参数 req.params 
    const course = req.params.course
    console.log(course);
    //获取参数方式二：查询参 req.query   ?a=b
    console.log(req.query.a);
    //获取参数方式三：请求体body req.body

    //错误处理：
    const title= getTitle(res,course);
    const type = 'aaa';
    if(title){
        res.render('vip-course/'+course,{
            title,
            htmlStr: '<h1>htmlString</h1>',
            bool:true,
            undition:'abc',
            arr:[{name:'tom',city:{cname:'北京'},hobby:['篮球','编程']},{name:'jarry',city:{cname:'北京'},hobby:['篮球','编程']}],
            obj:{foo:"bar"},
            typeSwitch:{
                isAAA:type=='aaa',
                isBBB:type=='bbb',
                isCCC:type=='ccc'
            },
            birthday:new Date(),
            a:true,
            b:false
        });
    }else{
        //没有匹配的vip课程 

        //错误处理1:404页面
        //如果进入错误流程，传递Error对象实例
        // next(new Error('没有您要的课程'));//状态码为500页面        
        // next(createError(404,'没有您要的课程'));//状态码为404  

        //错误处理方式2
        res.redirect('/vip-course/web');
        
    }

   
   
})

function getTitle(res,course){
    for (const c of res.locals.courses) {
        if(c.url.indexOf(course) != -1){
            return c.name;
        }
    }
    return '';
}

module.exports = router;
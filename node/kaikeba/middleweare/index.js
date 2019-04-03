const {query} = require('../models/db');
let coursesCache = null;


exports.initLocals = async function(req, res, next){
    const isLogin = true;

    //确定动态导航栏的名字
    res.locals.navName = isLogin?'nav':'nav-unauth';
    // res.locals.courses = [];
    if(coursesCache){
        res.locals.courses = coursesCache;
        next();//进入后续执行
    }else{
        const sql = 'select * from vip_course';

        try {
            courses = await query(sql);//query 必须返回promise 才能 await
            //cooperation 处理
            courses.forEach(course => course.cooperation = course.cooperation.split(','));
            coursesCache = res.locals.courses = courses;
            next();//进入后续执行                 
        } catch (error) {
            next(error);
        }
           
    }
    
   

    // res.locals.courses = [
    //     {
    //         url:"/vip-course/web",
    //         icon:"https://img.kaikeba.com/web_menu.jpg",
    //         name:"web全栈",
    //         desc:"授课深度对标百度。。。。。。。。。。。。。",
    //         cooperation:[
    //             "https://img.kaikeba.com/baidu.png",
    //             "https://img.kaikeba.com/toutiao.png"
    //         ],
    //         poster:'https://img.kaikebao.com/web_vip.png'
    //     },
    //     {
    //         url:"/vip-course/python",
    //         icon:"https://img.kaikeba.com/web_menu.jpg",
    //         name:"python爬虫",
    //         desc:"授课深度对标百度。。。。。。。。。。。。。",
    //         cooperation:[
    //             "https://img.kaikeba.com/baidu.png",
    //             "https://img.kaikeba.com/toutiao.png"
    //         ],
    //         poster:'https://img.kaikebao.com/web_vip.png'
    //     }
    // ];
    // next();//进入后续执行
}
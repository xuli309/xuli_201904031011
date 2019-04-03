const express = require('express');
const router = express.Router();

const {query, getConnection,beginTransaction, query2, rollback, commit} =  require('../models/db');


router.get('/', (req,res,next)=>{
    res.redirect('/admin/open-courses');//完整地址
});

//更新页面
router.get('/open-courses-update/:id', async (req,res,next)=>{
    try {
        const courses = await query('select * from open_course where id=?', req.params.id);
        if(courses.length>0){
            const course = courses[0];
            course.time = course.time.toISOString().substr(0,16);
            res.render('admin/open-courses-update',{
                layout:'layout-admin',
                nav:'open-courses',
                course
            })
        }else{
            res.render('admin/result',{
                layout:'layout-admin',
                message:'查询公开课失败'
            })   
        }
    
    } catch (error) {
        res.render('admin/result', {
            layout: 'layout-admin', // 设置布局页
            message: '查询公开课失败',
        })
    }
});

router.get('/open-courses', async (req,res,next)=>{
    try {
        const courses = await query('select * from open_course');
        res.render('admin/open-courses',{
            layout:'layout-admin',
            nav:'open-courses',
            courses
        })

    } catch (error) {
        res.render('admin/result', {
            layout: 'layout-admin', // 设置布局页
            message: '查询公开课失败',
        })
    }
});



const multer = require('multer');
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/images');
    },
    filename:function(req,file,cb){
        let extname = '';
        switch (file.mimetype) {
            case 'image/png':extname = '.png';break;
            case 'image/jpeg':extname = '.jpg';break;
            case 'image/gif':extname = '.gif';break;
            default:
                break;
        }
        cb(null,Date.now() + extname);
    }
})
const upload = multer({
    storage,
    // dest:'public/images',
    limits:{fileSize:2*1024*1024}, //最大2M
    fileFilter:function(req,file,cb){
        //判断文件是否合法，合法则处理，不合法则拒绝
        if(file.mimetype === 'image/gif'
         || file.mimetype === 'image/jpeg'
         || file.mimetype === 'image/png'){
            //接收文件
            cb(null,true);
        }else{
            cb(new Error('请上传图片格式'),false);
        }
    }
})

const {body,validationResult} = require('express-validator/check');
const validations = [
    body('name').not().isEmpty().withMessage('名称必填'),
    body('description').not().isEmpty().withMessage('内容必填'),
    body('time').not().isEmpty().withMessage('时间必选')
                .isAfter(new Date().toString()).withMessage('截止日期必须晚于当前时间'),
]
//处理公开课的新增接口
const mysql = require('mysql');
router.post('/open-courses', [upload.single('file'),...validations], //同时执行多个中间件，用数组形式
    async (req,res,next)=>{

    //1.获取保存的文件名
    if(req.file){
        req.body.poster = req.file.filename;
    }

    let message = '服务器异常';
    let errs = [];

    //0.数据校验结果判断
    const errors = validationResult(req).formatWith(({msg}) => msg);
    // const errors = validationResult(req).formatWith((error) => error.msg);//等价于上面的写法
    console.log(0,errors);

    if(errors.isEmpty()){//验证成功
        let sql, oper;
        try {
            console.log(req.body.id)
            //根据数据中判断是否存在id字段判断更新还是新增
            if(req.body.id){//更新
                const id = req.body.id;
                delete req.body.id;
                sql = mysql.format('update open_course set ? where id=?',[req.body,id]);//format 避免sql攻击
                oper = '更新';
            }else{//新增
                sql = mysql.format(`insert into open_course set ?`,req.body);
                oper = '新增';
            }
            //2.保存到数据库
            const result = await query(sql);
            console.log(1,result);
            message = result.affectedRows > 0 ? `${oper}成功` : `${oper}失败`;

        } catch (error) {
            console.log(2,error);
        }

    }else{//验证失败
        message = '新增失败';
        console.log(3,errors.array());
        errs = errors.array();
    }

    res.render('admin/result',{
        layout:'layout-admin',
        message,
        errs
    })   
});




router.get('/vip-courses', (req,res,next)=>{
    res.render('admin/vip-courses',{
        layout:'layout-admin',
        nav:'vip-courses'
    })
});


router.get('/stage', async (req, res, next) => {
    const clazzes = await query('select * from clazz');
    res.render('admin/stage', {layout: 'layout-admin', clazzes, nav: 'stage'})
});


router.post('/stage', async (req, res, next) => {
    try {
        //1.获取连接
        const conn = await getConnection();

        //2.开启事务
        beginTransaction(conn)

        //3.开启操作
        // 3.1 插入学习阶段
        const result = await query2(conn, 'INSERT INTO stage SET ?', req.body);
        if (result.affectedRows > 0) {
            // 根据班级id获取该班所有学员id
            const stageId = result.insertId;
            const ids = await query2(conn, 'SELECT user_id FROM user_clazz WHERE clazz_id=?', req.body.clazz_id);
            console.log(stageId, ids);
            // 3.2为每位学员添加学习状态
            for (let o of ids) {
                await query2(conn, 'INSERT INTO status SET ?', {user_id: o.user_id, stage_id: stageId})
            }

            //4.提交事务
            await commit(conn);
            res.render('admin/result', {layout: 'layout-admin', message: '插入成功'})
        } else {
            res.render('admin/result', {layout: 'layout-admin', message: '插入阶段失败'})
        }
    } catch (error) {
        console.log(error);
        rollback(conn);
        res.render('admin/result', {layout: 'layout-admin', message: '服务器内部错误'})
    }
});


module.exports = router;
var express = require('express');
var router = express.Router();
const {query} = require('../../models/db');

const md5 = require('md5');
const salt = 'take a little salt';

router.post('/auto-login',async (req,res)=>{
    const  id = req.signedCookies.uid; // 加密方式获取
    // const  id = req.cookie.uid; // 非加密方式获取
    if(id){
        //自动登录逻辑, 根据id查询用户信息

    }else{
        //无自动登录
    }
});

router.post('/login',async (req,res)=>{
    const {phone, password, autoLogin} = req.body;

    console.log("==================session======================");
    console.log(req.session.user);

    try {
        const sql = 'select * from user where phone=? and password = ?';
        const results = await query(sql,[phone, md5(password + salt)]);
        if(results.length > 0){
            const user = results[0];
            delete user.password;
            //登录成功需要在会话中保存登录状态
            if (autoLogin) {
                //cookie 和 session 二选一
                // res.cookie('uid', user.id, {
                //     signed: true,// 签名
                //     maxAge: 7 * 24 * 36000 *1000, // 有效期
                //     httpOnly: true,
                // })
                req.session.cookie.maxAge = 7 * 24 * 36000 *1000;
            }
            req.session.user = user; // session
            res.json({success: true, data: user});
        }else {
            res.json({success: false, message: '电话或密码错误'});
        }

    }catch (e) {
        res.json({success: false, message: '服务器错误，请稍后重试！'});
    }
});

router.post('/verify-phone', async (req,res)=>{
    try {
        const sql = 'select * from user where phone = ?';
        const results = await query(sql, req.body.phone);
        if(results.length > 0){
            res.json({success: false, message: '电话号码已经存在'});
        }else{
            res.json({success: true});
        }
    }catch (e) {
        res.json({success: false, message: '服务器错误，请稍后重试！'});
    }
});

router.post('/verify-code-img', async (req,res)=>{
    const  success = req.session.codeImg == req.body.code;
    res.json({success: success});

});

// 图形验证码生成
const captcha = require('trek-captcha');
router.get('/code-img', async (req,res)=>{
    try {
        //token 数字字母表现形式， buffer 图片数据
        const {token, buffer} = await captcha({size: 4});
        console.log(token)
        // session中存储验证码
        req.session.codeImg = token;
        //将图片数据返回前端
        res.json({
            success: true,
            data: buffer.toString('base64')
        })
    }catch (e) {
        res.json({success: false, message: '服务器错误，请稍后重试！'});
    }
});


// 注册
router.post('/register', async (req, res) => {
    const sql = 'insert into user set ?';
    try {
        // 密码
        req.body.password = md5(req.body.password + salt);
        // 随机的用户名
        req.body.username = '学员' + Date.now();
        const result = await query(sql, req.body);
        if(result.affectedRows > 0) { // 注册成功
            req.body.id = result.insertId;
            delete req.body.password;
            req.session.user = req.body; // 保存登录状态
            res.json({success: true, data: req.body})
        }else{
            res.json({success: false, message: '注册失败'})
        }
    } catch (e) {
        res.json({success: false, message: '服务器错误，请稍后重试！'});
    }
});

// 验证用户是否登录
router.post('/is-login', (req, res) => {
    if(req.session.user){
        res.json({success: true, data: req.session.user});
    }else{
        res.json({success: false, message: '用户未登录'});
    }
});

router.post('/logout', (req, res) => {
    // req.session.user = null;
    // delete req.session.user;
    req.session.destroy((err) => {
        if(err)
            res.json({success: false, message: '注销失败'});
        else
            res.json({success: true});
    });
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
    limits:{fileSize:1*1024*1024}, //最大2M
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

router.post('/uploadAvatar', upload.single('file'),
        async (req, res) => {
            if (!req.file) {
               res.sendStatus(500);
            }else{
                try {
                    // 更新session
                    req.session.user.avatar = req.file.filename;

                    // 更新user
                    const result = await query('update user set avatar=? where id=?', [req.file.filename, req.session.user.id]);
                    if(result.affectedRows > 0) {
                        res.json({success: true, data: req.file.filename});
                    }else{
                        res.json({success: false, message: '上传失败'})
                    }

                } catch (e) {
                    res.json({success: false, message: '服务器错误，请稍后重试！'});
                }
            }
        }
    );

// 查询用户的所有课程
router.get('/my-courses',async (req, res) => {
    const sql = 'select c.id, c.name, c.phase, vc.poster from user_clazz uc ' +
        ' left join clazz c on uc.clazz_id = c.id ' +
        ' left join vip_course vc on c.course_id = vc.id' +
        ' where user_id = ?';
    // console.log(sql, req.session.user.id)
    const  data = await query(sql, req.session.user.id);
    res.json({success: true, data: data});

});

// 概况
router.get('/pandect/:classId',async (req, res) => {
    console.log('2222222222')
    const sql = 'select * from pandect where user_id=? and clazz_id=?';
    console.log(sql, req.session.user.id, req.params.classId)
    const  data = await query(sql, [req.session.user.id, req.params.classId]);
    console.log(data)
    res.json({success: true, data: data});

});

module.exports = router;
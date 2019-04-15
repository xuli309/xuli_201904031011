const express = require('express');
const  router = express.Router();

const moment = require('moment');//生成时间戳使用
const md5 = require('md5');
const axios = require('axios');//发送请求用
const qs = require('querystring');//参数编码
const {query} = require('../../models/db');

router.get('/:phone',async (req,res,next)=>{
    //1.生成6位随机数字验证码
    const  code = ran() + ran() + ran() + ran() + ran() + ran();
    console.log('=================',code);

    //2.调用接口，提前构造参数
    const url = 'http://www.baidu.com';
    const to = req.params.phone;//发送目标的手机号
    const accountSid = "123456";//接口的sid
    const authToken = "456789";//认证令牌
    const templateid = "52368910";//模板id
    const param = `${code},1`;//短信参数
    const now = moment();//生成时间戳
    const timestamp = now.format('YYYYMMDDHHmmss');
    const sig = md5(accountSid + authToken + timestamp );


    //3.发送请求
    try{
        // const resp = await axios.post(url,qs.stringify({to,accountSid,templateid,param,timestamp,sig}),{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
        // console.log(resp.data);
        //
        // //4.验证发送结果
        // if(resp.data.respCode == '00000'){
            //短信发送成功
            //5.存储验证码和有效期
            const expires = moment().add(1,'minutes').toDate();
            const result = await  query(
                'insert into verify_code set ?',
                {phone:to,code,expires}
                );
            if(result.affectedRows > 0 ){//插入成功
                res.json({success:true,code});//开发阶段使用
            }else{
                res.json({success:false,message:'发送验证码失败'});
            }
        // }else{
        //     res.json({success:false,message:'发送验证码失败'});
        // }

    }catch (e) {
        // console.log(e);
        res.json({success:false,message:'发送验证码失败'});
    }

});
function ran(){
    return Math.floor(Math.random()*10).toString();
}

router.post('/',async (req,res)=>{
    try{
        const sql = 'select * from verify_code where phone = ? and code = ?  order by expires desc';
        const {phone,code} = req.body;
        const  results = await query (sql,[phone,code]);
        console.log(results)

        if(results.length>0){
            //存在匹配项，是否过期
            const {expires}  = results[0];
            if(expires - new Date() > 0){//有效
                res.json({success:true});
            }else{
                res.json({success:false,message:'验证码已失效'});
            }
        }else{
            res.json({success:false,message:'手机号或验证码输入有误'});
        }
    }catch (e) {
        res.json({success:false,message:'请稍后重试'});
    }
});

module.exports = router;
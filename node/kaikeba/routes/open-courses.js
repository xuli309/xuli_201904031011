const express = require('express');
const router = express.Router();

const{query} = require('../models/db');
const{OpenCourse} = require('../models');

router.get('/', async (req,res,next)=>{

     //查询公开课数据
    try {
        const page = +req.query.page || 1;//获取当前页码，若没有默认为1 +转换为数字
        const size = +req.query.size || 5;//每页条数
        const offset = (page -1) * size;//计算偏移量

        const sql = 'select * from open_course order by time desc limit ?,?';
        const results = await query(sql,[offset,size]);
        for (const result of results) {
            const now = new Date();//.getTime();
            const endTime = new Date(result.time);//.getTime();//console.log(result.time,now,endTime,now - endTime)
            if(now - endTime > 0){
                result.notBegin = false;    
            }else{
                result.notBegin = true;
            }
        }

        //获取分页数据
        //1.获取数据的总条数
        const count = await query('select count(*) as count from open_course').then(results=>results[0].count);
        console.log('总条数==',count);

        //输出菜单
        res.render('open-courses', {
            title: '公开课',
            openCourses:results,
            pagination:getPagination(count,page,size)
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
   
  
});

router.get('/bySeq',async(req,res,next) => {
    try {
        const page = +req.query.page || 1;//获取当前页码，若没有默认为1 +转换为数字
        const size = +req.query.size || 1;//每页条数

        //返回带总条数的对象 {rows:[],count}
        const results = await OpenCourse.findAndCountAll({
            offset:(page -1) * size,
            limit:size,//查询的总条数
            order:[['time','DESC']]//排序是二维数组
        });
         //输出菜单
         res.render('open-courses', {
            title: '公开课',
            openCourses:results.rows,//数据
            pagination:getPagination(results.count,page,size)
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
})

function getPagination(count,page,size){
    const total = Math.ceil(count / size);//总页数
    const first = page != 1;//是否首页
    const last = page != total;//是否最后一页
    const prev = page > 1;//是否有上一页
    const next = page < total;//是否有下一页

    return {page,total,first,last,prev,next};
}

module.exports = router;
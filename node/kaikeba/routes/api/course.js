var express = require('express');
var router = express.Router();
const {query} = require('../../models/db');

const md5 = require('md5');
const salt = 'take a little salt';

router.get('/search',async (req,res)=>{

    try {
        const sql = `select * from vip_course where name like ? `;
        const results = await query(sql, '%' + req.query.keyword + '%');
        res.json({success:true,data:results});
    }catch (e) {
        res.json({success: false, message: '服务器错误，请稍后重试！'});
    }

});

module.exports = router;
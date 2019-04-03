


//连接数据库
const mysql = require('mysql');
const cfg = {
    host:'localhost',
    port:'3308',
    user:'root',
    password:'root',
    database:'kkb'  
};

// 创建连接
// const conn = mysql.createConnection(cfg);
// conn.connect((err)=>{//此步骤可以省略 query时隐式连接
//     if(err) throw new Error('连接数据库失败了！');
//     console.log('连接数据库成功了')
// });

//连接池
const pool = mysql.createPool(cfg);


module.exports = {
    query:function(sql,value){
        return new Promise((resolve,reject)=>{
            //resolve异步操作成功时执行   reject异步操作失败时执行

            // pool.getConnection((err,conn)=>{
            //     conn.query(sql,value,(err,results)=>{
            //         if(err) reject(err);
            //         else resolve(results);
            //     });
            //     conn.release();
            //     // conn.end();
            // });
            pool.query(sql,value,(err,results)=>{
                if(err) reject(err);
                else resolve(results);
            });
           
        });
    },
    pool,
    query2: function (conn, sql, value) {
        return new Promise((resolve, reject) => {
            conn.query(sql, value, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            })
        });
    },
    getConnection: function () {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, conn) => {
                if (err) reject(err);
                else resolve(conn);
            })
        })
    },
    beginTransaction: function (conn) {
        return new Promise((resolve, reject) => {
            conn.beginTransaction(err => {
                if (err) reject(err);
                else resolve();
            });
        })
    },
    rollback: function (conn) {
        return new Promise((resolve, reject) => {
            conn.rollback(resolve);
            conn.end();
        });
    },
    commit: function (conn) {
        return new Promise((resolve, reject) => {
            conn.commit(err => {
                if (err) reject(err);
                else resolve();
            });
            conn.end();
        });
    }
};

// const p  = new Promise();
// p.then((results)=>{ //成功
//    const p2 = new Promise();
//    return p2;
// },(err)=>{ //失败

// }).then((results)=>{ //p2 的成功
// },(err)=>{ //失败

// })



const path =require('path');
const Koa = require('koa');
const fs = require('fs');

let app = new Koa();

const Router = require('koa-router');
const router = new Router();


router.post('/upload', async(ctx, next) => {
    ctx.body = 'ok';
}).get('/',async ctx =>{
    ctx.body = 'yes';
}).post('/add', async ctx => {
    ctx.req.on('data', (data)=>{
        console.log(data.toString());
    });
    ctx.body = 'post ok';
})


app.use(async (ctx, next) => {
    ctx.response.get('Access-Control-Allow-Origin','*');
    ctx.response.get('Access-Control-Allow-methods','PUT,POST,GET,DELETE,OPTIONS')
    await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888, ()=>{
    console.log('服务器启动在8888端口')
})
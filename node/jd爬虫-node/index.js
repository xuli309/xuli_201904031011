const {id,startIndex,url2,url3,basicPath,pageSize}=require('./config');

const fs = require('fs'),
    cheerio = require("cheerio"), //进入cheerio模块
    model = require("./model"),
    publicPath = "https://cd.jd.com/",
    urlList = [],
    url1='localImgs';




function writeJson(params,index) {
    //现将json文件读出来
   return new Promise((resolve, reject)=>{
       fs.readFile('./data.json', function (err, data) {
           if (err) {
               reject('err');
               return;
           }
           let person = data.toString();//将二进制的数据转换为字符串
           let person1 = JSON.parse(person);//将字符串转换为json对象
           if(index===0){
               person1.data=[];
               person1.data.push(params);
           }else{
               person1.data.push(params);
           }
           //将传来的对象push进数组对象中
           let str = JSON.stringify(person1);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
           fs.writeFile('./data.json', str, function (err) {
               if (err) {
                   reject('err');
                   return;
               }
              resolve('success')
               console.log('----------新增成功-------------');
           })
       })
    }).catch((err)=>{
        return err;
   })

}


const main = async url => {
    model.createMkdir(url3);
    const data = await model.getPage(url);//获取页面内容
    const $ = cheerio.load(data.res); //获取jq dom
    $('.jPic a').each((i, e) => {  //遍历京东item 获取所有路径的list
        urlList.push('http:' + $(e).attr('href'))
    });
    for(let a=startIndex,index=0;a<startIndex+(urlList.length-startIndex%pageSize);a++,index++){
        const data = await model.getPage(urlList[a%pageSize]);
        if(data==='err'){
            a=a-1;
            index=index-1;
            continue;
        }
        let $=cheerio.load(data.res);
        const content=data.res.match(/(description\/channel.+)'/)[1];
        const skuName=$('.sku-name').text();
        const data1 = await model.getPage(publicPath+content);
        if(data1==='err'){
            a=a-1;
            index=index-1;
            continue;
        }
        let list = model.getUrls(data1);
        console.log(skuName)

       const resString= await new Promise((resolve,reject)=>{
            const promiseArr=[];
            for(let i=0;i<list.length;i++){
                    promiseArr.push(model.downloadImage(list[i],{i,a}, {name:url3,text:url2})) ;
            }
            Promise.all(promiseArr).then(()=>{
                console.log('promiseArr then')
                resolve('success')
            }).catch(()=>{
                reject('err')
                console.log('promiseArr catch')
            });
        }).catch((err)=>{
            return err
       });
        console.log('----',resString)
        if(resString==='err'){
            a=a-1;
            index=index-1;
            continue;
        }


       const err= await writeJson({
            id:id+a+1,
            type:4,
            mainImg:`${url1}/${url2}/${url3}/${url2}${a+1}.jpg`,
            name:skuName&&skuName.replace(/^[\n\s]*|[\n\s]*$/,''),
            detailLength:list.length
        },a);
        if(err==='err'){
             a=a-1;
             index=index-1;

             continue;
        }
        console.log(`第${a+1}组图片下载完成`)

    }
   return ;
};

main(basicPath);

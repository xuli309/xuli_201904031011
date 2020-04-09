const rp = require("request-promise"), //进入request-promise模块
    fs = require("fs"), //进入fs模块
    cheerio = require("cheerio"), //进入cheerio模块
    fetch = require('node-fetch'),
    depositPath = "C:\\Users\\"; //存放照片的地址

let charset = require('superagent-charset'); //解决乱码问题:
let superagent = require('superagent'); //发起请求
charset(superagent);

module.exports = {
    getPage(url) {
        return new Promise((resolve, reject) => {
            superagent.get(url)
                .charset('gbk') //取决于网页的编码方式
                .end(function (err, res) {
                    if (err) {
                        console.log('getPage错误')
                        setTimeout(() => {
                            reject('err')
                        }, Math.ceil(800 * Math.random()))

                    } else {
                        resolve({res: res && res.text})
                    }


                })
        }).catch((err) => {
            return err
        });
    },
    getUrls(data) {
        let list = [];
        const $ = cheerio.load(data.res); //将html转换为可操作的节点
        $("img[data-lazyload]")
            .each(async (i, e) => {
                let obj = {
                    url: e.attribs['data-lazyload'].match(/\/\/(.+)\\/)[1] //图片网页的url
                };
                list.push(obj); //输出目录页查询出来的所有链接地址
            });
        return list;
    },
    createMkdir(name) {
        if (!fs.existsSync(name)) {//查看是否存在这个文件夹
            fs.mkdirSync(name);//不存在就建文件夹
            return true;
        } else {
            return false;
        }
    },
    //下载相册照片
    downloadImage(item, {i, a}, {name, text},n=1) {

        return new Promise(async (resolve, reject) => {
            if (item && item.url) {
                let imgSrc = item.url;//图片地址
                let img1LoadRes;
                let imgsLoadRes;
                if (i === 0) {

                  img1LoadRes=   await fetch(
                        'http://' + imgSrc ,
                        { timeout: 4000}
                      ).then((res) => {

                       return new Promise((resolve, reject)=>{
                            const Stream = fs.createWriteStream(`${name}/${text}${a + 1}.jpg`);
                            res.body.pipe(Stream);

                            Stream.on('finish', function () {
                                resolve('success')
                            });
                            Stream.on('error', function () {
                                reject('err')
                            });
                        }).catch((err)=>{
                            return err;
                       })

                    }).catch(()=>{
                      reject('err')
                  })
                }
                if(img1LoadRes!=='err'){

                    imgsLoadRes=await fetch(
                        'http://' + imgSrc,
                        { timeout: 4000}
                       ).then((res) => {

                        return new Promise((resolve, reject)=>{
                            const Stream = fs.createWriteStream(`${name}/${text}${a + 1}-detail${i + 1}.jpg`);
                            res.body.pipe(Stream);

                            Stream.on('finish', function () {
                                resolve('success')
                            });
                            Stream.on('error', function () {
                                reject('err')
                            });
                        }).catch((err)=>{
                            return err;
                        })

                    }).catch(()=>{
                        reject('err')
                    })

                }
                if(imgsLoadRes==='success'){
                    // clearTimeout(settime)
                    console.log(`第${a+1}组图片${i}下载完成`);
                    resolve('success')
                }else{
                    console.log(`第${a+1}组图片${i}第${n}次下载失败--将重新进行下载`);
                    reject('err')
                }
            }
            reject('err')

        }).catch(()=>{
           return this.downloadImage(item, {i, a}, {name, text},n+1)
        })

    }
};

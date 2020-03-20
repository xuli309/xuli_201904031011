var http = require("http");
var fs = require("fs");

var xlsx = require('node-xlsx');

var http = require('http');
http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
//   //将读到的流导到页面上面
//   fs.createReadStream('./static/logo.png').pipe(res);
  //不能写其他的res
  //res.write('Hello World\n');

  var data = [
        {name:'sheet1',data:[['ID','Name','Score'],['1','Michael','99'],['2','Jordan','98'] ]},
        {name:'sheet2',data:[['AA','BB'],['23','24']]}
    ]
    // 写xlsx
    var buffer = xlsx.build(data);
    fs.writeFile('./static/resut.xls', buffer, function (err){
        if (err) throw err;
        console.log('写入');
        
        // 读xlsx
        // var obj = xlsx.parse("./static/" + "resut.xls");
        // console.log(JSON.stringify(obj));
        fs.createReadStream("./static/" + "resut.xls").pipe(res);
    });

//   let conf ={}; // 创建对象
//   conf.name = "mysheet";   //表名
//   //列名
//   conf.cols = [
//       {
//           caption:'SN',
//           type:'string'
//       },
//   ];
// 　let json = JSON.parse(res.body).result; // 处理后台返回数据
// 　　// 判断后台返回数据
// 　if(json.length) {
//     let arr = [];
//     //将json数据转换为二维数组
//     json.map((item)=>{
//         let a = [];
//         a.push(item);
//         arr.push(a);
//     })
//     //行数据
//     conf.rows = arr;
//     // console.log('配置信息',excelConfig);
//     let res1 = nodeExcel.execute(conf);
//     res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//     res.setHeader("Content-Disposition", "attachment; filename=" + "./static/1.csv");
//     // res.end(res1, 'binary');
//     res.json({code: 1, result: res1});
//   }



}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8000/');



let url = "http://localhost:8080" ;
console.log(url);

let xhr = new XMLHttpRequest(); 
xhr.open('GET', url, true);
xhr.responseType = "blob";
xhr.onload = function(e) {
  if (this.status == 200) {
      //接受二进制文件流
      let res = this.response;
      console.log(res);
      
      // var blob = new Blob([`\ufeff${res.data}`], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}); // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型

      // var downloadElement = document.createElement('a');
      // var href = window.URL.createObjectURL(blob); // 创建下载的链接
      // downloadElement.href = href;
      // downloadElement.download = 'SN.xlsx'; // 下载后文件名
      // document.body.appendChild(downloadElement);
      // downloadElement.click(); // 点击下载
      // document.body.removeChild(downloadElement); // 下载完成移除元素
      // window.URL.revokeObjectURL(href); // 释放掉blob对象


  }
  };
  xhr.send();

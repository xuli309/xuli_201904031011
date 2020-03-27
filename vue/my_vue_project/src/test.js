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



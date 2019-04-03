const hbs = require('hbs');//引入hbs
const helpers = require('handlebars-helpers');
const moment = require('moment');//时间插件

var path = require('path');//处理路径相关的

//注册partial目录
hbs.registerPartials(path.join(__dirname, '../views/partials'));

//只导入一部分，并且和我们的handlebars实例挂钩
helpers.comparison({handlebars:hbs.handlebars});

//行内helper
hbs.registerHelper('addOne',function(num){
  return ++num;
});

//行内helper
hbs.registerHelper('minusOne',function(num){
  return --num;
})

//日期格式化
hbs.registerHelper('date',function(date,format){
  const m = moment(date);
  if(m){
    return m.format(format);
  }else{
    return '';
  }
  
});

hbs.registerHelper('link',function(options){
  const {text,href, style} =  options.hash;
  // return new hbs.SafeString(`<a href="${href}" style="${style}">${text}</a>`);
  // return `<a href="${href}" style="${style}">${text}</a>`;

  return new hbs.SafeString(`<a href="${href}" style="${style}">${hbs.Utils.escapeExpression(text)}</a>`);
});

//注册代码块的helper
const blocks = {};//代码块缓存对象
hbs.registerHelper('extend',function(name,context){
  //context 是上下文，保存有用方法和数据，最后一个参数永远是context
  let block = blocks[name];//block 存放临时代码块
  if(!block){
    block = blocks[name] = [];
  }

  //编译指令中代码块并放入block
  block.push(context.fn(this));
  //与context.fn配对的还有一个方法context.invose

});

hbs.registerHelper('block',function(name){
  const val = (blocks[name]||[]).join('\n');
  blocks[name] = [];//清空缓存
  return val;
});

//动态partial
hbs.registerHelper('whichPartial',function(name){
  return name;
});

//获取时间的一部分
hbs.registerHelper('partOfDate',function(start,part,index){
  const date = new Date(start);
  if(part == 'd'){
    return date.getDate();
  }else if(part == 'M'){
    return (date.getMonth()+1)+"";
  }else if(part == 'h'){
    let h = date.getHours();
    h = h<10 ?('0'+h):h.toString();
    return  h[index];
  }else if(part == 'm'){
    let h = date.getMinutes();
    h = h<10 ?('0'+h):h.toString();
    return  h[index];
  }else{
    return '';
  }
});
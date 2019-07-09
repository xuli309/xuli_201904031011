// Generator 测试

// function* g(){
//     yield 'a';
//     yield 'b';
//     yield 'c';
//     return 'ending';
// }
// console.log(g())// 返回迭代器函数

// const gen = g();
// 方法一
// console.log(gen.next()); // 返回结果对象
// // { value: 'a', done: false }
// // value 是 yield 后面表达式的结果
// console.log(gen.next());
// // { value: 'b', done: false } 
// console.log(gen.next()); 
// // { value: 'c', done: false }
// console.log(gen.next());
// //  { value: 'ending', done: true }
// console.log(gen.next()); 
// // { value: undefined, done: true }


// 方法二：使用递归函数执行生成器里面所有步骤
// function next(){
//     let {value, done} = gen.next()// 启动
//     console.log(value); // 依次打印a b c  ending
//     if(!done)next() // 直接迭代完成
// }
// next();

// 例二
// function* say(){
//     let a = yield '1'
//     console.log(a) // 我是被传进来的1

//     let b = yield '2'
//     console.log(b) // 我是被传进来的2
// }
// let it = say(); //返回迭代器 第一个next 没法传参
// console.log(it.next()); // { value: '1', done: false }
// console.log(it.next('我是被传进来的1'));// { value: '2', done: false }
// console.log(it.next('我是被传进来的2'));// { value: undefined, done: true }

function* r(num) {
    const r1 = yield compute(num);
    yield compute(r1);
}
// compute 为异步换算，结合Promise使用key轻松实现异步操作队列
function compute(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            const ret = num*num;
            console.log(ret); // 输出异步结果
            resolve(ret); // 操作成功
        }, 1000);
    })
}
// 不使用递归调用函数
let it = r(2);
// it.next().value.then(num => it.next(num));

function next(data){
    let {value, done} = it.next(data);
    if(!done){
        value.then(num => {next(num)})
    }
}
next();



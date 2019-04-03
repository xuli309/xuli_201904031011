

//es5常量声明
Object.defineProperty(window,"PI2",{
    value:3.1415926,
    writable:false
})
console.log(window.PI2);

//es6常量声明
window.PI2 = 4;
console.log(window.PI2);




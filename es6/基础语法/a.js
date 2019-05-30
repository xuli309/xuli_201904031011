var n = 100;
var m = 20;

function add(x,y){
    return x+y;
}

console.log('a.js被加载了')

// export { n,m, add } 
export { n as a, m as b, add } 

// export var a = 200
// export default 1000
export default 2000
// export default add
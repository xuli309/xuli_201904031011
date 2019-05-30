console.log("20-a 加载");
// var a=1;

// import {a,b,add} from './a.js';
// console.log(add(a,b));

// import {a} from './a.js';
// console.log(a);

// import d from './a.js';
// console.log(d)


// var  b = 1;
// import {a, b as newB, add} from './a.js';
// console.log(add(a,newB))


// import * as tool from './a.js';
// console.log(tool);
// console.log(tool.add(tool.a,tool.b))

// import num,{a,add} from './a.js';
// console.log(add(num,a))

// import "./a.js";

// console.log(this) // undefined

// import {a} from './a.js';
// import "./a.js";


// import {c} from './b.js';
// console.log(c);
// c=200;//不能更改常量

import {c,addOne} from './b.js';
addOne();
console.log(c)
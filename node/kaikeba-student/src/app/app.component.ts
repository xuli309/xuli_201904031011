import { Component } from '@angular/core';
// 具名导入
import Student, { HOST, add, Foo, Bar, ooxx} from './myModule';
console.log(HOST);
console.log(add(1,1 ));

// 变量、常量
let name = 'tom'; // 变量
const PI = 3.1415926; // 常量
let foo: string; // string
foo = 'aaa';
let isbool: boolean; // boolean
isbool = true;

name = 'jerry';

const names: string[] = ['a', 'b'];

// 元组
let x: [string, number];
x = ['hello', 10];

// 任意类型
let notSure: any;
notSure = 4;
notSure = 'ssss';

// any 也能用于数组
const list: any[] = [1, true, 'aaa'];
list[1] = 100;

// 枚举
enum Color {Red = 1, Green = 2, Blue = 3}
const c: Color = Color.Blue;
console.log(c);
console.log(Color[1]);

function greeting(person: string) {
  return 'hello ' + person;
}
greeting('tom');

// void类型
function warnUser(): void {
alert('aaaa');
}

// 接口:约束类型的结构
interface Person {
  firstName: string;
  lastName: string;
}
function greeting2(person: Person) {
  return 'hello ' + person.firstName + ' ' + person.lastName;
}
const myname = greeting2({firstName: 'tom', lastName: 'cruise'});
console.log(myname);

// 类class
class Greeter {
  greeting: string; // 属性
  constructor(msg: string) {// 通常用于属性的初始化
    this.greeting = msg;
  }
  greet() { // 方法
    return 'Hello ' + this.greeting;
  }
}
const greeter = new Greeter('World');
console.log(greeter.greet());

// 继承
class Animal {
  // protected name: string;
  // constructor(theName: string) {
  //   this.name = theName;
  // }
  constructor(protected myName: string) {

  }
  move(dictance: number = 0) {
    console.log( `${this.myName}移动了${dictance}米`);
  }
}
// 类继承
class Dog extends Animal {
  // readonly age: number; // 只读属性，只能在声明或者构造函数中赋值
  constructor(theName: string, readonly age: number) {
    super(theName); // 使用super 调用父类的构造函数
  }

  bark() {
    console.log('汪汪');
  }

  move(dictance: number = 2) {// 方法重写overiding
    console.log('奔跑');
    super.move(dictance); // 使用super.xxx访问父类成员
  }

 // 方法重载
  eat(food: string): boolean;
  eat(food: {name: string, amount: number}): {catEat: boolean, msg: string};
  eat(food: string | {name: string, amount: number}): any {
      if (typeof food === 'string') {// 方法1 实现
        return food === 'bone';
      } else {// 方法2实现
        const canEat = food.name === 'bone' && food.amount < 3;
        let msg = '';
        if (food.name !== 'bone') {
          msg = '狗只吃骨头';
        }
        if (food.amount >= 3) {
          msg = '狗只吃两根骨头';
        }
        return {canEat, msg};
      }
  }

}
const dog = new Dog('汪星人', 3 );
dog.bark();
dog.move(10);

// 静态属性及方法
class Grid {
  // origin原点是所有网格都会用到的属性
  static origin = {x: 0, y: 0};

  static distance(point: {x: number, y: number}) {
    const xDist = point.x - this.origin.x;
    const yDist = point.y - this.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist);
  }
}
// const grid = new Grid();
console.log(Grid.origin.x, Grid.origin.y);
console.log(Grid.distance({x: 3, y: 4}));

// 存储器
class Employee {
  // 封装局部变量
  // 额外逻辑处理
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    console.log('管理员修改了雇员名称');
    this._fullName = value;
  }
}
const employee = new Employee();
employee.fullName = 'James Harden';

// 函数参数的必要性
function buildName(first: string = 'aa', last?: string) {
  return first + last;
}
buildName('tom', 'jerry');
buildName('tom'); // 可选参数 last?
buildName(); // 默认值

// 不使用泛型
function noGeneric1(arg: number): number {
  return arg;
}
function noGeneric2(arg: any): any {
  return arg;
}

// 使用泛型   泛型约束
interface Lenthwise {
  length: number;
}

function userGeneric<T extends Lenthwise>(arg: T): T {
  return arg;
}
// 用法1： 完整写法
userGeneric<string>('myString');
// 用法2：利用类型推论省略的number
// userGeneric({lenth: 1, other: 'aa'});

// 泛型接口
interface Result<T> {
  success: boolean;
  data?: T;
}
interface User {
  id: number;
  name: string;
}

const r: Result<User> = {success: true, data: {id: 1, name: 'tome'}};

// 泛型类
class Result<T> {
  constructor(public success: boolean, public data?: T) {
  }
}
const r2: Result<User> = {success: true, data: {id: 1, name: 'tome'}};
console.log(r2.success, r2.data.name);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}

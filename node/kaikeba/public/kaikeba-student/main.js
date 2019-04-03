(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n  width: 150px;\r\n  margin: 110px auto 30px;\r\n}\r\n\r\n.logo img {\r\n  width: 150px;\r\n}\r\n\r\n.nav {\r\n  margin: 0 auto;\r\n  width: 372px;\r\n  text-align: center;\r\n}\r\n\r\n.nav > a {\r\n  display: inline-block;\r\n  margin: 0 15px;\r\n  padding: 16px 12px;\r\n  color: #b7b9bd;\r\n  font-size: 18px;\r\n}\r\n\r\n.nav > a.active {\r\n  color: #00aae5 !important;\r\n  border-bottom: 1px solid #00aae5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luOiAxMTBweCBhdXRvIDMwcHg7XHJcbn1cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMzcycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2ID4gYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICBjb2xvcjogI2I3YjliZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5uYXYgPiBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMGFhZTUgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYWFlNTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--路由导航链接-->\n<div class=\"logo\">\n  <a href=\"http://www.kaikeba.com/\">\n    <img src=\"http://student.kaikeba.com/assets/blue_logo-57d711624a.png\">\n  </a>\n</div>\n<div class=\"nav\">\n  <a routerLink=\"login\" routerLinkActive=\"active\">登录</a>\n  <a routerLink=\"register\" routerLinkActive=\"active\">注册</a>\n</div>\n\n<!-- 想要看到路由内容，需要放置路由出口 -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myModule */ "./src/app/myModule.ts");


// 具名导入

console.log(_myModule__WEBPACK_IMPORTED_MODULE_2__["HOST"]);
console.log(Object(_myModule__WEBPACK_IMPORTED_MODULE_2__["add"])(1, 1));
// 变量、常量
var name = 'tom'; // 变量
var PI = 3.1415926; // 常量
var foo; // string
foo = 'aaa';
var isbool; // boolean
isbool = true;
name = 'jerry';
var names = ['a', 'b'];
// 元组
var x;
x = ['hello', 10];
// 任意类型
var notSure;
notSure = 4;
notSure = 'ssss';
// any 也能用于数组
var list = [1, true, 'aaa'];
list[1] = 100;
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
console.log(Color[1]);
function greeting(person) {
    return 'hello ' + person;
}
greeting('tom');
// void类型
function warnUser() {
    alert('aaaa');
}
function greeting2(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
var myname = greeting2({ firstName: 'tom', lastName: 'cruise' });
console.log(myname);
// 类class
var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        return 'Hello ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('World');
console.log(greeter.greet());
// 继承
var Animal = /** @class */ (function () {
    // protected name: string;
    // constructor(theName: string) {
    //   this.name = theName;
    // }
    function Animal(myName) {
        this.myName = myName;
    }
    Animal.prototype.move = function (dictance) {
        if (dictance === void 0) { dictance = 0; }
        console.log(this.myName + "\u79FB\u52A8\u4E86" + dictance + "\u7C73");
    };
    return Animal;
}());
// 类继承
var Dog = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Dog, _super);
    // readonly age: number; // 只读属性，只能在声明或者构造函数中赋值
    function Dog(theName, age) {
        var _this = _super.call(this, theName) || this;
        _this.age = age;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log('汪汪');
    };
    Dog.prototype.move = function (dictance) {
        if (dictance === void 0) { dictance = 2; }
        console.log('奔跑');
        _super.prototype.move.call(this, dictance); // 使用super.xxx访问父类成员
    };
    Dog.prototype.eat = function (food) {
        if (typeof food === 'string') { // 方法1 实现
            return food === 'bone';
        }
        else { // 方法2实现
            var canEat = food.name === 'bone' && food.amount < 3;
            var msg = '';
            if (food.name !== 'bone') {
                msg = '狗只吃骨头';
            }
            if (food.amount >= 3) {
                msg = '狗只吃两根骨头';
            }
            return { canEat: canEat, msg: msg };
        }
    };
    return Dog;
}(Animal));
var dog = new Dog('汪星人', 3);
dog.bark();
dog.move(10);
// 静态属性及方法
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.distance = function (point) {
        var xDist = point.x - this.origin.x;
        var yDist = point.y - this.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist);
    };
    // origin原点是所有网格都会用到的属性
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
// const grid = new Grid();
console.log(Grid.origin.x, Grid.origin.y);
console.log(Grid.distance({ x: 3, y: 4 }));
// 存储器
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            console.log('管理员修改了雇员名称');
            this._fullName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = 'James Harden';
// 函数参数的必要性
function buildName(first, last) {
    if (first === void 0) { first = 'aa'; }
    return first + last;
}
buildName('tom', 'jerry');
buildName('tom'); // 可选参数 last?
buildName(); // 默认值
// 不使用泛型
function noGeneric1(arg) {
    return arg;
}
function noGeneric2(arg) {
    return arg;
}
function userGeneric(arg) {
    return arg;
}
// 用法1： 完整写法
userGeneric('myString');
var r = { success: true, data: { id: 1, name: 'tome' } };
// 泛型类
var Result = /** @class */ (function () {
    function Result(success, data) {
        this.success = success;
        this.data = data;
    }
    return Result;
}());
var r2 = { success: true, data: { id: 1, name: 'tome' } };
console.log(r2.success, r2.data.name);
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










// 配置路由
var routers = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routers)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login-user.ts":
/*!*******************************!*\
  !*** ./src/app/login-user.ts ***!
  \*******************************/
/*! exports provided: LoginUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
var LoginUser = /** @class */ (function () {
    function LoginUser(phone, password) {
        if (phone === void 0) { phone = ''; }
        if (password === void 0) { password = ''; }
        this.phone = phone;
        this.password = password;
    }
    return LoginUser;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  width: 372px;\r\n  margin: 40px auto;\r\n}\r\n\r\n.form-group input{\r\n  height: 44px;\r\n}\r\n\r\nform button{\r\n  background: #00aae5;\r\n  border: 0;\r\n  width: 100%;\r\n  height: 44px;\r\n}\r\n\r\n.cb-group{\r\n  overflow: hidden;\r\n  margin: 20px 0;\r\n}\r\n\r\n.cb-group>label,\r\n.cb-group input,\r\n.cb-group span{\r\n  float: left;\r\n  font-weight: normal;\r\n}\r\n\r\n.cb-group a{\r\n  float: right;\r\n}\r\n\r\n.cb-group span,\r\n.cb-group a{\r\n  color: #999;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFDQTs7O0VBR0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICB3aWR0aDogMzcycHg7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0e1xyXG4gIGhlaWdodDogNDRweDtcclxufVxyXG5cclxuZm9ybSBidXR0b257XHJcbiAgYmFja2dyb3VuZDogIzAwYWFlNTtcclxuICBib3JkZXI6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcbi5jYi1ncm91cHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcbi5jYi1ncm91cD5sYWJlbCxcclxuLmNiLWdyb3VwIGlucHV0LFxyXG4uY2ItZ3JvdXAgc3BhbntcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5jYi1ncm91cCBhe1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4uY2ItZ3JvdXAgc3BhbixcclxuLmNiLWdyb3VwIGF7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"login()\">\n  <div class=\"form-group\">\n    <!--#phone是模板引用变量-->\n    <input type=\"text\" class=\"form-control\"\n           name=\"phone\" placeholder=\"请输入手机号\"\n           [(ngModel)]=\"model.phone\" #phone=\"ngModel\"\n           required pattern=\"1[3,5,7,8]\\d{9}\" >\n    <div class=\"error\" [hidden]=\"phone.valid || phone.untouched\">\n      <span *ngIf=\"phone?.errors?.required\">请输入手机号</span>\n      <span *ngIf=\"phone?.errors?.pattern\">手机号格式不正确</span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\"\n           name=\"password\" placeholder=\"请输入密码\"\n           [(ngModel)]=\"model.password\" #password=\"ngModel\"\n           required >\n    <div class=\"error\" [hidden]=\"password.valid || password.untouched\">\n      <span *ngIf=\"password?.errors?.required\">请输入密码</span>\n    </div>\n  </div>\n\n  <div class=\"cb-group\">\n    <label>\n      <input type=\"checkbox\">\n      <span>7天自动登录</span>\n    </label>\n    <a href=\"\">忘记密码</a>\n  </div>\n\n  <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">登录\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-user */ "./src/app/login-user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.model = new _login_user__WEBPACK_IMPORTED_MODULE_2__["LoginUser"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log(this.model);
        // 发送登录请求
        this.userService.login(this.model).subscribe(function (result) {
            if (result.success) {
                alert('登录成功');
            }
            else {
                alert('登录失败');
            }
        }, function (error) {
            console.log(error);
            alert('登录失败');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/myModule.ts":
/*!*****************************!*\
  !*** ./src/app/myModule.ts ***!
  \*****************************/
/*! exports provided: HOST, add, Foo, Bar, ooxx, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foo", function() { return Foo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ooxx", function() { return abc; });
// 具名导出
var HOST = 'http://localhost:4200';
function add(a, b) {
    return a + b;
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());

// 导出语句
var Bar = 'foo';
var abc = 'abc';

// 默认导出
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
/* harmony default export */ __webpack_exports__["default"] = (Student);


/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// 可注入的
var UserService = /** @class */ (function () {
    // 依赖注入
    function UserService(http) {
        this.http = http;
        this.url = '/api/users';
    }
    UserService.prototype.login = function (user) {
        // 返回的是 Observable 对象
        return this.http.post(this.url + '/login', user);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\keikeba\node\kaikeba-student\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
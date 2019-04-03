import { Injectable } from '@angular/core';
import {LoginUser} from './login/login-user';
import {HttpClient} from '@angular/common/http';
import {Result} from '../common/results';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {RegisterUser} from './register/register-user';


export interface User {
  id: number;
  username: string;
  avatar?: string;
}

// 可注入的
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/api/users/';

  user: User = null; // 缓存登录用户信息

  // 依赖注入
  constructor(private http: HttpClient) { }

  login(user: LoginUser) {
    // 返回的是 Observable 对象
    return this.http.post<Result<User>>(this.url + 'login', user)
      .pipe(
        map(this.handleLogin.bind(this)),
        catchError(err => of(false))
      );
  }

  // 获取验证码
  getCodeImg() {
    return this.http.get(this.url + 'code-img');
  }
  verifyPhone(phone) {
    return this.http.post(this.url + 'verify-phone', {phone});
  }

  verifyCodeImg(code) {
    return this.http.post(this.url + 'verify-code-img', {code});
  }

  getCodeSms(phone) {
    return this.http.get( '/api/code/' + phone);
  }

  register(user: RegisterUser) {
    return this.http.post<Result<User>>(this.url + 'register', {
      phone: user.phone,
      password: user.password
    }).pipe(
      map(this.handleLogin.bind(this)),
      catchError(err => of(false))
    );
  }

  // 判断当前用户是否登录
  isLogin() {
    return this.http.post<Result<User>>(this.url + 'is-login', null)
      .pipe(
      map(this.handleLogin.bind(this)),
      catchError(err => of(false))
    );
  }

  private handleLogin(r: Result<User>) {
      if (r.success) { // 登录成功
        this.user = r.data;
        return true;
      } else {
        return false;
      }
  }

  // 注销
  logout() {
    return  this.http.post(this.url + 'logout', null)
      .pipe(
        // tap((result: Result<null>) => {
        //     if (result.success) {
        //       this.user = null; // 清除数据缓存
        //     }
        // }),
        // 转换数据结构
        map((result: Result<null>) => {
          if (result.success) {
            this.user = null; // 清除数据缓存
            return true;
          }
          return false;

        })
      );
  }
}

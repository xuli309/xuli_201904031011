import { Component, OnInit } from '@angular/core';
import {RegisterUser} from './register-user';
import {HttpClient} from '@angular/common/http';
import {User, UserService} from '../user.service';
import {Result} from '../../common/results';
import {interval} from 'rxjs';
import {scan, take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterUser;
  codeImgSrc = null; // 验证码图片地址
  isDisabled = false; // 开始禁用短信获取按钮
  btnText = '获取短信验证码';

  constructor(private userSevice: UserService, private router: Router) {
    this.model = new RegisterUser();
  }

  ngOnInit() {
    this.getCodeImg(); // 初始化的时候调用一次
  }

  getCodeImg() {
    this.userSevice.getCodeImg().subscribe(
      (result: Result<string>) => {
        if (result.success) {
          // 获取成功
          this.codeImgSrc = 'data:image/png;base64,' + result.data;

        } else {
          alert('获取验证码失败，请重试！');
        }
      },
      (error) => {
        console.log(error);
        alert('获取验证码失败，请重试！');
      }
    );

  }

  getCodeSms() {
    this.userSevice.getCodeSms(this.model.phone).subscribe(
      (result: Result<string>) => {
        if (result.success) {
          // 获取成功：开启60s 倒计时，禁用按钮
          this.isDisabled = true;
          interval(1000).pipe(
            scan(i => i - 1, 60),
            take(60)
          ).subscribe(i => {
            console.log(i);
            if (i > 0) {
              this.btnText = i + 's';
            } else if (i === 0) {
              this.btnText = '获取验证码';
              this.isDisabled = false;
            }
          });
        } else {
          alert('获取短信验证码失败，请重试！');
        }
      },
      (error) => {
        console.log(error);
        alert('获取短信验证码失败，请重试！');
      }
    );
  }

  // 执行注册
  register() {
    this.userSevice.register(this.model).subscribe(
      (result: boolean) => {
        if (result) {// 登录成功，跳转主页
          this.router.navigate(['/main']);
        } else {
          // this.router.navigate(['/user/login']);
          alert('注册失败');
        }
      }
    );
  }

}

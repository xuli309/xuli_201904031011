import { Component, OnInit } from '@angular/core';
import {LoginUser} from './login-user';
import {User, UserService} from '../user.service';
import {Result} from '../../common/results';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginUser;

  constructor(private userService: UserService, private router: Router) {
    this.model = new LoginUser();
  }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    // 发送登录请求
    this.userService.login(this.model).subscribe(
      (result: boolean) => {
        if (true) {
          this.router.navigate(['/main']);
        } else {
          this.router.navigate(['/user/login']);
        }
      }
    );
  }


}

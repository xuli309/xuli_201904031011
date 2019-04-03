import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {MenuItem, MenuItemType} from '../common/menu/menu.component';
import {UsercenterService} from './ucenter/usercenter.service';
import {of, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Result} from '../common/results';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  styles: []
})
export class MainComponent implements OnInit {

  showMenu = false;
  // 菜单数据
  menuData: MenuItem[] = [
    {label: '设计学吧', url: 'http://uxd.kaikeba.com', type: MenuItemType.Link},
    {label: '产品学吧', url: 'http://pm.kaikeba.com', type: MenuItemType.Link}
  ];

  showUserMenu = false;
  userMenuData: MenuItem[] = [
    {label: '我的课程', url: 'ucenter/course', type: MenuItemType.Route},
    {label: '我的消息', url: 'ucenter/message', type: MenuItemType.Route},
    {label: '退出', cb: () => {
        // 注销跳转至登录页面
        this.userService.logout().subscribe(
          (success: boolean) => {
            if (success) {
              this.router.navigate(['/user/login']);
            }
          }
        );

      }, type: MenuItemType.Callback},
  ];

  // 搜索课程结果
  searchResult: MenuItem[];
  subject: Subject<string> = new Subject<string>();

  constructor(private router: Router,
              private userService: UserService,
              private ucenterService: UsercenterService) {
    // 设置subject
    this.subject.pipe(
      debounceTime(300), // 防抖
      distinctUntilChanged(), // 去重：加入紧挨着两次输入值相同则不发送
      switchMap(keyword => { // 将Observable<string>类型转换为Observable<Result<any>>
        if (keyword === '') { // 判空
          return of([]);
        }
        return this.ucenterService.searchCourse(keyword);
      })
    ).subscribe(
      (result: Result<any[]>) => {
        if (result.success) {
          // 映射数据结构
          this.searchResult = result.data.map(item => {
            return {
              label: item.name, url: item.url, type: MenuItemType.Link
            };
          });
        }
      }
    );
  }

  ngOnInit() {
  }

  gotoCourse(courseId) {
    this.router.navigate([
      '/main/course', courseId, // 紧跟着path是必选参数（参数不能是对象）
        {name: 'aa', password: '123'}], // 可选参数传递对象就行
      {queryParams: {foo: 'bar'}} // 查询参数
      );
  }

  search(keyword) {
    this.subject.next(keyword);
  }
}

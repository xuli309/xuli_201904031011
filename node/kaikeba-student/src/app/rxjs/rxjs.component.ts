import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {filter, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  template: `
    <p>
      rxjs works!
    </p>
  `,
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Observable 对象创建 ,构造函数中传入订阅函数，其参数是观察者
    const ob1 = new Observable((observer) => {
        setInterval(() => {
          // 请求成功，发送数据
          observer.next({success: true, data: 1});
          // 如果出错，执行error()
          observer.error({success: false, data: 1});
          // 如果请求结束，执行 complate()
          observer.complete();

        }, 2000);
    });

    // 获得实例后订阅
    const subscription = ob1.subscribe((result) => {
      console.log(result);
      // 通过订阅对象可取消
      subscription.unsubscribe();
    }, (error) => {
      console.error(error);
    }, () => {
      console.log('complete!');
    });

    // 通过primise
    const ob2 = fromPromise(fetch('assets/data.json'));
    ob2.subscribe({
      next(resp) {
        console.log(resp);
      },
      error(err) {
        console.log(err);
      }
    });

    // 通过定时器构造
    const ob3 = interval(1000).pipe(
      take(5)
    );
    ob3.subscribe(val => console.log('计数:' + val));

    // 通过事件
    const ob4 = fromEvent(document, 'click');
    ob4.subscribe((evt: MouseEvent) => {
      console.log(evt.clientX + ' ' + evt.clientY);
    });

    // 通过已存在的值
    const ob5 = of(1, 2, 3, 4, 5); // Observable<number>
    const ob6 = of([1, 2, 3]); // Observable<Array<number>>
    const ob7 = of({foo: 'bar'}); // Observable<{foo:string}>

    // 操作符
    ob5.pipe(
      filter(n => n % 2 !== 0), // 过滤奇数
      map(n => n * n), // 求平方
    ).subscribe(
      n => console.log(n)
    );
  }

}

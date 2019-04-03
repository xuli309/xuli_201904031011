import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompmunicateService {
  private subject = new Subject<string>(); // 发送数据的源
  ob  = this.subject.asObservable(); // 消费者用来监听的Observable

  emit(msg) {
    this.subject.next(msg);
  }

  constructor() { }
}

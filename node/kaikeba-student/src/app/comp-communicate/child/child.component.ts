import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CompmunicateService} from '../comp-communicate/compmunicate.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  private _uname: string;
  private changeLog: string[] = [];
  get uname(): string {
    return this._uname;
  }

  @Input()
  set uname(value: string) {
    this._uname = (value && value.trim()) || '无名氏';
  }

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cs: CompmunicateService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let log: string;
    // 当前组件中成员组件的值发生变化是，我有额外的事情要做时
    const chng = changes['uname'];
    if (chng) { // 确定变化发生在uname 上
      // 获取当前值和之前值，日志记录
      const currValue = chng.currentValue;
      // 是否首次赋值
      if (chng.isFirstChange()) {
        log = `设置uname的初始值为${currValue}`;
      } else {
        const previousValue = chng.previousValue;
        log = `uanme的值由${previousValue}变为${currValue}`;
      }

      this.changeLog.push(log);
    }
  }

  changeName() {
    this.uname = 'handarn';
    this.change.emit(this.uname); // 通知父组件
    this.cs.emit('大哥，我改名了'); // 通知其他组件

  }

}

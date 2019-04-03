import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-comp-communicate',
  templateUrl: './comp-communicate.component.html',
  styleUrls: ['./comp-communicate.component.css']
})
export class CompCommunicateComponent implements OnInit, AfterViewInit {
  uname = 'Jerry';

  names = ['Mike', ' ', ' Json '];

  @ViewChild('child') child: ElementRef;

  constructor() {
    // console.log(1, this.child);
  }

  ngOnInit() {
    // console.log(2, this.child);
  }

  ngAfterViewInit(): void {
    console.log(3, this.child['uname']);
    console.log(this.child.nativeElement); // 悬疑
  }

  onchange(newName) {
    alert('改名了 ' + newName);
  }

}

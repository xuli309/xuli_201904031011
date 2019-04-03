import { Component, OnInit } from '@angular/core';
import {CompmunicateService} from '../comp-communicate/compmunicate.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private cs: CompmunicateService) { }

  ngOnInit() {
    this.cs.ob.subscribe(
      msg => alert(msg)
    )
  }

}

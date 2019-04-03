import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Course, CourseService, Pandect} from '../ucenter/course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course = null;
  pandect: Pandect = null;

  constructor(private route: ActivatedRoute,
              private us: CourseService) {
    // route.paramMap 他是一个Observable
    route.paramMap.subscribe((pm: ParamMap) => {
      console.log(pm.get('classId')); // 获取可选参数
      // console.log(pm.get('name')); // 获取必选参数

      // 获取classId并通过它获取相关学习概况
      return this.us.getCourseById(pm.get('classId')).subscribe(
        c => this.course = c
      );

      return this.us.getPandect(pm.get('classId')).subscribe(
        c => this.pandect = c
      );

    });

    // route.queryParamMap.subscribe((pm: ParamMap) => {
    //   console.log(pm.get('foo')); // 获取查询参数
    // });
  }

  ngOnInit() {
  }

}

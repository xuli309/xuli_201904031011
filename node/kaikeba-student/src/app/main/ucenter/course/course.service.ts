import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Result} from '../../../common/results';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';


export interface Course {
  id: number;
  name: string;
  phase: string;
  poster: string;
}

export interface Pandect {
  study_name: number;
  rank: number;
  training: string;
  traduation_time: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = '/api/users/';

  courses: Course[] = null;
  pandect: Pandect = null;

  constructor(private http: HttpClient) { }

  getMyCourses() {
    if (this.courses) { // 如果已获取过列表数据，则直接返回数据
      return of(this.courses);
    }
    return this.http.get<Result<Course[]>>(this.url + 'my-courses')
      .pipe(
        map((result: Result<Course[]>) => {

          // 缓存数据
          this.courses = result.data;
          return result.data;
        })
      );
  }

  // 根据classId获取其详情
  getCourseById(id) {
    if (this.courses) {
      const course = this.courses.find(c => c.id === +id);
      return of(course);
    }
    // 如果缓存中不存在，则从服务器获取
    return this.http.get<Result<Course>>(this.url + 'my-course/' + id)
      .pipe(
        map((result: Result<Course>) => {
          return result.data;
        })
      );
  }

  // 获取学习概况
  getPandect(classId) {
    console.log(222, this.pandect);

    if (this.pandect) {
      return of(this.pandect);
    }
    return this.http.get(this.url + 'pandect/' + classId)
      .pipe(
        map((result: Result<Pandect>) => {
          if (result.success) {
            this.pandect = result.data;
            return this.pandect;
          } else {
            this.pandect = null;
            return null;
          }
        })
      );
  }
}

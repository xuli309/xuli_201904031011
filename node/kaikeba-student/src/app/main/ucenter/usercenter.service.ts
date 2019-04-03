import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsercenterService {

  url = '/api/courses/';

  constructor(private http: HttpClient) { }

  searchCourse(keyword) {
    // get 请求传参;
    // 方式一: HttpParams
    // const params = new HttpParams().append('keyword', keyword);
    // return this.http.get(this.url + 'search', {params});
    // 方式二：
    return this.http.get(this.url + 'search', {params: {keyword}});

  }
}

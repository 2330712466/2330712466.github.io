import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { map } from './../../node_modules/rxjs/internal/operators';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map'

// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, filter, switchMap } from 'rxjs/operators';

// import 'rxjs/rx';
// C:\Users\Administrator\my-app\node_modules\rxjs\internal\operators\map.d.ts
@Injectable()
export class DataService {
  //請求本地的json数据

  constructor(private http:Http) { }
  fetchData(){
    return this.http.get('./assets/people.json')
    .map((res) => res.json());

      // .subscribe(
      // //处理对应的数据
      // (data) => console.log(data))
  }
}

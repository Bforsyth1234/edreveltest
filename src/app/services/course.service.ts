import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get('assets/data.json');
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../models/student';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }

  getAll(): Observable<Student[]> {
    const baseUrl = environment.baseUrl;
    return this.http
      .get(`${baseUrl}/api/students`)
      .map(response => response.json());
  }

}

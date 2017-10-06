import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  constructor(private http: Http) { }

  getAll(): Observable<Project[]> {
    const baseUrl = environment.baseUrl;
    return this.http
      .get(`${baseUrl}/api/projects`)
      .map(response => response.json());
  }

}

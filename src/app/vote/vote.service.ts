import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IdentityService } from '../identity/identity.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VoteService {

  constructor(
    private http: Http,
    private identity: IdentityService
  ) { }

  vote(projectId: number, rank: number): Observable<boolean> {
    const baseUrl = environment.baseUrl;
    const payload = {
      projectId,
      voterId: this.identity.currentStudent.id,
      rank
    };
    return this.http
      .put(`${baseUrl}/api/votes`, payload)
      .map(response => response.json());
  }

}

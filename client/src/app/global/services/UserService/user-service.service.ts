import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAuthUser(user): Observable<any> {
    return this.http.post(`/user`, user);
  }

}

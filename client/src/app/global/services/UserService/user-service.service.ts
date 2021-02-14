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

  public getAuthUser({ id, email }): Observable<any> {
    return this.http.post(`/api/user/auth`, { id, email });
  }

  public update(user) {
    return this.http.put(`/api/user/${user.id}`, user);
  }

  public getDetail(id: string) {
    return this.http.get(`/api/user/${id}/detail`);
  }

}

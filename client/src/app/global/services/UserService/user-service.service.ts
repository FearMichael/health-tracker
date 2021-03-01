import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {

  }



  public getAuthUser(): Observable<any> {
    return this.auth.user$.pipe(
      switchMap((user) => this.http.post(`/api/user/auth`, { id: user.sub, email: user.email }).pipe(
        map((created) => ({ authUser: user, created }))
      )));
  }

  public update(user) {
    return this.http.put(`/api/user/${user.id}`, user);
  }

  public getDetail(id: string) {
    return this.http.get(`/api/user/${id}/detail`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogquestionService {

  private route = "/api/logquestions";

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<any[]> {
    return this.http.get(this.route) as Observable<any[]>;
  }

  public create(log): Observable<any[]> {
    return this.http.post(this.route, log) as Observable<any[]>;
  }

  public update(log): Observable<any[]> {
    return this.http.post(this.route, log) as Observable<any[]>;
  }

}

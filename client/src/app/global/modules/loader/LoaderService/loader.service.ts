import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public show$ = new ReplaySubject<boolean>(1);


  constructor() {
    this.show$.next(false);
  }

  public show() {
    this.show$.next(true);
  }
  public hide() {
    this.show$.next(false);
  }

  public onRequest<T>(o: Observable<T>): Observable<T> {
    this.show();
    return o.pipe(
      tap(() => this.hide())
    );
  }
}

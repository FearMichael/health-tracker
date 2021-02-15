import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'Health Tracker';

  constructor(
    private auth: AuthService,
  ) { }


  public ngOnInit() {
    this.auth.getAccessTokenSilently().pipe(
      catchError((err) => {
        console.log(err);
        return of(false);
      })
    ).subscribe();
  }
}

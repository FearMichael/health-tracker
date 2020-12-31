import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'Health Tracker';

  constructor(
    // private notification: NotificationService,
    // private snackbar: MatSnackBar
    private auth: AuthService,
    // private user:
  ) { }


  public ngOnInit() {
    this.auth.user$.pipe(
      tap((data) => console.log(data)),
      // switchMap((use)
    ).subscribe();
  }
}

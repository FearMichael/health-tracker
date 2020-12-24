import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { INotificationMessage, INotificationColors } from 'src/app/global/modules/notification/NotificationService/notification.interfaces';
import { NotificationService } from 'src/app/global/modules/notification/NotificationService/notification.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public loggedIn = false;

  constructor(
    private notification: NotificationService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((auth) => {
      this.loggedIn = auth
    })
    this.auth.user$.subscribe((user) => {
      const msg: INotificationMessage = {
        message: `Welcome ${user.name}`,
        color: INotificationColors.NOTIFICATION,
      }
      this.notification.notify(msg);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { INotificationMessage, INotificationColors } from 'src/app/global/modules/notification/NotificationService/notification.interfaces';
import { NotificationService } from 'src/app/global/modules/notification/NotificationService/notification.service';
import { UserService } from 'src/app/global/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public loggedIn = false;
  public user;

  constructor(
    private notification: NotificationService,
    public auth: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((auth) => {
      this.loggedIn = auth;
    });
    this.userService.getAuthUser().subscribe(({ authUser, created }) => {
      this.user = created;
      const msg: INotificationMessage = {
        message: `Welcome ${created.firstName ? created.firstName : created.email}`,
        color: INotificationColors.notification,
      };
      this.notification.notify(msg);
    });
  }

}

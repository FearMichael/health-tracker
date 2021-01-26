import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { switchMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/global/services/UserService/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user = {
    address: {},
    personalInformation: {}
  };

  constructor(
    private authSerice: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    // this.auth.user$.pipe(
    //   tap(user => console.log(user)),
    //   switchMap((user) => this.user.getAuthUser(user.id))
    // ).subscribe(userData => console.log(userData));

  }

}

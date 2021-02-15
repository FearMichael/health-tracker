import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { LoaderService } from 'src/app/global/modules/loader/LoaderService/loader.service';
import { UserService } from 'src/app/global/services/UserService/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public editMode = false;

  public user: any = {
    address: {
      address1: '',
      address2: '',
      address3: '',
      city: '',
      state: '',
      postal: '',
      country: '',
    },
    personalInformation: {
      birthdate: ''
    },
    firstName: '',
    lastName: '',
    profilePicture: '',
    // alternateEmail: ""
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private loader: LoaderService
  ) { }

  public ngOnInit(): void {

    this.authService.user$.pipe(
      tap(console.log),
      switchMap((user) => this.userService.getDetail(user.sub))
    ).subscribe((user: any) => {
      console.log(user);
      this.user = user;
      if (!user.personalInformation) this.user.personalInformation = {};
      if (!user.address) this.user.address = {};
    });

  }

  public saveProfile() {
    this.loader.show();
    this.userService.update(this.user).pipe(
      tap(() => this.loader.hide()),
      catchError(() => of(this.loader.hide()))
    ).subscribe((val) => {
      this.editMode = false;
      console.log(val);
    });
  }

}

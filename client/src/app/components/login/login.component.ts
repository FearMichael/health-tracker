import { Component, OnInit } from '@angular/core';

import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  public ngOnInit(): void {

    // this.auth

    // this.login("hello", "hello");

  }

  public login(email: string, password: string) {
    // this.auth.loginWithPopup(email, password)
  }

}

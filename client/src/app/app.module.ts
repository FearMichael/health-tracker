import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from './global/global.module';
import { NavigationComponent } from './global/components/layout/navigation/navigation.component';
import { FooterComponent } from './global/components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    AuthModule.forRoot({
      domain: 'bench-strength.auth0.com',
      clientId: 'uE26Ph3Vg1S1i6vItdRCIRnk8yUNcD2l'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

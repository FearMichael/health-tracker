import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from "./global/global.module";
import { NavigationComponent } from "./global/components/layout/navigation/navigation.component";
import { FooterComponent } from "./global/components/layout/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

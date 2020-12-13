import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from "@angular/material/list";
import { ChartComponent } from './components/chart/chart.component'
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DateToggleComponent } from './components/date-toggle/date-toggle.component';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from "ngx-echarts";

@NgModule({
  declarations: [
    ChartComponent,
    DateToggleComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts")
    }),
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    NgxEchartsModule,
    ChartComponent,
    DateToggleComponent,
    FormsModule,
    MatCardModule,
  ]
})
export class GlobalModule { }

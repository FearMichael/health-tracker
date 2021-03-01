import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ChartComponent } from './components/chart/chart.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DateToggleComponent } from './components/date-toggle/date-toggle.component';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { LoaderComponent } from './modules/loader/loader-component/loader.component';
import * as Services from './services/index';
import { NotificationDialogComponent } from './modules/notification/notification-dialog/notification-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationModule } from './modules/notification/notification.module';
import { LoaderModule } from './modules/loader/loader.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FullnamePipe } from './pipes/fullname.pipe';
import { CalendarPipe } from './pipes/calendar.pipe';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ChartComponent,
    DateToggleComponent,
    LoaderComponent,
    NotificationDialogComponent,
    FullnamePipe,
    CalendarPipe

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NotificationModule,
    LoaderModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSelectModule,
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
    LoaderComponent,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FullnamePipe,
    CalendarPipe,
    MatButtonToggleModule,
    MatSelectModule
  ],
  providers: [
    ...Object.values(Services).map(e => e),
    MatNativeDateModule
  ]
})
export class GlobalModule { }

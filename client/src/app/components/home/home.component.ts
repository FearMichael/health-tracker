import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/global/modules/notification/NotificationService/notification.service';
import * as dayjs from 'dayjs';
import { IDateToggle } from 'src/app/global/components/date-toggle/date-toggle.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public date: IDateToggle = {
    endDate: dayjs().valueOf(),
    startDate: dayjs().subtract(7, 'days').valueOf()
  };

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

  }

}

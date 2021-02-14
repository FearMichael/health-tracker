import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/global/modules/notification/NotificationService/notification.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public date = {
    endDate: Date.now(),
    startDate: dayjs().subtract(7, 'days')
  };

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) { }



  modelChange(val) {
    console.log(val);
  }

  ngOnInit(): void {

  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subDays } from 'date-fns';
import { NotificationService } from 'src/app/global/modules/notification/NotificationService/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public date = {
    endDate: Date.now(),
    startDate: subDays(Date.now(), 7)
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

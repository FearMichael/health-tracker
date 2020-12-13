import { Component, OnInit } from '@angular/core';
import { subDays } from "date-fns";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public date = {
    endDate: Date.now(),
    startDate: subDays(Date.now(), 7)
  }

  constructor() { }



  modelChange(val) {
    console.log(val);
  }

  ngOnInit(): void {
  }

}

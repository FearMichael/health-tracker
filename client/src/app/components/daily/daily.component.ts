import { Component, OnInit } from '@angular/core';
import { LogquestionService } from 'src/app/global/services/LogQuestionService/logquestion.service';
import * as dayjs from "dayjs/";
import { UserService } from 'src/app/global/services';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  public questions: any[] = [];
  public options = [...new Array(10).keys()].map(e => e + 1);

  public responses = [];

  public date = new Date();
  public user = null;

  constructor(
    private logQuestionService: LogquestionService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.logQuestionService.get().subscribe((questions) => this.questions = questions);

    this.userService.getAuthUser().pipe(
      untilDestroyed(this)
    ).subscribe(({ created }) => {
      console.log(created);
      this.user = created;
    });

  }

  public addDaily() {

    this.responses.map(v => ({ ...v, userId: this.user.id }));
    // 
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INotificationDialogData } from '../NotificationService/notification.interfaces';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: INotificationDialogData
  ) { }

  ngOnInit(): void {
  }

  public accept() {

  }

  public cancel() {

  }

}

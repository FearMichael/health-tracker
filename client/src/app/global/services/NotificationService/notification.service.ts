import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { INotificationMessage, INotificationColors } from './notification.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackbar: MatSnackBar) { }

  private horizontalPosition: MatSnackBarHorizontalPosition = "center";
  private verticalPosition: MatSnackBarVerticalPosition = "top"

  public notify(msg: INotificationMessage): void {
    this.snackbar.open(msg.message, msg.action || "Ok", {
      duration: msg.duration || 3000,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition,
      panelClass: msg.color || INotificationColors.NOTIFICATION
    }
    )
  }



}

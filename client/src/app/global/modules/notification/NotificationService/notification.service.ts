import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable, ReplaySubject } from 'rxjs';
import { INotificationMessage, INotificationColors, INotificationDialogData, INotificationDialog } from './notification.interfaces';
import { NotificationDialogComponent } from "../notification-dialog/notification-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  public alertVisible$ = new ReplaySubject<boolean>(1);

  constructor(
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.alertVisible$.next(false);
  }

  private horizontalPosition: MatSnackBarHorizontalPosition = "center";
  private verticalPosition: MatSnackBarVerticalPosition = "top"

  /**
   * @description Non persistant snackber at the top of the page primarily for information only events
   * @param msg INotificationMessage
   */
  public notify(msg: INotificationMessage): void {
    this.snackbar.open(msg.message, msg.action || "Ok", {
      duration: msg.duration || 3000,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition,
      panelClass: msg.color || INotificationColors.NOTIFICATION
    }
    )
  }


  /**
   * @description Persistent dialog that requires user interaction and emits an observable with true if they select ok or false if they select cancel
   * @param msg INotificationMessage
   */

  public alert(msg: INotificationDialog): MatDialogRef<any> {

    let dialogRef: MatDialogRef<any>;

    const data: INotificationDialogData = {
      title: msg.title,
      message: msg.message,
      acceptText: msg.acceptText || "Ok",
      cancelText: msg.cancelText || "Cancel",
      cancelButton: () => dialogRef.close(false),
      acceptButton: () => dialogRef.close(true),
    };

    dialogRef = this.dialog.open(NotificationDialogComponent, {
      width: "30%",
      data
    });

    return dialogRef;

  }



}

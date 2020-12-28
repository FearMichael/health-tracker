import { MatDialogRef } from '@angular/material/dialog';

export interface INotificationMessage {
    message: string;
    action?: string;
    color?: INotificationColors;
    duration?: number;
}
export enum INotificationColors {
    "ERROR" = "error",
    "WARNING" = "warning",
    "NOTIFICATION" = "notification"
}

export interface INotificationDialog {
    title: string;
    message: string;
    cancelText?: string;
    acceptText?: string;
}

export interface INotificationDialogData extends INotificationDialog {
    cancelButton: () => void,
    acceptButton: () => void
}
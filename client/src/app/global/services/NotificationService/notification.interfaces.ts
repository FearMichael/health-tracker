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
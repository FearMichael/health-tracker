export enum INotificationColors {
    'error' = 'error',
    'warning' = 'warning',
    'notification' = 'notification'
}

export interface INotificationMessage {
    message: string;
    action?: string;
    color?: INotificationColors;
    duration?: number;
}

export interface INotificationDialog {
    title: string;
    message: string;
    cancelText?: string;
    acceptText?: string;
}

export interface INotificationDialogData extends INotificationDialog {
    cancelButton: () => void;
    acceptButton: () => void;
}

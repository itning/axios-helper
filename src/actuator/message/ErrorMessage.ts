import IErrorMessage from "./IErrorMessage";

export default class ErrorMessage {
    private static errorMsg?: IErrorMessage;
    private static isShow = false;

    static set errorMsgImpl(errorMsg: IErrorMessage) {
        ErrorMessage.errorMsg = errorMsg;
    }

    static showOff() {
        ErrorMessage.isShow = false;
    }

    static isImplements(): boolean {
        return ErrorMessage.errorMsg !== undefined;
    }

    static autoShowErrorMsg(title: string, msg: any, once: boolean = false) {
        if (once) {
            ErrorMessage.showOnceErrorMsg(title, msg);
        } else {
            ErrorMessage.showErrorMsg(title, msg);
        }
    }

    static showErrorMsg(title: string, msg: any) {
        ErrorMessage.errorMsg?.showErrorToast(title, msg);
    }

    static showOnceErrorMsg(title: string, msg: any) {
        if (ErrorMessage.isShow) {
            return;
        } else {
            ErrorMessage.showErrorMsg(title, msg);
            ErrorMessage.isShow = true;
        }
    }
}

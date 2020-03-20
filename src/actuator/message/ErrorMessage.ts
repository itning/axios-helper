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

    isImplements(): boolean {
        return ErrorMessage.errorMsg !== undefined;
    }

    autoShowErrorMsg(title: string, msg: any, once: boolean = false) {
        if (once) {
            this.showOnceErrorMsg(title, msg);
        } else {
            this.showErrorMsg(title, msg);
        }
    }

    showErrorMsg(title: string, msg: any) {
        ErrorMessage.errorMsg?.showErrorToast(title, msg);
    }

    showOnceErrorMsg(title: string, msg: any) {
        if (ErrorMessage.isShow) {
            return;
        } else {
            this.showErrorMsg(title, msg);
            ErrorMessage.isShow = true;
        }
    }
}

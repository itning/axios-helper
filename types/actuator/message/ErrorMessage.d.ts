import IErrorMessage from "./IErrorMessage";
export default class ErrorMessage {
    private static errorMsg?;
    private static isShow;
    static set errorMsgImpl(errorMsg: IErrorMessage);
    static showOff(): void;
    static isImplements(): boolean;
    static autoShowErrorMsg(title: string, msg: any, once?: boolean): void;
    static showErrorMsg(title: string, msg: any): void;
    static showOnceErrorMsg(title: string, msg: any): void;
}

import AbstractRequestActuator from "./AbstractRequestActuator";
import {AxiosError, AxiosResponse} from "axios";
import IRequest from "./IRequest";
import IErrorMessage from "../config/IErrorMessage";

export default class RequestActuator extends AbstractRequestActuator {
    static errorMsg?: IErrorMessage;

    static set errorMsgImpl(errorMsg: IErrorMessage) {
        RequestActuator.errorMsg = errorMsg;
    }

    constructor(request: IRequest) {
        super(request);
    }

    protected onResponse(response: AxiosResponse): void {
        this.request.config.request.do.call(null, response);
    }

    protected onError(error: AxiosError): void {
        if (this.request.config.errorMsg.enable) {
            if (RequestActuator.errorMsg) {
                RequestActuator.errorMsg.showErrorToast(this.request.config.errorMsg.startStr, error.response ? error.response.data : "", 4.5)
            }
            if (this.request.config.errorMsg.handleFun) {
                this.request.config.errorMsg.handleFun.call(null, error);
            }
        }
    }

    protected onAfter(): void {
        if (this.request.config.request.after) {
            this.request.config.request.after.call(null)
        }
    }
}
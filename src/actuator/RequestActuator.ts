import AbstractRequestActuator from "./AbstractRequestActuator";
import {AxiosError, AxiosResponse} from "axios";
import IRequest from "./IRequest";
import ErrorMessage from "./message/ErrorMessage";

export default class RequestActuator extends AbstractRequestActuator {
    constructor(request: IRequest) {
        super(request);
    }

    protected onResponse(response: AxiosResponse): void {
        this.request.config.request.do.call(null, response);
    }

    protected onError(error: AxiosError): void {
        if (!error.response) {
            console.warn(error);
            if (ErrorMessage.isImplements()) {
                ErrorMessage.autoShowErrorMsg(this.request.config.errorMsg.startStr, error.message, this.request.config.errorMsg.once);
            }
            return;
        }
        if (this.request.config.errorMsg.enable) {
            if (ErrorMessage.isImplements()) {
                ErrorMessage.autoShowErrorMsg(this.request.config.errorMsg.startStr, error.response.data, this.request.config.errorMsg.once);
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

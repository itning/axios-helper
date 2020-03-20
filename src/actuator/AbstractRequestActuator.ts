import {AxiosError, AxiosInstance, AxiosResponse} from 'axios'
import IRequest from "./IRequest";
import AxiosInstanceFactory from "../factory/AxiosInstanceFactory";
import Distribution from "./distribution/Distribution";
import ErrorMessage from "./message/ErrorMessage";

/**
 * 请求执行器
 */
export default abstract class AbstractRequestActuator {
    protected readonly instance: AxiosInstance;
    protected readonly request: IRequest;

    protected constructor(request: IRequest) {
        this.instance = AxiosInstanceFactory.instance;
        this.request = request;
        this.distribution();
    }

    private distribution(): void {
        new Distribution(this.request.method)
            .distribution(this.instance, this.request)
            .then(response => {
                if (response.status === this.request.config.success.code) {
                    this.onResponse.call(this, response);
                } else {
                    if (ErrorMessage.isImplements() && this.request.config.errorMsg.enable) {
                        ErrorMessage.autoShowErrorMsg(this.request.config.errorMsg.startStr, response.data, this.request.config.errorMsg.once)
                    }
                }
            })
            .catch(error => {
                this.onError.call(this, error);
            })
            .then(() => {
                this.onAfter.call(this);
            })
    }

    protected abstract onResponse(response: AxiosResponse): void;

    protected abstract onError(error: AxiosError): void

    protected abstract onAfter(): void;
}

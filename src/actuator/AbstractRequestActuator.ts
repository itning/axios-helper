import {AxiosError, AxiosInstance, AxiosResponse} from 'axios'
import IRequest from "./IRequest";
import AxiosInstanceFactory from "../factory/AxiosInstanceFactory";
import Distribution from "./distribution/Distribution";

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
            .then(this.onResponse)
            .catch(this.onError)
            .then(this.onAfter)
    }

    protected abstract onResponse(response: AxiosResponse): void;

    protected abstract onError(error: AxiosError): void

    protected abstract onAfter(): void;
}
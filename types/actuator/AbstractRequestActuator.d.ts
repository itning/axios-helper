import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import IRequest from "./IRequest";
export default abstract class AbstractRequestActuator {
    protected readonly instance: AxiosInstance;
    protected readonly request: IRequest;
    protected constructor(request: IRequest);
    private distribution;
    protected abstract onResponse(response: AxiosResponse): void;
    protected abstract onError(error: AxiosError): void;
    protected abstract onAfter(): void;
}

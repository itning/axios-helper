import IRequestInterceptor from "../interceptor/request/IRequestInterceptor";
import IResponseInterceptor from "../interceptor/response/IResponseInterceptor";
export default class AxiosInstanceFactoryBuilder {
    private _requestInterceptor?;
    private _responseInterceptor?;
    private _timeOut;
    requestInterceptor(value: IRequestInterceptor): AxiosInstanceFactoryBuilder;
    responseInterceptor(value: IResponseInterceptor): AxiosInstanceFactoryBuilder;
    timeOut(value: number): AxiosInstanceFactoryBuilder;
    build(): void;
}

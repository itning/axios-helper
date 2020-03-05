import IRequestInterceptor from "../interceptor/request/IRequestInterceptor";
import IResponseInterceptor from "../interceptor/response/IResponseInterceptor";
import AxiosInstanceFactory from "./AxiosInstanceFactory";

export default class AxiosInstanceFactoryBuilder {
    private _requestInterceptor?: IRequestInterceptor;
    private _responseInterceptor?: IResponseInterceptor;
    private _timeOut = 1000 * 12;

    requestInterceptor(value: IRequestInterceptor): AxiosInstanceFactoryBuilder {
        this._requestInterceptor = value;
        return this;
    }

    responseInterceptor(value: IResponseInterceptor): AxiosInstanceFactoryBuilder {
        this._responseInterceptor = value;
        return this;
    }

    timeOut(value: number): AxiosInstanceFactoryBuilder {
        this._timeOut = value;
        return this;
    }

    build() {
        AxiosInstanceFactory.init({timeout: this._timeOut});
        if (this._requestInterceptor) {
            AxiosInstanceFactory.requestInterceptor = this._requestInterceptor;
        }
        if (this._responseInterceptor) {
            AxiosInstanceFactory.responseInterceptor = this._responseInterceptor;
        }
    }
}
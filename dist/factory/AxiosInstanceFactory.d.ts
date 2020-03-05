import { AxiosInstance } from "axios";
import IRequestInterceptor from "../interceptor/request/IRequestInterceptor";
import IResponseInterceptor from "../interceptor/response/IResponseInterceptor";
import IAxiosInstanceConfig from "./IAxiosInstanceConfig";
export default class AxiosInstanceFactory {
    private static _instance;
    static init(config: IAxiosInstanceConfig): void;
    static set requestInterceptor(req: IRequestInterceptor);
    static set responseInterceptor(req: IResponseInterceptor);
    static get instance(): AxiosInstance;
}

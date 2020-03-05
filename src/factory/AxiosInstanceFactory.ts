import Axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import IRequestInterceptor from "../interceptor/request/IRequestInterceptor";
import IResponseInterceptor from "../interceptor/response/IResponseInterceptor";
import IAxiosInstanceConfig from "./IAxiosInstanceConfig";

export default class AxiosInstanceFactory {
    private static _instance: AxiosInstance;

    static init(config: IAxiosInstanceConfig) {
        AxiosInstanceFactory._instance = Axios.create(config);
    }

    static set requestInterceptor(req: IRequestInterceptor) {
        AxiosInstanceFactory._instance.interceptors.request.use(req.onFulfilled, req.onRejected)
    }

    static set responseInterceptor(req: IResponseInterceptor) {
        AxiosInstanceFactory._instance.interceptors.response.use(req.onFulfilled, req.onRejected)
    }

    static get instance() {
        return AxiosInstanceFactory._instance;
    }
}

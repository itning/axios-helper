import { AxiosRequestConfig } from "axios";
export default interface IRequestInterceptor {
    onFulfilled?: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
    onRejected?: (error: any) => any;
}

import {AxiosResponse} from "axios";

export default interface IResponseInterceptor {
    onFulfilled?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;

    onRejected?: (error: any) => any;
}
import { AxiosError, AxiosResponse } from "axios";
import IFormData from "./IFormData";
export default interface IConfig {
    success: {
        code: number;
    };
    errorMsg: {
        enable: boolean;
        startStr: string;
        handleFun?: (error: AxiosError) => void;
    };
    data: {
        type: DataType;
        form?: IFormData;
        urlSearchParam?: URLSearchParams;
        json?: Object;
    };
    request: {
        do: (response: AxiosResponse) => void;
        after?: () => void;
    };
}
export declare enum HttpRequestMethods {
    GET = 0,
    POST = 1,
    DELETE = 2,
    UPDATE = 3,
    PUT = 4,
    PATCH = 5
}
export declare enum DataType {
    NONE = 0,
    FORM_DATA = 1,
    URL_SEARCH_PARAM = 2,
    JSON = 3
}

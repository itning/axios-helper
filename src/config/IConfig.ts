import {AxiosError, AxiosResponse} from "axios";
import IFormData from "./IFormData";

export default interface IConfig {
    success: {
        code: number
    },
    errorMsg: {
        enable: boolean,
        startStr: string,
        once: boolean,
        handleFun?: (error: AxiosError) => void
    },
    data: {
        type: DataType,
        form?: IFormData,
        urlSearchParam?: URLSearchParams,
        json?: Object
    },
    request: {
        do: (response: AxiosResponse) => void,
        after?: () => void
    }
}

export enum HttpRequestMethods {
    GET,
    POST,
    DELETE,
    PUT,
    PATCH
}

export enum DataType {
    NONE,
    FORM_DATA,
    URL_SEARCH_PARAM,
    JSON
}

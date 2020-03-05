import {AxiosError, AxiosResponse} from "axios";
import IFormData from "./IFormData";

export default interface IConfig {
    success: {
        code: number
    },
    errorMsg: {
        enable: boolean,
        startStr: string,
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
    UPDATE,
    PUT,
    PATCH
}

export enum DataType {
    NONE,
    FORM_DATA,
    URL_SEARCH_PARAM,
    JSON
}
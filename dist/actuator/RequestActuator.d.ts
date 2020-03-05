import AbstractRequestActuator from "./AbstractRequestActuator";
import { AxiosError, AxiosResponse } from "axios";
import IRequest from "./IRequest";
import IErrorMessage from "../config/IErrorMessage";
export default class RequestActuator extends AbstractRequestActuator {
    private static errorMsg?;
    static set errorMsgImpl(errorMsg: IErrorMessage);
    constructor(request: IRequest);
    protected onResponse(response: AxiosResponse): void;
    protected onError(error: AxiosError): void;
    protected onAfter(): void;
}

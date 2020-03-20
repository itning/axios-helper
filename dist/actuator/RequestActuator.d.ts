import AbstractRequestActuator from "./AbstractRequestActuator";
import { AxiosError, AxiosResponse } from "axios";
import IRequest from "./IRequest";
import ErrorMessage from "./message/ErrorMessage";
export default class RequestActuator extends AbstractRequestActuator {
    static errorMessage: ErrorMessage;
    constructor(request: IRequest);
    protected onResponse(response: AxiosResponse): void;
    protected onError(error: AxiosError): void;
    protected onAfter(): void;
}

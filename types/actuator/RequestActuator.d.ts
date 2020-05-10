import AbstractRequestActuator from "./AbstractRequestActuator";
import { AxiosError, AxiosResponse } from "axios";
import IRequest from "./IRequest";
export default class RequestActuator extends AbstractRequestActuator {
    constructor(request: IRequest);
    protected onResponse(response: AxiosResponse): void;
    protected onError(error: AxiosError): void;
    protected onAfter(): void;
}

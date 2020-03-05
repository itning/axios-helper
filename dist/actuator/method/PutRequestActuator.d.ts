import IRequestActuator from "../IRequestActuator";
import { AxiosInstance, AxiosResponse } from "axios";
import IRequest from "../IRequest";
import { HttpRequestMethods } from "../../config/IConfig";
export default class PutRequestActuator implements IRequestActuator {
    canInvoke(method: HttpRequestMethods): boolean;
    invoke(instance: AxiosInstance, request: IRequest): Promise<AxiosResponse>;
}

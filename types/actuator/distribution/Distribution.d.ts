import { HttpRequestMethods } from "../../config/IConfig";
import { AxiosInstance, AxiosResponse } from "axios";
import IRequest from "../IRequest";
export default class Distribution {
    private readonly method;
    constructor(method: HttpRequestMethods);
    distribution(instance: AxiosInstance, request: IRequest): Promise<AxiosResponse>;
}

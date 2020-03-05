import IRequestActuator from "../IRequestActuator";
import {AxiosInstance, AxiosResponse} from "axios";
import IRequest from "../IRequest";
import {HttpRequestMethods} from "../../config/IConfig";

export default class PatchRequestActuator implements IRequestActuator {
    canInvoke(method: HttpRequestMethods): boolean {
        return method === HttpRequestMethods.PATCH;
    }

    invoke(instance: AxiosInstance, request: IRequest): Promise<AxiosResponse> {
        return instance.get(request.url);
    }
}
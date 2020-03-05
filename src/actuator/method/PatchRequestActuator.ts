import IRequestActuator from "../IRequestActuator";
import {AxiosInstance, AxiosResponse} from "axios";
import IRequest from "../IRequest";
import {HttpRequestMethods} from "../../config/IConfig";

export default class PatchRequestActuator implements IRequestActuator {
    canInvoke(method: HttpRequestMethods): boolean {
        return method === HttpRequestMethods.PATCH;
    }

    invoke(instance: AxiosInstance, request: IRequest): Promise<AxiosResponse> {
        if (request.config.data.urlSearchParam) {
            return instance.patch(request.url, request.config.data.urlSearchParam);
        } else if (request.config.data.form) {
            return instance.patch(request.url, request.config.data.form.param, {headers: {'content-type': 'multipart/form-data'}});
        } else if (request.config.data.json) {
            return instance.patch(request.url, request.config.data.json)
        } else {
            return instance.patch(request.url);
        }
    }
}
import IRequestActuator from "../IRequestActuator";
import {AxiosInstance, AxiosResponse} from "axios";
import IRequest from "../IRequest";
import {HttpRequestMethods} from "../../config/IConfig";

export default class DeleteRequestActuator implements IRequestActuator {
    canInvoke(method: HttpRequestMethods): boolean {
        return method === HttpRequestMethods.DELETE;
    }

    invoke(instance: AxiosInstance, request: IRequest): Promise<AxiosResponse> {
        if (request.config.data.urlSearchParam) {
            return instance.delete(request.url, {data: request.config.data.urlSearchParam});
        } else if (request.config.data.form) {
            return instance.delete(request.url, {
                data: request.config.data.form.param,
                headers: {'content-type': 'multipart/form-data'}
            });
        } else {
            return instance.delete(request.url);
        }
    }
}
import IRequestActuator from "../IRequestActuator";
import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import IRequest from "../IRequest";
import {HttpRequestMethods} from "../../config/IConfig";

export default class PostRequestActuator implements IRequestActuator {
    canInvoke(method: HttpRequestMethods): boolean {
        return method === HttpRequestMethods.POST;
    }

    invoke(instance: AxiosInstance, request: IRequest): Promise<AxiosResponse> {
        if (request.config.data.urlSearchParam) {
            return instance.post(request.url, request.config.data.urlSearchParam);
        } else if (request.config.data.form) {
            if (request.config.data.form.uploadProgress) {
                const uploadProgress = request.config.data.form.uploadProgress;
                const config: AxiosRequestConfig = {
                    headers: {'content-type': 'multipart/form-data'},
                    onUploadProgress: (progressEvent: any) => {
                        let progress = progressEvent.loaded / progressEvent.total * 100 | 0;
                        uploadProgress(progress);
                    }
                };
                return instance.post(request.url, request.config.data.form.param, config);
            } else {
                return instance.post(request.url, request.config.data.form.param, {headers: {'content-type': 'multipart/form-data'}});
            }
        } else {
            return instance.post(request.url);
        }
    }
}
import {HttpRequestMethods} from "../../config/IConfig";
import {AxiosInstance, AxiosResponse} from "axios";
import IRequest from "../IRequest";
import GetRequestActuator from "../method/GetRequestActuator";
import PostRequestActuator from "../method/PostRequestActuator";
import DeleteRequestActuator from "../method/DeleteRequestActuator";
import PatchRequestActuator from "../method/PatchRequestActuator";
import PutRequestActuator from "../method/PutRequestActuator";

export default class Distribution {
    private readonly method: HttpRequestMethods;

    constructor(method: HttpRequestMethods) {
        this.method = method;
    }

    distribution(instance: AxiosInstance, request: IRequest): Promise<AxiosResponse> {
        switch (this.method) {
            case HttpRequestMethods.GET: {
                return new GetRequestActuator().invoke(instance, request);
            }
            case HttpRequestMethods.POST: {
                return new PostRequestActuator().invoke(instance, request);
            }
            case HttpRequestMethods.DELETE: {
                return new DeleteRequestActuator().invoke(instance, request);
            }
            case HttpRequestMethods.PATCH: {
                return new PatchRequestActuator().invoke(instance, request);
            }
            case HttpRequestMethods.PUT: {
                return new PutRequestActuator().invoke(instance, request);
            }
        }
    }
}
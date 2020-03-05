import IConfig, {HttpRequestMethods} from "../config/IConfig";

export default interface IRequest {
    url: string,
    method: HttpRequestMethods,
    config: IConfig
}
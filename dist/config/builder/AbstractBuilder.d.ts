import { AxiosError, AxiosResponse } from "axios";
import IConfig, { HttpRequestMethods } from "../IConfig";
export default abstract class AbstractBuilder {
    private readonly method;
    private readonly url;
    protected config: IConfig;
    protected constructor(method: HttpRequestMethods, url: string);
    withSuccessCode(code: number): this;
    withEnableErrorMsg(enable: boolean): this;
    withErrorStartMsg(msg: string): this;
    withErrorHandle(func: (error: AxiosError) => void): this;
    do(response: (response: AxiosResponse) => void): this;
    doAfter(after: () => void): this;
}

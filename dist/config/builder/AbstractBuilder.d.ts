import { AxiosError, AxiosResponse } from "axios";
import IConfig, { HttpRequestMethods } from "../IConfig";
export default abstract class AbstractBuilder {
    private readonly method;
    private readonly url;
    protected config: IConfig;
    protected constructor(method: HttpRequestMethods, url: string);
    withSuccessCode(code: number): AbstractBuilder;
    withEnableErrorMsg(enable: boolean): AbstractBuilder;
    withErrorStartMsg(msg: string): AbstractBuilder;
    withErrorHandle(func: (error: AxiosError) => void): AbstractBuilder;
    do(response: (response: AxiosResponse) => void): AbstractBuilder;
    doAfter(after: () => void): AbstractBuilder;
}

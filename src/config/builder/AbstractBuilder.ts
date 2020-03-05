import {AxiosError, AxiosResponse} from "axios";
import IConfig, {DataType, HttpRequestMethods} from "../IConfig";
import RequestActuator from "../../actuator/RequestActuator";

export default abstract class AbstractBuilder {
    private readonly method: HttpRequestMethods;
    private readonly url: string;

    protected config: IConfig = {
        data: {
            type: DataType.NONE
        },
        request: {
            do: () => {
            }
        },
        errorMsg: {
            enable: true,
            startStr: '错误'
        },
        success: {
            code: 200
        }
    };

    protected constructor(method: HttpRequestMethods, url: string) {
        this.method = method;
        this.url = url;
    }

    withSuccessCode(code: number): AbstractBuilder {
        this.config.success.code = code;
        return this;
    }

    withEnableErrorMsg(enable: boolean): AbstractBuilder {
        this.config.errorMsg.enable = enable;
        return this;
    }

    withErrorStartMsg(msg: string): AbstractBuilder {
        this.config.errorMsg.startStr = msg;
        return this;
    }

    withErrorHandle(func: (error: AxiosError) => void): AbstractBuilder {
        this.config.errorMsg.handleFun = func;
        return this;
    }

    do(response: (response: AxiosResponse) => void): AbstractBuilder {
        this.config.request.do = response;
        new RequestActuator({method: this.method, url: this.url, config: this.config});
        return this;
    }

    doAfter(after: () => void): AbstractBuilder {
        this.config.request.after = after;
        return this;
    }
}
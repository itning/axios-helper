import IErrorMessage from "./config/IErrorMessage";
import RequestActuator from "./actuator/RequestActuator";
import AxiosInstanceFactoryBuilder from "./factory/AxiosInstanceFactoryBuilder";

export default class HelpConfig {
    static axiosInstanceBuilder = new AxiosInstanceFactoryBuilder();

    static set errorMsgImpl(errorMsg: IErrorMessage) {
        RequestActuator.errorMsgImpl = errorMsg;
    }
}
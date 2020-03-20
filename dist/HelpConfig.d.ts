import IErrorMessage from "./actuator/message/IErrorMessage";
import AxiosInstanceFactoryBuilder from "./factory/AxiosInstanceFactoryBuilder";
import ErrorMessage from "./actuator/message/ErrorMessage";
export default class HelpConfig {
    static axiosInstanceBuilder: AxiosInstanceFactoryBuilder;
    static onceMsgFinish: typeof ErrorMessage.showOff;
    static set errorMsgImpl(errorMsg: IErrorMessage);
}

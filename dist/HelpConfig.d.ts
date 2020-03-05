import IErrorMessage from "./config/IErrorMessage";
import AxiosInstanceFactoryBuilder from "./factory/AxiosInstanceFactoryBuilder";
export default class HelpConfig {
    static axiosInstanceBuilder: AxiosInstanceFactoryBuilder;
    static set errorMsgImpl(errorMsg: IErrorMessage);
}

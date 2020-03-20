"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AxiosInstanceFactoryBuilder_1 = __importDefault(require("./factory/AxiosInstanceFactoryBuilder"));
var ErrorMessage_1 = __importDefault(require("./actuator/message/ErrorMessage"));
var HelpConfig = (function () {
    function HelpConfig() {
    }
    Object.defineProperty(HelpConfig, "errorMsgImpl", {
        set: function (errorMsg) {
            ErrorMessage_1.default.errorMsgImpl = errorMsg;
        },
        enumerable: true,
        configurable: true
    });
    HelpConfig.axiosInstanceBuilder = new AxiosInstanceFactoryBuilder_1.default();
    HelpConfig.onceMsgFinish = ErrorMessage_1.default.showOff;
    return HelpConfig;
}());
exports.default = HelpConfig;
//# sourceMappingURL=HelpConfig.js.map
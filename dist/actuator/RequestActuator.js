"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractRequestActuator_1 = __importDefault(require("./AbstractRequestActuator"));
var ErrorMessage_1 = __importDefault(require("./message/ErrorMessage"));
var RequestActuator = (function (_super) {
    __extends(RequestActuator, _super);
    function RequestActuator(request) {
        return _super.call(this, request) || this;
    }
    RequestActuator.prototype.onResponse = function (response) {
        this.request.config.request.do.call(null, response);
    };
    RequestActuator.prototype.onError = function (error) {
        if (this.request.config.errorMsg.enable) {
            if (RequestActuator.errorMessage.isImplements()) {
                RequestActuator.errorMessage.autoShowErrorMsg(this.request.config.errorMsg.startStr, error.response ? error.response.data : "", this.request.config.errorMsg.once);
            }
            if (this.request.config.errorMsg.handleFun) {
                this.request.config.errorMsg.handleFun.call(null, error);
            }
        }
    };
    RequestActuator.prototype.onAfter = function () {
        if (this.request.config.request.after) {
            this.request.config.request.after.call(null);
        }
    };
    RequestActuator.errorMessage = new ErrorMessage_1.default();
    return RequestActuator;
}(AbstractRequestActuator_1.default));
exports.default = RequestActuator;
//# sourceMappingURL=RequestActuator.js.map
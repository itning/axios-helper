"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IConfig_1 = require("../IConfig");
var RequestActuator_1 = __importDefault(require("../../actuator/RequestActuator"));
var AbstractBuilder = (function () {
    function AbstractBuilder(method, url) {
        this.config = {
            data: {
                type: IConfig_1.DataType.NONE
            },
            request: {
                do: function () {
                }
            },
            errorMsg: {
                once: false,
                enable: true,
                startStr: '错误'
            },
            success: {
                code: 200
            }
        };
        this.method = method;
        this.url = url;
    }
    AbstractBuilder.prototype.withSuccessCode = function (code) {
        this.config.success.code = code;
        return this;
    };
    AbstractBuilder.prototype.withEnableErrorMsg = function (enable) {
        this.config.errorMsg.enable = enable;
        return this;
    };
    AbstractBuilder.prototype.withErrorStartMsg = function (msg) {
        this.config.errorMsg.startStr = msg;
        return this;
    };
    AbstractBuilder.prototype.withOnceMsg = function () {
        this.config.errorMsg.once = true;
        return this;
    };
    AbstractBuilder.prototype.withErrorHandle = function (func) {
        this.config.errorMsg.handleFun = func;
        return this;
    };
    AbstractBuilder.prototype.do = function (response) {
        this.config.request.do = response;
        new RequestActuator_1.default({ method: this.method, url: this.url, config: this.config });
        return this;
    };
    AbstractBuilder.prototype.doAfter = function (after) {
        this.config.request.after = after;
        return this;
    };
    return AbstractBuilder;
}());
exports.default = AbstractBuilder;
//# sourceMappingURL=AbstractBuilder.js.map
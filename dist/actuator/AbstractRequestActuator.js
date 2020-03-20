"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AxiosInstanceFactory_1 = __importDefault(require("../factory/AxiosInstanceFactory"));
var Distribution_1 = __importDefault(require("./distribution/Distribution"));
var ErrorMessage_1 = __importDefault(require("./message/ErrorMessage"));
var AbstractRequestActuator = (function () {
    function AbstractRequestActuator(request) {
        this.instance = AxiosInstanceFactory_1.default.instance;
        this.request = request;
        this.distribution();
    }
    AbstractRequestActuator.prototype.distribution = function () {
        var _this = this;
        new Distribution_1.default(this.request.method)
            .distribution(this.instance, this.request)
            .then(function (response) {
            if (response.status === _this.request.config.success.code) {
                _this.onResponse.call(_this, response);
            }
            else {
                if (ErrorMessage_1.default.isImplements() && _this.request.config.errorMsg.enable) {
                    ErrorMessage_1.default.autoShowErrorMsg(_this.request.config.errorMsg.startStr, response.data, _this.request.config.errorMsg.once);
                }
            }
        })
            .catch(function (error) {
            _this.onError.call(_this, error);
        })
            .then(function () {
            _this.onAfter.call(_this);
        });
    };
    return AbstractRequestActuator;
}());
exports.default = AbstractRequestActuator;
//# sourceMappingURL=AbstractRequestActuator.js.map
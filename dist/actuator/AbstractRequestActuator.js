"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AxiosInstanceFactory_1 = __importDefault(require("../factory/AxiosInstanceFactory"));
var Distribution_1 = __importDefault(require("./distribution/Distribution"));
var AbstractRequestActuator = (function () {
    function AbstractRequestActuator(request) {
        this.instance = AxiosInstanceFactory_1.default.instance;
        this.request = request;
        this.distribution();
    }
    AbstractRequestActuator.prototype.distribution = function () {
        new Distribution_1.default(this.request.method)
            .distribution(this.instance, this.request)
            .then(this.onResponse)
            .catch(this.onError)
            .then(this.onAfter);
    };
    return AbstractRequestActuator;
}());
exports.default = AbstractRequestActuator;
//# sourceMappingURL=AbstractRequestActuator.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IConfig_1 = require("../../config/IConfig");
var GetRequestActuator_1 = __importDefault(require("../method/GetRequestActuator"));
var PostRequestActuator_1 = __importDefault(require("../method/PostRequestActuator"));
var DeleteRequestActuator_1 = __importDefault(require("../method/DeleteRequestActuator"));
var PatchRequestActuator_1 = __importDefault(require("../method/PatchRequestActuator"));
var PutRequestActuator_1 = __importDefault(require("../method/PutRequestActuator"));
var Distribution = (function () {
    function Distribution(method) {
        this.method = method;
    }
    Distribution.prototype.distribution = function (instance, request) {
        switch (this.method) {
            case IConfig_1.HttpRequestMethods.GET: {
                return new GetRequestActuator_1.default().invoke(instance, request);
            }
            case IConfig_1.HttpRequestMethods.POST: {
                return new PostRequestActuator_1.default().invoke(instance, request);
            }
            case IConfig_1.HttpRequestMethods.DELETE: {
                return new DeleteRequestActuator_1.default().invoke(instance, request);
            }
            case IConfig_1.HttpRequestMethods.PATCH: {
                return new PatchRequestActuator_1.default().invoke(instance, request);
            }
            case IConfig_1.HttpRequestMethods.PUT: {
                return new PutRequestActuator_1.default().invoke(instance, request);
            }
        }
    };
    return Distribution;
}());
exports.default = Distribution;
//# sourceMappingURL=Distribution.js.map
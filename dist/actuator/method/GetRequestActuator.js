"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IConfig_1 = require("../../config/IConfig");
var GetRequestActuator = (function () {
    function GetRequestActuator() {
    }
    GetRequestActuator.prototype.canInvoke = function (method) {
        return method === IConfig_1.HttpRequestMethods.GET;
    };
    GetRequestActuator.prototype.invoke = function (instance, request) {
        return instance.get(request.url);
    };
    return GetRequestActuator;
}());
exports.default = GetRequestActuator;
//# sourceMappingURL=GetRequestActuator.js.map
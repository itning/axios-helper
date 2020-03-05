"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IConfig_1 = require("../../config/IConfig");
var PutRequestActuator = (function () {
    function PutRequestActuator() {
    }
    PutRequestActuator.prototype.canInvoke = function (method) {
        return method === IConfig_1.HttpRequestMethods.PUT;
    };
    PutRequestActuator.prototype.invoke = function (instance, request) {
        return instance.get(request.url);
    };
    return PutRequestActuator;
}());
exports.default = PutRequestActuator;
//# sourceMappingURL=PutRequestActuator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IConfig_1 = require("../../config/IConfig");
var UpdateRequestActuator = (function () {
    function UpdateRequestActuator() {
    }
    UpdateRequestActuator.prototype.canInvoke = function (method) {
        return method === IConfig_1.HttpRequestMethods.UPDATE;
    };
    UpdateRequestActuator.prototype.invoke = function (instance, request) {
        return instance.get(request.url);
    };
    return UpdateRequestActuator;
}());
exports.default = UpdateRequestActuator;
//# sourceMappingURL=UpdateRequestActuator.js.map
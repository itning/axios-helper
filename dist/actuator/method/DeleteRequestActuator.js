"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IConfig_1 = require("../../config/IConfig");
var DeleteRequestActuator = (function () {
    function DeleteRequestActuator() {
    }
    DeleteRequestActuator.prototype.canInvoke = function (method) {
        return method === IConfig_1.HttpRequestMethods.DELETE;
    };
    DeleteRequestActuator.prototype.invoke = function (instance, request) {
        return instance.get(request.url);
    };
    return DeleteRequestActuator;
}());
exports.default = DeleteRequestActuator;
//# sourceMappingURL=DeleteRequestActuator.js.map
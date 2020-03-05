"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IConfig_1 = require("../../config/IConfig");
var PatchRequestActuator = (function () {
    function PatchRequestActuator() {
    }
    PatchRequestActuator.prototype.canInvoke = function (method) {
        return method === IConfig_1.HttpRequestMethods.PATCH;
    };
    PatchRequestActuator.prototype.invoke = function (instance, request) {
        return instance.get(request.url);
    };
    return PatchRequestActuator;
}());
exports.default = PatchRequestActuator;
//# sourceMappingURL=PatchRequestActuator.js.map
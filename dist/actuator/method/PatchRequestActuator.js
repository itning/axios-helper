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
        if (request.config.data.urlSearchParam) {
            return instance.patch(request.url, request.config.data.urlSearchParam);
        }
        else if (request.config.data.form) {
            return instance.patch(request.url, request.config.data.form.param, { headers: { 'content-type': 'multipart/form-data' } });
        }
        else if (request.config.data.json) {
            return instance.patch(request.url, request.config.data.json);
        }
        else {
            return instance.patch(request.url);
        }
    };
    return PatchRequestActuator;
}());
exports.default = PatchRequestActuator;
//# sourceMappingURL=PatchRequestActuator.js.map
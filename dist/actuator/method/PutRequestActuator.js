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
        if (request.config.data.urlSearchParam) {
            return instance.put(request.url, request.config.data.urlSearchParam);
        }
        else if (request.config.data.form) {
            return instance.put(request.url, request.config.data.form.param, { headers: { 'content-type': 'multipart/form-data' } });
        }
        else {
            return instance.put(request.url);
        }
    };
    return PutRequestActuator;
}());
exports.default = PutRequestActuator;
//# sourceMappingURL=PutRequestActuator.js.map
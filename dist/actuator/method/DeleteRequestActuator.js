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
        if (request.config.data.urlSearchParam) {
            return instance.delete(request.url, { data: request.config.data.urlSearchParam });
        }
        else if (request.config.data.form) {
            return instance.delete(request.url, {
                data: request.config.data.form.param,
                headers: { 'content-type': 'multipart/form-data' }
            });
        }
        else {
            return instance.delete(request.url);
        }
    };
    return DeleteRequestActuator;
}());
exports.default = DeleteRequestActuator;
//# sourceMappingURL=DeleteRequestActuator.js.map
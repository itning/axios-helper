"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IConfig_1 = require("../../config/IConfig");
var PostRequestActuator = (function () {
    function PostRequestActuator() {
    }
    PostRequestActuator.prototype.canInvoke = function (method) {
        return method === IConfig_1.HttpRequestMethods.POST;
    };
    PostRequestActuator.prototype.invoke = function (instance, request) {
        return instance.get(request.url);
    };
    return PostRequestActuator;
}());
exports.default = PostRequestActuator;
//# sourceMappingURL=PostRequestActuator.js.map
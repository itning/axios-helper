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
        if (request.config.data.urlSearchParam) {
            return instance.post(request.url, request.config.data.urlSearchParam);
        }
        else if (request.config.data.form) {
            if (request.config.data.form.uploadProgress) {
                var uploadProgress_1 = request.config.data.form.uploadProgress;
                var config = {
                    headers: { 'content-type': 'multipart/form-data' },
                    onUploadProgress: function (progressEvent) {
                        var progress = progressEvent.loaded / progressEvent.total * 100 | 0;
                        uploadProgress_1(progress);
                    }
                };
                return instance.post(request.url, request.config.data.form.param, config);
            }
            else {
                return instance.post(request.url, request.config.data.form.param, { headers: { 'content-type': 'multipart/form-data' } });
            }
        }
        else {
            return instance.post(request.url);
        }
    };
    return PostRequestActuator;
}());
exports.default = PostRequestActuator;
//# sourceMappingURL=PostRequestActuator.js.map
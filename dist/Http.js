"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GetBuilder_1 = __importDefault(require("./config/builder/GetBuilder"));
var PostBuilder_1 = __importDefault(require("./config/builder/PostBuilder"));
var PatchBuilder_1 = __importDefault(require("./config/builder/PatchBuilder"));
var DeleteBuilder_1 = __importDefault(require("./config/builder/DeleteBuilder"));
var PutBuilder_1 = __importDefault(require("./config/builder/PutBuilder"));
var AxiosInstanceFactory_1 = __importDefault(require("./factory/AxiosInstanceFactory"));
var ErrorMessage_1 = __importDefault(require("./actuator/message/ErrorMessage"));
var Http = (function () {
    function Http() {
    }
    Http.Get = function (url) {
        return new GetBuilder_1.default(url);
    };
    Http.Post = function (url) {
        return new PostBuilder_1.default(url);
    };
    Http.Delete = function (url) {
        return new DeleteBuilder_1.default(url);
    };
    Http.Patch = function (url) {
        return new PatchBuilder_1.default(url);
    };
    Http.Put = function (url) {
        return new PutBuilder_1.default(url);
    };
    Http.Download = function (url, fileName) {
        AxiosInstanceFactory_1.default.instance
            .get(url, {
            responseType: 'blob'
        }).then(function (response) {
            var url = window.URL.createObjectURL(response.data);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.href = url;
            a.download = fileName(response.headers);
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch(function (error) {
            if (error.response !== undefined) {
                var errorMessage = new ErrorMessage_1.default();
                console.warn(error);
                if (errorMessage.isImplements()) {
                    errorMessage.showErrorMsg("下载失败：", error.toString());
                }
            }
        });
    };
    return Http;
}());
exports.default = Http;
//# sourceMappingURL=Http.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var AxiosInstanceFactory = (function () {
    function AxiosInstanceFactory() {
    }
    AxiosInstanceFactory.init = function (config) {
        AxiosInstanceFactory._instance = axios_1.default.create(config);
    };
    Object.defineProperty(AxiosInstanceFactory, "requestInterceptor", {
        set: function (req) {
            AxiosInstanceFactory._instance.interceptors.request.use(req.onFulfilled, req.onRejected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxiosInstanceFactory, "responseInterceptor", {
        set: function (req) {
            AxiosInstanceFactory._instance.interceptors.response.use(req.onFulfilled, req.onRejected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxiosInstanceFactory, "instance", {
        get: function () {
            return AxiosInstanceFactory._instance;
        },
        enumerable: true,
        configurable: true
    });
    return AxiosInstanceFactory;
}());
exports.default = AxiosInstanceFactory;
//# sourceMappingURL=AxiosInstanceFactory.js.map
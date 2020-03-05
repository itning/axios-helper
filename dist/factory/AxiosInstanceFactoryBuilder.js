"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AxiosInstanceFactory_1 = __importDefault(require("./AxiosInstanceFactory"));
var AxiosInstanceFactoryBuilder = (function () {
    function AxiosInstanceFactoryBuilder() {
        this._timeOut = 1000 * 12;
    }
    AxiosInstanceFactoryBuilder.prototype.requestInterceptor = function (value) {
        this._requestInterceptor = value;
        return this;
    };
    AxiosInstanceFactoryBuilder.prototype.responseInterceptor = function (value) {
        this._responseInterceptor = value;
        return this;
    };
    AxiosInstanceFactoryBuilder.prototype.timeOut = function (value) {
        this._timeOut = value;
        return this;
    };
    AxiosInstanceFactoryBuilder.prototype.build = function () {
        AxiosInstanceFactory_1.default.init({ timeout: this._timeOut });
        if (this._requestInterceptor) {
            AxiosInstanceFactory_1.default.requestInterceptor = this._requestInterceptor;
        }
        if (this._responseInterceptor) {
            AxiosInstanceFactory_1.default.responseInterceptor = this._responseInterceptor;
        }
    };
    return AxiosInstanceFactoryBuilder;
}());
exports.default = AxiosInstanceFactoryBuilder;
//# sourceMappingURL=AxiosInstanceFactoryBuilder.js.map
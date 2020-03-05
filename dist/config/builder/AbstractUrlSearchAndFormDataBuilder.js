"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractBuilder_1 = __importDefault(require("./AbstractBuilder"));
var IConfig_1 = require("../IConfig");
var AbstractUrlSearchAndFormDataBuilder = (function (_super) {
    __extends(AbstractUrlSearchAndFormDataBuilder, _super);
    function AbstractUrlSearchAndFormDataBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractUrlSearchAndFormDataBuilder.prototype.withFormData = function (params, uploadProgress) {
        var param = new FormData();
        for (var p in params) {
            if (params.hasOwnProperty(p)) {
                var v = params[p];
                param.append(p, v);
            }
        }
        this.config.data.type = IConfig_1.DataType.FORM_DATA;
        this.config.data.form = { param: param, uploadProgress: uploadProgress };
        return this;
    };
    AbstractUrlSearchAndFormDataBuilder.prototype.withURLSearchParams = function (params) {
        var param = new URLSearchParams();
        for (var p in params) {
            if (params.hasOwnProperty(p)) {
                var v = params[p];
                param.append(p, v);
            }
        }
        this.config.data.type = IConfig_1.DataType.URL_SEARCH_PARAM;
        this.config.data.urlSearchParam = param;
        return this;
    };
    return AbstractUrlSearchAndFormDataBuilder;
}(AbstractBuilder_1.default));
exports.default = AbstractUrlSearchAndFormDataBuilder;
//# sourceMappingURL=AbstractUrlSearchAndFormDataBuilder.js.map
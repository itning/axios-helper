"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpRequestMethods;
(function (HttpRequestMethods) {
    HttpRequestMethods[HttpRequestMethods["GET"] = 0] = "GET";
    HttpRequestMethods[HttpRequestMethods["POST"] = 1] = "POST";
    HttpRequestMethods[HttpRequestMethods["DELETE"] = 2] = "DELETE";
    HttpRequestMethods[HttpRequestMethods["PUT"] = 3] = "PUT";
    HttpRequestMethods[HttpRequestMethods["PATCH"] = 4] = "PATCH";
})(HttpRequestMethods = exports.HttpRequestMethods || (exports.HttpRequestMethods = {}));
var DataType;
(function (DataType) {
    DataType[DataType["NONE"] = 0] = "NONE";
    DataType[DataType["FORM_DATA"] = 1] = "FORM_DATA";
    DataType[DataType["URL_SEARCH_PARAM"] = 2] = "URL_SEARCH_PARAM";
    DataType[DataType["JSON"] = 3] = "JSON";
})(DataType = exports.DataType || (exports.DataType = {}));
//# sourceMappingURL=IConfig.js.map
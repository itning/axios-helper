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
    return Http;
}());
exports.default = Http;
//# sourceMappingURL=Http.js.map
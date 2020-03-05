"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = __importDefault(require("./Http"));
var HelpConfig_1 = __importDefault(require("./HelpConfig"));
exports.Get = Http_1.default.Get;
exports.Post = Http_1.default.Post;
exports.Delete = Http_1.default.Delete;
exports.Patch = Http_1.default.Patch;
exports.Put = Http_1.default.Put;
exports.AxiosHelperConfig = HelpConfig_1.default;
//# sourceMappingURL=index.js.map
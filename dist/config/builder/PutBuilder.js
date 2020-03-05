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
var AbstractUrlSearchAndFormDataBuilder_1 = __importDefault(require("./AbstractUrlSearchAndFormDataBuilder"));
var IConfig_1 = require("../IConfig");
var PutBuilder = (function (_super) {
    __extends(PutBuilder, _super);
    function PutBuilder(url) {
        return _super.call(this, IConfig_1.HttpRequestMethods.PUT, url) || this;
    }
    return PutBuilder;
}(AbstractUrlSearchAndFormDataBuilder_1.default));
exports.default = PutBuilder;
//# sourceMappingURL=PutBuilder.js.map
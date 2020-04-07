"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessage = (function () {
    function ErrorMessage() {
    }
    Object.defineProperty(ErrorMessage, "errorMsgImpl", {
        set: function (errorMsg) {
            ErrorMessage.errorMsg = errorMsg;
        },
        enumerable: true,
        configurable: true
    });
    ErrorMessage.showOff = function () {
        ErrorMessage.isShow = false;
    };
    ErrorMessage.isImplements = function () {
        return ErrorMessage.errorMsg !== undefined;
    };
    ErrorMessage.autoShowErrorMsg = function (title, msg, once) {
        if (once === void 0) { once = false; }
        if (once) {
            ErrorMessage.showOnceErrorMsg(title, msg);
        }
        else {
            ErrorMessage.showErrorMsg(title, msg);
        }
    };
    ErrorMessage.showErrorMsg = function (title, msg) {
        var _a;
        (_a = ErrorMessage.errorMsg) === null || _a === void 0 ? void 0 : _a.showErrorToast(title, msg);
    };
    ErrorMessage.showOnceErrorMsg = function (title, msg) {
        if (ErrorMessage.isShow) {
            return;
        }
        else {
            ErrorMessage.showErrorMsg(title, msg);
            ErrorMessage.isShow = true;
        }
    };
    ErrorMessage.isShow = false;
    return ErrorMessage;
}());
exports.default = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map
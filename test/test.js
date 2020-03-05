import {AxiosHelperConfig, Patch} from "../dist";

//const http = require("../build/index.js");
AxiosHelperConfig.errorMsgImpl = {
    showErrorToast(title, msg) {

    }
};
AxiosHelperConfig.axiosInstanceBuilder
    .requestInterceptor({
        onFulfilled: request => {

        },
        onRejected: error => {

        }
    })
    .responseInterceptor({
        onFulfilled: response => {

        },
        onRejected: error => {

        }
    })
    .build();
Patch("http://api.map.baidu.com/telematics/v3/weather?location=嘉兴&output=json&ak=5slgyqGDENN7Sy7pw29IUvrZ")
    // 成功状态码
    .withSuccessCode(200)
    // 出现错误时是否执行错误消息
    .withEnableErrorMsg(false)
    .withErrorStartMsg("")
    .withErrorHandle((error) => {

    })
    .withFormData({"id": "1"})
    .withURLSearchParams({})
    .withJson({1: 1})
    .do(response => {

    })
    .doAfter(() => {

    });
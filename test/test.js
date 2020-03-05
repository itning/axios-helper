import {AxiosHelperConfig, Get, Patch, Post} from "../dist/index"

AxiosHelperConfig.errorMsgImpl = {
    showErrorToast(title, msg) {
        console.log(title + msg);
    }
};

AxiosHelperConfig.axiosInstanceBuilder
    .requestInterceptor({
        onFulfilled: value => {
            value.headers = {"Accept": "application/json"};
            return value;
        },
        onRejected: error => {
            return Promise.reject(error);
        }
    })
    .responseInterceptor({
        onFulfilled: response => {
            return Promise.resolve(response);
        },
        onRejected: error => {
            if (error.response === undefined) {
                return Promise.reject(error);
            }
            if (error.response.status) {
                switch (error.response.status) {
                    case 401:
                        setTimeout(() => {
                            window.location.href = "/login";
                        }, 2000);
                        return;
                    case 403:
                        console.warn('权限不足');
                        break;
                    case 404:
                        console.warn('请求URL不存在');
                        break;
                    case 500:
                        console.warn('服务器错误');
                        break;
                    case 503:
                        console.warn('服务器错误');
                        break;
                    default:
                        console.warn(error);
                }
                return Promise.reject(error);
            }
        }
    })
    .build();

(() => {
    Get("http://localhost:8888/a")
        .withSuccessCode(100)
        .withEnableErrorMsg(true)
        .do(response => {
            console.log(response)
        })
        .doAfter(() => {
            console.log("after")
        });

    Post("http://localhost:8888/a")
        .withURLSearchParams({msg: "assd"})
        .withSuccessCode(200)
        .withEnableErrorMsg(true)
        .do(response => {
            console.log(response)
        })
        .doAfter(() => {
            console.log("after")
        });

    Patch("http://localhost:8888/a")
        .withJson({a: 1})
        .do(response => {
            console.log(response)
        })
})();
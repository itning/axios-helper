# Axios Helper Lib

[![GitHub stars](https://img.shields.io/github/stars/itning/axios-helper.svg?style=social&label=Stars)](https://github.com/itning/axios-helper/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/itning/axios-helper.svg?style=social&label=Fork)](https://github.com/itning/axios-helper/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/itning/axios-helper.svg?style=social&label=Watch)](https://github.com/itning/axios-helper/watchers)
[![GitHub followers](https://img.shields.io/github/followers/itning.svg?style=social&label=Follow)](https://github.com/itning?tab=followers)

[![GitHub issues](https://img.shields.io/github/issues/itning/axios-helper.svg)](https://github.com/itning/axios-helper/issues)
[![GitHub license](https://img.shields.io/github/license/itning/axios-helper.svg)](https://github.com/itning/axios-helper/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/itning/axios-helper.svg)](https://github.com/itning/axios-helper/commits)
[![GitHub release](https://img.shields.io/github/release/itning/axios-helper.svg)](https://github.com/itning/axios-helper/releases)
[![npm version](https://badge.fury.io/js/%40itning%2Faxios-helper.svg)](https://badge.fury.io/js/%40itning%2Faxios-helper)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/itning/axios-helper.svg)](https://github.com/itning/axios-helper)
[![HitCount](http://hits.dwyl.io/itning/axios-helper.svg)](http://hits.dwyl.io/itning/axios-helper)
[![language](https://img.shields.io/badge/language-TypeScript-green.svg)](https://github.com/itning/axios-helper)

- How to use this lib ?

```shell
npm i @itning/axios-helper
```

```javascript
import {AxiosHelperConfig, Patch} from "@itning/axios-helper";
// Config message toast when net error.
AxiosHelperConfig.errorMsgImpl = {
    showErrorToast(title, data) {
        console.log(title + data.msg);
        setTimeout(() => {
            AxiosHelperConfig.onceMsgFinish();
            console.log('one message show finish')
        }, 2000);
    }
};
// Config interceptor for each request or response.
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
// You can use this api to send http patch request.
// Other http request
//Get("http://api.localhost.com")
//Delete("http://api.localhost.com")
//Post("http://api.localhost.com")
//Put("http://api.localhost.com")
Patch("http://api.localhost.com")
    // Config http success code,default 200.
    .withSuccessCode(200)
    // Config whether to open error message, defalut true.
    .withEnableErrorMsg(false)
    // Config error message title, defalut '错误'.
    .withErrorStartMsg("")
    // Invoke function when error happen.
    .withErrorHandle((error) => {

    })
    // Only show once msg
    .withOnceMsg()
    // Send http request with form data.
    .withFormData({"id": "1"})
    // Send http request with url search param data.
    .withURLSearchParams({})
    // Send http request with json data.	
    .withJson({1: 1})
    // When server response received will call this function.
    // Must call this function and will send http request.
    .do(response => {

    })
    // When do function invoked.
    .doAfter(() => {

    });
```

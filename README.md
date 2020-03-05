# Axios Helper Lib

[![GitHub stars](https://img.shields.io/github/stars/itning/axios-helper.svg?style=social&label=Stars)](https://github.com/itning/axios-helper/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/itning/axios-helper.svg?style=social&label=Fork)](https://github.com/itning/axios-helper/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/itning/axios-helper.svg?style=social&label=Watch)](https://github.com/itning/axios-helper/watchers)
[![GitHub followers](https://img.shields.io/github/followers/itning.svg?style=social&label=Follow)](https://github.com/itning?tab=followers)

[![GitHub issues](https://img.shields.io/github/issues/itning/axios-helper.svg)](https://github.com/itning/axios-helper/issues)
[![GitHub license](https://img.shields.io/github/license/itning/axios-helper.svg)](https://github.com/itning/axios-helper/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/itning/axios-helper.svg)](https://github.com/itning/axios-helper/commits)
[![GitHub release](https://img.shields.io/github/release/itning/axios-helper.svg)](https://github.com/itning/axios-helper/releases)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/itning/axios-helper.svg)](https://github.com/itning/axios-helper)
[![HitCount](http://hits.dwyl.io/itning/axios-helper.svg)](http://hits.dwyl.io/itning/axios-helper)
[![language](https://img.shields.io/badge/language-TypeScript-green.svg)](https://github.com/itning/axios-helper)

- How to use this lib ?

```shell
npm i @itning/axios-helper
```

```javascript
import {AxiosHelperConfig, Patch} from "axios-helper";

AxiosHelperConfig.errorMsgImpl = {
    showErrorToast(title, msg) {
        console.log(title, msg);
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

Patch("http://api.localhost.com")
    .withSuccessCode(200)
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
```
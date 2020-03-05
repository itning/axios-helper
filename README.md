# Axios Helper Lib

- How to use this lib ?

```javascript
import {AxiosHelperConfig, Patch} from "axios-helper";

AxiosHelperConfig.errorMsgImpl = {
    showErrorToast(title, msg, duration) {

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
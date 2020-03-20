import GetBuilder from "./config/builder/GetBuilder";
import PostBuilder from "./config/builder/PostBuilder";
import PatchBuilder from "./config/builder/PatchBuilder";
import DeleteBuilder from "./config/builder/DeleteBuilder";
import PutBuilder from "./config/builder/PutBuilder";
import AxiosInstanceFactory from "./factory/AxiosInstanceFactory";
import ErrorMessage from "./actuator/message/ErrorMessage";

export default class Http {
    static Get(url: string) {
        return new GetBuilder(url);
    }

    static Post(url: string) {
        return new PostBuilder(url);
    }

    static Delete(url: string) {
        return new DeleteBuilder(url);
    }

    static Patch(url: string) {
        return new PatchBuilder(url);
    }

    static Put(url: string) {
        return new PutBuilder(url);
    }

    static Download(url: string, fileName: (fileName: any) => string) {
        AxiosInstanceFactory.instance
            .get(url, {
                responseType: 'blob' //指定返回数据的格式为blob
            }).then(response => {
            let url = window.URL.createObjectURL(response.data);
            let a = document.createElement("a");
            document.body.appendChild(a);
            a.href = url;
            a.download = fileName(response.headers);
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch(error => {
            if (error.response !== undefined) {
                console.warn(error);
                if (ErrorMessage.isImplements()) {
                    ErrorMessage.showErrorMsg("下载失败：", error.toString());
                }
            }
        });
    }
}

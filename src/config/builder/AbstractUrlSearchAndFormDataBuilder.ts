import AbstractBuilder from "./AbstractBuilder";
import IFormParamType from "../IFormParamType";
import {DataType} from "../IConfig";
import IUrlSearchParamType from "../IUrlSearchParamType";
import IPostData from "../requestdata/IPostData";
import IDeleteData from "../requestdata/IDeleteData";

export default abstract class AbstractUrlSearchAndFormDataBuilder extends AbstractBuilder implements IPostData, IDeleteData {
    withFormData(params: IFormParamType, uploadProgress?: (progress: number) => void): AbstractBuilder {
        let param = new FormData();
        for (let p in params) {
            if (params.hasOwnProperty(p)) {
                let v = params[p];
                param.append(p, v);
            }
        }
        this.config.data.type = DataType.FORM_DATA;
        this.config.data.form = {param, uploadProgress};
        return this;
    }

    withURLSearchParams(params: IUrlSearchParamType): AbstractBuilder {
        let param = new URLSearchParams();
        for (let p in params) {
            if (params.hasOwnProperty(p)) {
                let v = params[p];
                param.append(p, v);
            }
        }
        this.config.data.type = DataType.URL_SEARCH_PARAM;
        this.config.data.urlSearchParam = param;
        return this;
    }
}
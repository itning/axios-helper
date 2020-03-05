import AbstractUrlSearchAndFormDataBuilder from "./AbstractUrlSearchAndFormDataBuilder";
import IPatchData from "../requestdata/IPatchData";
import {DataType, HttpRequestMethods} from "../IConfig";

export default class PatchBuilder extends AbstractUrlSearchAndFormDataBuilder implements IPatchData {
    constructor(url: string) {
        super(HttpRequestMethods.PATCH, url);
    }

    withJson(param: Object) {
        this.config.data.type = DataType.JSON;
        this.config.data.json = param;
        return this;
    }
}
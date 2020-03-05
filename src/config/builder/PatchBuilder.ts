import AbstractUrlSearchAndFormDataBuilder from "./AbstractUrlSearchAndFormDataBuilder";
import IPatchData from "../requestdata/IPatchData";
import {DataType, HttpRequestMethods} from "../IConfig";
import AbstractBuilder from "./AbstractBuilder";

export default class PatchBuilder extends AbstractUrlSearchAndFormDataBuilder implements IPatchData {
    constructor(url: string) {
        super(HttpRequestMethods.PATCH, url);
    }

    withJson(param: Object): AbstractBuilder {
        this.config.data.type = DataType.JSON;
        this.config.data.json = param;
        return this;
    }
}
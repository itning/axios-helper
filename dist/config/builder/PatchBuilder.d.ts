import AbstractUrlSearchAndFormDataBuilder from "./AbstractUrlSearchAndFormDataBuilder";
import IPatchData from "../requestdata/IPatchData";
export default class PatchBuilder extends AbstractUrlSearchAndFormDataBuilder implements IPatchData {
    constructor(url: string);
    withJson(param: Object): this;
}

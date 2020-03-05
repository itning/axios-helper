import AbstractUrlSearchAndFormDataBuilder from "./AbstractUrlSearchAndFormDataBuilder";
import IPatchData from "../requestdata/IPatchData";
import AbstractBuilder from "./AbstractBuilder";
export default class PatchBuilder extends AbstractUrlSearchAndFormDataBuilder implements IPatchData {
    constructor(url: string);
    withJson(param: Object): AbstractBuilder;
}

import AbstractUrlSearchAndFormDataBuilder from "./AbstractUrlSearchAndFormDataBuilder";
import {HttpRequestMethods} from "../IConfig";

export default class DeleteBuilder extends AbstractUrlSearchAndFormDataBuilder {
    constructor(url: string) {
        super(HttpRequestMethods.DELETE, url);
    }
}